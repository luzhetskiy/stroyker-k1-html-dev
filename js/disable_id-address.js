function disableAddressInput() {
    const addressInput = document.getElementById('id_address');
    
    if (addressInput) {
        addressInput.disabled = true;
        console.log('Атрибут disabled добавлен к элементу с id="id_address"');
    } else {
        console.log('Элемент с id="id_address" не найден');
    }
}

// Вызов функции после загрузки DOM
document.addEventListener('DOMContentLoaded', disableAddressInput);