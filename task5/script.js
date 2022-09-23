let form = document.querySelector('form');
let input = document.querySelector('input');
let duplicateField = document.querySelector('#duplicateField');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    duplicateField.textContent = input.value;
    input.value = "";
})