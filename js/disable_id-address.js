function replaceInputsWithLabels() {
    const addressInputs = document.querySelectorAll('input[id="id_address"]');
    
    addressInputs.forEach((input) => {
        const container = input.parentElement;
        const originalName = input.name;
        const originalId = input.id;
        const currentValue = input.value;
        
        // Создаем скрытое поле
        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = originalName;
        hiddenInput.id = originalId;
        hiddenInput.value = currentValue;
        
        // Создаем label для отображения
        const label = document.createElement('label');
        label.textContent = currentValue || "Укажите точку на карте";
        label.htmlFor = originalId;
        label.className = 'address-display-label';
        
        // Стилизация
        Object.assign(label.style, {
            display: 'flex',
            alignItems: 'center',
            padding: '0',
            fontSize: '14px',
            color: '#000',
            height: '40px',
            cursor: 'default'
        });
        
        // Заменяем input
        container.replaceChild(label, input);
        container.appendChild(hiddenInput);
    });
    
    // Функция для обновления адреса
    window.updateAddressFromMap = function(address) {
        const hiddenInput = document.getElementById('id_address');
        const label = document.querySelector('label[for="id_address"]');
        
        if (hiddenInput && label) {
            hiddenInput.value = address;
            label.textContent = address;
            console.log('Адрес обновлен:', address);
        }
    };
}

document.addEventListener('DOMContentLoaded', replaceInputsWithLabels);