
// html  теги
// div - блочный , header - блочный
// p, span - строчный
// input - строчный

// блочный - занимает всю доступную ширину
// строчный - отображается в строчку

// типы данных в js
const number = 2; // число
const string = '2'; // строка
const TRUE = true; // булевые
const FALSE = false; // булевые

// объект
const user = {
    name: 'Nickname',
    password: '*********',
    number: '899923232121',
};

// Массив
const array = [user, user, user];
console.log('Как узнать длину массива', array.length)

// Перебрать массив  - метод map
// Пример
// const numberArray = [1,2,3]
// numberArray.map((item) => item * 12)

// на выходе  [12, 24, 36]

// функция
function sum(a, b) {
    return a + b;
}
