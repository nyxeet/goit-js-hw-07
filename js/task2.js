const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listRef = document.querySelector('#ingredients')
function addLi(elements) {
  const addList = elements.map(element => {
    const liRef = document.createElement('li')
    liRef.textContent = element;
    return liRef;
  })
  listRef.append(...addList)
}

addLi(ingredients)




