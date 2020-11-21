const categoriesLiRef = document.querySelectorAll('li.item');

console.log(`В списке ${categoriesLiRef.length} категории.`)

categoriesLiRef.forEach(elem => {
    console.log(`${elem.firstElementChild.textContent} - Количество элементов:${elem.lastElementChild.children.length}`)
})






