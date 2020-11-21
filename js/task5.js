const inputRef = document.querySelector('input[id="name-input"]')
const nameRef = document.querySelector('span[id="name-output"]')

inputRef.addEventListener('input', handleInputChange);

function handleInputChange(event) {
    event.target.value ? nameRef.textContent = event.target.value : nameRef.textContent = 'незнакомец'
}
