const inputRef = document.querySelector('input[id="font-size-control"]')
const nameRef = document.querySelector('span[id="text"]')

inputRef.addEventListener('input', handleInputChange);

function handleInputChange(event) {
    nameRef.style.fontSize = `${event.target.value}px`;
}