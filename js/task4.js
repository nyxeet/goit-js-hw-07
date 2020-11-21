let counter = 0;
const counterRef = document.querySelector('span[id="value"]')
const decrementRef = document.querySelector('button[data-action="decrement"]')
const incrementRef = document.querySelector('button[data-action="increment"]')

incrementRef.addEventListener('click', increment)
decrementRef.addEventListener('click', decrement)

function increment(event) {
    counter += 1;
    counterRef.textContent = counter;
}
function decrement(event) {
    counter -= 1;
    counterRef.textContent = counter;
}



