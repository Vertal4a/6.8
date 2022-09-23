let userTextField = document.querySelector('a');
userTextField.addEventListener('click', (event) => {
    event.preventDefault();
    let value = prompt('Заряжай!');
    userTextField.textContent = value;
    
})




