const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const list = document.querySelector('#ingredients')
const createList = function (array) {
  array.map(element => {
    const listEl = document.createElement('li')
    list.appendChild(listEl)
    listEl.textContent = element
  }
  )
}
createList(ingredients)
