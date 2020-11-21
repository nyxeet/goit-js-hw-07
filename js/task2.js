const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listRef = document.querySelector('#ingredients')
const addLi = element => {
    element.forEach(elem => {
        const liRef = document.createElement('li')
        liRef.textContent = elem;
        listRef.append(liRef);
    })
}
addLi(ingredients);