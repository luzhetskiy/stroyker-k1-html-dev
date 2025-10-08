function replaceInputsWithLabels() {
    const addressInputs = document.querySelectorAll('input[id="id_address"]');
    
    addressInputs.forEach((input, index) => {
        const container = input.parentElement;
        const originalValue = input.value;
        
        // Создаем скрытое поле для хранения значения (если нужно для формы)
        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = input.name || 'address';
        hiddenInput.value = originalValue;
        hiddenInput.id = `hidden_${input.id}`;
        
        // Создаем label для отображения
        const label = document.createElement('label');
        label.textContent = originalValue || "Укажите точку на карте";
        label.htmlFor = hiddenInput.id;
        label.className = 'address-display-label';
        
        // Стилизация
        Object.assign(label.style, {
            display: 'flex',
            alignItems: 'center',
            padding: '0 20px',
            fontSize: '14px',
            color: '#000',
            height: '40px',
            cursor: 'default'
        });
        
        // Заменяем видимый input на label и добавляем скрытое поле
        container.replaceChild(label, input);
        container.appendChild(hiddenInput);
    });
}

document.addEventListener('DOMContentLoaded', replaceInputsWithLabels);