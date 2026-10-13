window.addEventListener('load', () => {
    const addressList = document.querySelector('ul[data-role="address-location-select"]')

    if (addressList) {
        const observer = new MutationObserver(() => {
            const selectedItem = addressList.querySelector('li.selected')

            if (selectedItem) {
                const locationSlug = selectedItem.dataset.value
                if (locationSlug) {
                    window.location = `${window.location.pathname}?location=${locationSlug}`
                }
            }
        })

        observer.observe(addressList, {
            subtree: true,
            attributes: true
        })
    }

    ymaps.ready(init)
})

const YAMAP_CONTAINER_ID = 'yamap_addresses'
const PARTNER_CARD_ACTIVE_CLASS = 'partner-item_active'
const PARTNER_CARD_SELECTOR = '[data-partner-card][data-partner-id]'
const partnerMapItems = new Map()
let myMap

function init() {
    const yamapContainer = document.getElementById(YAMAP_CONTAINER_ID)

    if (!yamapContainer) return

    const centerLatitude = parseFloat(yamapContainer.dataset.centerLatitude)
    const centerLongitude = parseFloat(yamapContainer.dataset.centerLongitude)
    const centerZoom = parseInt(yamapContainer.dataset.centerZoom, 10)

    myMap = new ymaps.Map(YAMAP_CONTAINER_ID, {
        center: [centerLatitude, centerLongitude],
        zoom: centerZoom
    }, {
        searchControlProvider: 'yandex#search'
    })

    addPoints(myMap, '.address-data')
    initPartnerCards(myMap)

    myMap.events.add('click', (event) => {
        if (event.get('target') === myMap) closePartnerBalloons()
    })
}

function addPoints(map, selector) {
    document.querySelectorAll(selector).forEach((element) => {
        const latitude = parseFloat(element.dataset.latitude)
        const longitude = parseFloat(element.dataset.longitude)
        const balloonContent = element.dataset.partnerId
            ? createPartnerBalloonContent(element)
            : element.dataset.balloonContent
        const hintContent = element.dataset.hintContent
        const iconPreset = element.dataset.iconPreset
        const glyphIconName = element.dataset.glyphIconName
        const glyphIconColor = element.dataset.glyphIconColor
        const partnerId = element.dataset.partnerId

        const geoObject = new ymaps.GeoObject({
            geometry: {
                type: 'Point',
                coordinates: [latitude, longitude]
            },
            properties: {
                balloonContent,
                hintContent
            }
        }, {
            preset: `islands#${iconPreset}`,
            iconGlyph: glyphIconName,
            iconGlyphColor: glyphIconColor,
            draggable: false
        })

        map.geoObjects.add(geoObject)

        if (partnerId) {
            const partnerItem = getPartnerMapItem(partnerId)
            partnerItem.geoObjects.push(geoObject)

            geoObject.events.add('click', () => {
                selectPartner(partnerId, geoObject, false)
            })
        }
    })
}

function closePartnerBalloons() {
    partnerMapItems.forEach((partnerItem) => {
        partnerItem.geoObjects.forEach((geoObject) => geoObject.balloon.close())
    })
}

function createPartnerBalloonContent(element) {
    const content = document.createElement('div')
    content.className = 'partner-map-card'

    const title = document.createElement('div')
    title.className = 'partner-map-card__title'
    title.textContent = element.dataset.partnerName
    content.appendChild(title)

    const address = document.createElement('div')
    address.className = 'partner-map-card__address'
    address.textContent = element.dataset.partnerAddress
    content.appendChild(address)

    if (element.dataset.partnerPhone) {
        content.appendChild(createPartnerBalloonLink(
            `tel:${element.dataset.partnerPhone}`,
            formatPartnerPhone(element.dataset.partnerPhone),
            'partner-map-card__phone'
        ))
    }

    if (element.dataset.partnerWebsite) {
        const website = createPartnerBalloonLink(
            element.dataset.partnerWebsite,
            element.dataset.partnerWebsiteName || element.dataset.partnerWebsite,
            'partner-map-card__website'
        )
        website.target = '_blank'
        website.rel = 'noopener noreferrer nofollow'
        content.appendChild(website)
    }

    if (element.dataset.partnerPageUrl) {
        content.appendChild(createPartnerBalloonLink(
            element.dataset.partnerPageUrl,
            'Подробнее',
            'partner-map-card__details'
        ))
    }

    return content.outerHTML
}

function createPartnerBalloonLink(href, text, className) {
    const link = document.createElement('a')
    link.className = className
    link.href = href
    link.textContent = text
    return link
}

function formatPartnerPhone(phone) {
    const digits = phone.replace(/\D/g, '')
    if (digits.length !== 11) return phone

    const countryCode = digits[0] === '8' ? '8' : '+7'
    return `${countryCode} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9)}`
}

function initPartnerCards(map) {
    document.querySelectorAll(PARTNER_CARD_SELECTOR).forEach((card) => {
        const partnerId = card.dataset.partnerId
        const partnerItem = getPartnerMapItem(partnerId)
        partnerItem.card = card

        card.addEventListener('click', (event) => {
            if (event.target.closest('a, button, input, select, textarea, label')) return

            const geoObject = partnerItem.geoObjects[0]
            if (!geoObject) return

            selectPartner(partnerId, geoObject, false)

            const coordinates = geoObject.geometry.getCoordinates()
            const zoom = Math.max(map.getZoom(), 15)
            map.setCenter(coordinates, zoom, { duration: 300 })
            geoObject.balloon.open()
            document.getElementById(YAMAP_CONTAINER_ID).scrollIntoView({ behavior: 'smooth', block: 'center' })
        })
    })
}

function getPartnerMapItem(partnerId) {
    if (!partnerMapItems.has(partnerId)) {
        partnerMapItems.set(partnerId, {
            card: null,
            geoObjects: []
        })
    }

    return partnerMapItems.get(partnerId)
}

function selectPartner(partnerId, geoObject, scrollToCard) {
    document.querySelectorAll(`${PARTNER_CARD_SELECTOR}.${PARTNER_CARD_ACTIVE_CLASS}`).forEach((card) => {
        card.classList.remove(PARTNER_CARD_ACTIVE_CLASS)
    })

    partnerMapItems.forEach((partnerItem) => {
        partnerItem.geoObjects.forEach((item) => item.options.set('zIndex', 0))
    })

    const partnerItem = partnerMapItems.get(partnerId)
    if (!partnerItem || !partnerItem.card) return

    const card = partnerItem.card
    if (card.hasAttribute('data-hidden')) {
        const city = card.closest('[data-city]')
        const showMoreButton = city ? city.querySelector('[data-show-more-btn]') : null
        if (showMoreButton) showMoreButton.click()
        card.removeAttribute('data-hidden')
    }

    card.classList.add(PARTNER_CARD_ACTIVE_CLASS)
    geoObject.options.set('zIndex', 1000)

    if (scrollToCard) {
        requestAnimationFrame(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' })
        })
    }
}
