let form = document.querySelector('form');
let input = document.querySelector('input');
let duplicateField = document.querySelector('#duplicateField');

input.addEventListener('input', (event) => {
    duplicateField.textContent = input.value;
});

form.addEventListener('submit', (event) => {
    console.log(input.value);
    input.value = '';
    duplicateField.textContent = '';
});

