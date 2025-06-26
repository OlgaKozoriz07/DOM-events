// const btn = document.querySelector('.button');
// const title = document.querySelector('.title');

// btn.addEventListener('click', () => {
//   title.textContent =
//     title.textContent === 'Героям Слава!' ? 'Слава Україні!' : 'Героям Слава!';
//   //title.style.color = 'crimson';
// });

/*=========================================================== */
// const input = document.querySelector('.text-input');
// const p = document.querySelector('.text');

// input.addEventListener('input', () => {
//   const inputValue = input.value.trim();
//   p.textContent = inputValue;
// });

// input.addEventListener('input', () => {
//   p.textContent = input.value.trim() === '' ? 'Нічого не введено' : input.value;
// });

// input.addEventListener('input', () => {
//   p.textContent = input.value.toUpperCase();
// });

// input.addEventListener('input', () => {
//   const val = input.value;
//   p.textContent = `${val} (${val.length} символів)`;
// });

/*=================================================== */

// const changeColor = document.querySelector('.color');
// const body = document.body;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// changeColor.addEventListener('click', () => {
//   body.style.backgroundColor = getRandomHexColor();
// });

/*========================================================= */
// const btnMinus = document.querySelector('.minus');
// const btnPlus = document.querySelector('.plus');
// const span = document.querySelector('.value');
// let count = 0;

// btnMinus.addEventListener('click', () => {
//   count -= 1;
//   span.textContent = `${count}`;
// });
// btnPlus.addEventListener('click', () => {
//   count += 1;
//   span.textContent = `${count}`;
// });
