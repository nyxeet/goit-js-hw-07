let counter = 0;
const counterRef = document.querySelector('span[id="value"]')
const decrementRef = document.querySelector('button[data-action="decrement"]')
const incrementRef = document.querySelector('button[data-action="increment"]')

incrementRef.addEventListener('click', plusCounter)
decrementRef.addEventListener('click', minusCounter)

function plusCounter(event) {
    counter += 1;
    counterRef.textContent = counter;
}
function minusCounter(event) {
    counter -= 1;
    counterRef.textContent = counter;
}



