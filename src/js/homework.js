//?Це ми створюємо змінну numberOfCategories, яка містить всі елементи з класом .item. Тобто оті три <li class="item"> у твоєму списку:

// ?const numberOfCategories = document.querySelectorAll('.item');
//?виводимо в консоль к-сть категорій
// console.log(`Number of categories: ${numberOfCategories.length}`);

// numberOfCategories.forEach(item => {
//?Беремо першу дитину (firstElementChild) елемента .item → це <h2>Animals</h2> і подібні.
// ?.textContent — дістаємо текст всередині, тобто "Animals", "Products" і т.д.
//   console.log(`Category: ${item.firstElementChild.textContent}`);

//?lastElementChild — це останній "дитячий" тег у .item, тобто ось цей:
//<ul>
//<li>Cat</li>
//<li>Hamster</li>
//</ul>
// ?.children — всі елементи <li> всередині цього <ul>.
//?.length — скільки таких елементів.
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
// });

// const categories = document.querySelectorAll('.item');

// // console.log(categories);

// const firstCategory = categories[0];

// console.log(firstCategory);
// console.log(firstCategory.firstElementChild.textContent); // "Animals"
// console.log(firstCategory.lastElementChild.children.length); // 4

// console.log(document.querySelectorAll('li').length); //15
// console.log(document.querySelectorAll('.item').length); //3

/*============================================================================= */

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];

const list = document.querySelector('.gallery');

const listItem = images
  .map(image => {
    return `<li class='gallery__item'>
  <img src='${image.url}' alt='${image.alt}' class='gallery__image'>
  </li>`;
  })
  .join('');
list.insertAdjacentHTML('beforeend', listItem);
