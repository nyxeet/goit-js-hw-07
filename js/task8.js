
const renderButton = document.querySelector('button[data-action="render"]')
const destroyButton = document.querySelector('button[data-action="destroy"]')
const inputRef = document.querySelector('#controls input')
const divBoxes = document.querySelector('#boxes')


renderButton.addEventListener('click', event => { createBoxes(inputRef.value) })
// без передачи ивента не работает, спросить у ментора почему
destroyButton.addEventListener('click', destroyBoxes);


let defBoxWidth = 20;
let defBoxHeight = 20;
function createBoxes(amount) {
    for (let i = 0; i <= amount - 1; i += 1){
        const createBox = document.createElement('div')
        createBox.classList.add('task8-box');
        defBoxWidth += 10;
        defBoxHeight += 10;
        createBox.style.width = `${defBoxWidth}px`;
        createBox.style.height = `${defBoxHeight}px`;
        createBox.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
        divBoxes.append(createBox);
    }
    return defBoxWidth, defBoxHeight; 
}
function destroyBoxes(event) {
    divBoxes.innerHTML = '';
    defBoxWidth = 20;
    defBoxHeight = 20;
}