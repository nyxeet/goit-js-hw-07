const inputRef = document.querySelector('input[id="name-input"]')
const nameRef = document.querySelector('span[id="name-output"]')

inputRef.addEventListener('input', handleInputChange);

function handleInputChange({ target }) {
    const { value } = target;
    value ? nameRef.textContent = value : nameRef.textContent = 'незнакомец'
}
