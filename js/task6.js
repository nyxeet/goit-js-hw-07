const inputRef = document.querySelector('input[id="validation-input"]');

inputRef.addEventListener('input', clearClasses);
inputRef.addEventListener('blur', isValidate);

function clearClasses(event) {
    if (!event.target.value) {
        inputRef.classList.remove('valid', 'invalid');
    }
}
function isValidate({ target }) {
    const inputAttribute = inputRef.getAttribute('data-length');
    const { value } = target;

    if (value.length == inputAttribute) {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid');
    }
}