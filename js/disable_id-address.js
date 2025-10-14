function configureAddressInput() {
    const addressInput = document.getElementById('id_address');
    
    if (addressInput) {
        // Блокируем инпут
        addressInput.disabled = true;
        addressInput.placeholder = "Укажите точку на карте";
        
        // Стили
        Object.assign(addressInput.style, {
            backgroundColor: 'transparent',
            color: '#000',
            border: 'none',
            cursor: 'not-allowed'
        });
        
        // Функция для обновления адреса из карты
        window.updateAddressFromMap = function(address) {
            addressInput.value = address;
            console.log('Адрес установлен:', address);
        };
        
        console.log('Инпут адреса настроен');
    }
}

document.addEventListener('DOMContentLoaded', configureAddressInput);