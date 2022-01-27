// ------------------------------------Задача №2 за 18.01.2022----------------------------------------------------
// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
// 	For user input “test” should return “es”
// 	For user input “character” should return “a”
// 	For user input “B” should return “B”
// 	For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”

// const word = prompt('Please, input a word');
// if (word === null || word.trim() === '') {
//     alert('“Invalid value”');
// } else {
//     const wordLength = word.length;
//     if (wordLength % 2 === 0) {
//     const firstIndex = wordLength / 2 - 1;
//     const lastIntex = wordLength / 2 + 1;
//         alert(word.slice(firstIndex, lastIntex));
//     } else {
//         const firstIndex = ((wordLength + 1)/ 2) - 1;
//     const lastIntex = (wordLength + 1)/ 2;
//     alert(word.slice(firstIndex, lastIntex));
//     }
// }




// ------------------------------------Задача №3 за 18.01.2022--------------------------------
// Write the code which verify user rights. Напишите код, который проверяет права пользователя.
// Step 1. Check login/ Шаг 1. Проверьте логин
// 	Ask user for a login // use prompt(). Запросить у пользователя логин // использовать prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert(). Если введена пустая строка или Esc — показать «Отменено». // для показа - используйте alert()
// 	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”. Если длина ввода меньше 4-х символов - показать "Я не знаю пользователей с длиной имени менее 4-х символов".
// 	If it’s another string – then show “I don’t know you”. Если это другая строка — то покажите «Я вас не знаю».
// 	If the visitor enters "User" or "Admin", then prompt for a password. Если посетитель вводит «Пользователь» или «Администратор», то запросит пароль.
// Step 2. Check password: Шаг 2. Проверьте пароль:
// 	For an empty string or cancelled input, show “Canceled.” Для пустой строки или отмененного ввода покажите «Отменено».
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”. Для входа «Пользователь» правильный пароль — «UserPass», для «Администратора» правильный пароль — «RootPass».
// In other case, show “Wrong password”. В противном случае показать «Неверный пароль».
// Step 3. Greets the user appropriately: Шаг 3. Приветствует пользователя соответствующим образом:
// 	If the current time in hours is more then 5.00 and less then 20: // current hours – new Date().getHours() Если текущее время в часах больше 5.00 и меньше 20: // текущие часы – new Date().getHours()
// 	For “User” show “Good day, dear User!”. Для «Пользователя» шоу «Добрый день, дорогой Пользователь!»
// 	For “Admin” show “Good day, dear Admin!”. Для «Админа» шоу «Добрый день, дорогой Админ!»
// 	In other way: Другим способом:
// 	For “User” show “Good evening, dear User!”. Для «Пользователя» шоу «Добрый вечер, дорогой Пользователь!»
// 	For “Admin” show “Good evening, dear Admin!. Для передачи «Админ» «Добрый вечер, дорогой Админ!


// const userLogin = prompt('Please enter your login.');
// console.log(userLogin.toLocaleLowerCase());
// if (userLogin === null || userLogin === '') {
//     alert('Canceled');
// } else if (userLogin.length < 4) {
//     alert("I don't know any users having name length less than 4 symbols");
// } else if ((userLogin.toLocaleLowerCase()) !== 'user' && (userLogin.toLocaleLowerCase()) !== 'admin') {
//     alert("I don’t know you");
// } else if (userLogin.toLocaleLowerCase() === 'user' || userLogin.toLocaleLowerCase() === 'admin') {
//     const USER_PASSWORD = 'UserPass';
//     const ADMIN_PASSWORD = 'RootPass';
//     const checkPassword = prompt('Please enter your password.');
//     if (checkPassword === null || checkPassword === '') {
//         alert('Canceled');
//     } else if (checkPassword !== USER_PASSWORD && checkPassword !== ADMIN_PASSWORD) {
//         alert("Wrong password");
//     } else {
//         const currentTime = new Date().getHours();
//         const startTime = 5;
//         const finishTime = 20;
//         if (currentTime >= startTime && currentTime <= finishTime && checkPassword === USER_PASSWORD) {
//             alert('Good day, dear User!');
//         } else if (currentTime >= startTime && currentTime <= finishTime && checkPassword === ADMIN_PASSWORD) {
//             alert('Good day, dear Admin!');
//         } else if (checkPassword === USER_PASSWORD && (currentTime < startTime || currentTime > finishTime)) {
//             alert('Good evening, dear User!');
//         } else if (checkPassword === ADMIN_PASSWORD && (currentTime < startTime || currentTime > finishTime)) {
//             alert('Good evening, dear Admin!');
//         }
//     }
// }

// ------------------------------------Задачи за 19.01.2022--------------------------------
// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;
// const firstB = b.splice(1);
// console.log(firstB);
// console.log(b);
// let result = a.concat(c, b, firstB);
// console.log(a.concat(c, b).splice(-1));
// Result: ["a", "b", "c", 0, 1, 2, 3];


// let result = a.slice();
// result.push(c);
// result.push(b[0]);
// result = result.concat(b[1]);
// console.log(result);

// -------------------------------------------------задача
// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
// const result = a.copyWithin(3, 0, 3);
// console.log(result);


// -------------------------------------------------задача
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(a);
// const newA = a.splice(5, 3, 0, 0, 0);
// console.log(a);
// Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];


// -------------------------------------------------задача
// const a = [1, 2, [3, 4], [5, 6], 7];
// let result = [];
// for (const i of a) {
//     if (Array.isArray(i)) {
//         result.push(i[0], i[1]);
//     } else {
//         result.push(i);
//     }
// }
// console.log(result);
// Result: [1, 2, 3, 4, 5, 6, 7]



// -------------------------------------------------задача
// const a = [1, 2, [3, 4], [5, 6], 7];
// let result = a.flat();
// console.log(result);

// -------------------------------------------------задача
// const a = ['a', 'k', 'n', 'h', 'n', 'n', 'k'];
// let b=0;
// for (let i = 0; i < a.length; i += 1){
//     if (a[i] === 'n') {
//         b=i
//     }
// }
// console.log(b);


// -------------------------------------------------задача разобраться
// const a = ['a', 'k', 'n', 'h', 'n', 'n', 'k'];
// const result = a.lastIndexOf('n');
// const result = a.length - a.reverse().indexOf('n') - 1;

// -------------------------------------------------задача
// const a = [1, 2, 3, 4, 5, 6, 7];
// let b = [];
// for (let i = a.length - 1; i > -1; i -= 1){
//     b.push(a[i]);
// }
// console.log(b);
// Result: [7, 6, 5, 4, 3, 2, 1]

// -------------------------------------------------задача
// const a = [1, 2, 3, 4, 5, 6, 7];
// a.reverse();
// console.log(a);
// Result: [7, 6, 5, 4, 3, 2, 1]


// -------------------------------------------------задача
// const a = 'alona';
// let b;
// b = a.split('');
// console.log(b);
// ['a', 'l', 'o', 'n', 'a']


// -------------------------------------------------задача
// const a = 'alona';
// const a = 'alona';
// console.log(Array.from(a));
// Result: ['a', 'l', 'o', 'n', 'a']

// -------------------------------------------------задача
// const a = ['a', 'l', 'o', 'n', 'a'];
// console.log(a.join(''));
// Result: 'alona'

// -------------------------------------------------задача
// const a = ['a', 'l', 'o', 'n', 'a'];
// let b = a.toString('');
// b = b.replaceAll(",", '');
// console.log(b);
// let c = b[0].toUpperCase();
// console.log(c);
// let v = b.replace("a", c);
// console.log(v);
// Result: 'Alona'

// Result: 'alona'

// ------------------------------------Задачи за 19.01.2022--------------------------------
// -------------------------------------------------задача
// Write a function that reverse an integer number. You can't use any array methods, besides push.
// reverseNumber(12345) returns 54321
// -12345
// -54321
// function param(data) {
//     let b = 1;
//     if (data < 0) {
//         data = data * (-1);
//         b = -1;
//     }
//     const paramStr = data.toString();
//     const arrParam = paramStr.split('');
//     const reversArr = [];
//     for (let i = arrParam.length - 1; i > -1; i -= 1) {
//         reversArr.push(arrParam[i]);
//     }
//     const newString = reversArr.toString();
//         console.log((Number(newString.replaceAll(',', '')))*b)
//     return newString;
// }
// param(12345);
// param(-12345);


// -------------------------------------------------задача
// // Write a function that converts the argument values. If it will be a string, convert it to number and wise versa. Напишите функцию, которая преобразует значения аргументов. Если это будет строка, преобразуйте ее в число и наоборот.
// // It should return an array of converted values. Он должен возвращать массив преобразованных значений.

// function convertsArgument(...args) {
//     let newArr = [];
//     for (let variable of args) {
//         if (typeof variable !== "string") {
//             newArr.push(String(variable));
//             continue;
//         }  newArr.push(Number(variable));
//     }
//         console.log(newArr);
//         return newArr;
// }
// convertsArgument(2, '1', 2, 3, '4');

// -------------------------------------------------задача
// Write a function that checks is array contains arg passed as a parameter value and return true in this case.
// Напишите функцию, которая проверяет, содержит ли массив аргумент, переданный в качестве значения параметра, и возвращает true в этом случае.
// // containsValue([2, 5, 8], 2)  // returns true
// // containsValue([12, 4, 6], 5)  // returns false

// function containsValue(a, b) {
//     for (const variable of a) {
//         if (variable !== b) {
//             return console.log(false);
//             continue;
//         }return console.log(true)
//     }
// }
// containsValue([2, 5, 8], 2);
// containsValue([12, 4, 6], 5);





// -------------------------------------------------задача
// Write a function which creates an array from the given range of numbers
    // Напишите функцию, которая создает массив из заданного диапазона чисел
    // // makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7]
// // makeListFromRange([8, 5]) // [5, 6, 7, 8]

// function makeListFromRange(array) {
//     let newArray = [];
//     let startIndex = array[0];
//     let lastIndex = array[1];
//     if (lastIndex > startIndex) {
//         for (let i = startIndex; i <= lastIndex; i += 1) {
//             newArray.push(i);
//         }
//     } else {
//         for (let i = lastIndex; i <= startIndex; i += 1) {
//             newArray.push(i);
//         }
//     }
//     console.log(newArray);
//         return newArray;
// }
// makeListFromRange([2, 7]);
// makeListFromRange([8, 5]);
// makeListFromRange([10, 0]);


// ------------------------------------Задачи за 21.01.2022--------------------------------
// -------------------------------------------------задача
// Написать функцию, которая принимает объекти возвращает массив ключей этого объекта

// const listKeys = {
//     keyOne: 1,
//     keyTwo: 2,
//     keyThree: 3
// };

// let a = listKeys;

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };

// a = book;

// function getKeys(object) {
//     const arrKey = [];
//     for (const variable in object) {
//         if (object.hasOwnProperty(variable)) {
//             arrKey.push(variable);
//         }
//     }
//     return arrKey;
// }

// console.log(getKeys(a));

// -------------------------------------------------задача
// Написать функцию, которая принимает объекти возвращает массив значений свойств этого объекта

// function getValues(object) {
//     const arrKey = [];
//     for (const variable in object) {
//         if (object.hasOwnProperty(variable)) {
//             arrKey.push(object[variable]);
//         }
//     }
//     return arrKey;
// }
// console.log(getValues({keyOne: 1,    keyTwo: 2,    keyThree: 3}));

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };

// console.log(getValues(book));


// -------------------------------------------------Задача
// Написать функцию, которая чтобы значением был массив всех значений объекта всех значений users

const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// function generateStatus() {
//     const mathZ = Math.random();
//     if (mathZ <= 0.5) {
//         return true;
//     }
//     return false;
// }

// function newArray(users) {
//     const arrCopy = [];
//     for (const user of users) {
//         const object = {...user};

//         object.vip = generateStatus();
//         object.skills = "no information";
//         arrCopy.push(object);
//     }
    
//     return arrCopy;
// }
// console.log(newArray(users));
// console.log(users);







// вариант 1
// function createObjects(prmtr) {
//     console.table(prmtr);
//     const setObjects = {};
//     const keys = Object.keys(prmtr[0]);
//     for (const key of keys) {
//         setObjects[key] = [];
//         for (let i = 0; i < prmtr.length; i += 1) {
//         setObjects[key].push(prmtr[i][key]);
//     }
//     }
// return setObjects
// }
// console.log(createObjects(users));

// вариант 2
// function createObjects(parameters) {
//     console.table(parameters);
//     const setObjects = {};
//     // собираем массив ключей из первого массива
//     const keys = Object.keys(parameters[0]);
//     // перебираем массив ключей и создаем свойства с именами ключей в пустом объекте setObjects
//     for (const key of keys) {
//         setObjects[key] = [];
//         // вытягиваем из каждого объекта значения и пушим в пустые массивы
//         for (const parameter of parameters) {
//             setObjects[key].push(parameter[key]);
//         }
//     }
//     let finalObject = {};
//     // перебираем значения свойств setObjects[key] и все разглаживаем методом .flat(), чтобы вынуть все вложенные элемнты из массивов. Метод .flat() возвращает новый массив
//     for (const key in setObjects) {
//         finalObject[key] = setObjects[key].flat();
//     }
//     const lastObject = {};
// // запускаем цикл в котором создаем свойства в объекте lastObject (пустые массивы для запушивания окончательных элементов после фильтрации)
//     for (const key in finalObject) {
//         lastObject[key] = [];
//         //  запускаем перебор, чтобы найти одинаковые-повторяющиеся элементы в каждом массиве.Используем метод.indexOf,который возвращает индекс первого элемента с запрашиваемым значением
//         for (let i = 0; i < finalObject[key].length; i += 1){
//             if (finalObject[key].indexOf(finalObject[key][i]) === i) {
//                 lastObject[key].push(finalObject[key][i]);
//             }
//         }
//     }
//     return lastObject;
// }
// console.log(createObjects(users));



// -----------------Пример для решения-----------ДЗ 17/41 модуль 3
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
//   }
// console.log(hexColors);
// console.log(rgbColors);



// -------------------------------------------------Задача, 25/01/2022
// Write function, which iterates over array and executes function on each element.
// Напишите функцию, которая выполняет итерацию по массиву и выполняет функцию для каждого элемента
// const executeforEach = (array, callback) => array.map(item => callback(item));

// executeforEach([1, 2, 3], function (el) { console.log(el * 2) });
// 2 4 6


// -------------------------------------------------задача
// Write a function that checks is array contains arg passed as a parameter value and return true in this case
// Напишите функцию, которая проверяет, содержит ли массив аргумент, переданный в качестве значения параметра, и возвращает true в этом случае.
// const containsValue = (array, value) => {
//     let a=false;
//     array.forEach(item => {
//         if (item === value) {
//             a = true;
//         }
//     })
//     return a;
// }

// console.log(containsValue([2, 5, 8], 2));
// console.log(containsValue([12, 4, 6], 5));
// // containsValue([2, 5, 8], 2)  // returns true
// // containsValue([12, 4, 6], 5)  // returns false

// -------------------------------------------------задача
// // Write function substitute() that accepts an array of numbers and manages to replace all numbers lower than 20 and greater than 10
// // with '*'. It should return a new array with numbers and '*' instead of these numbers.
// Напишите функцию replace(), которая принимает массив чисел и заменяет все числа меньше 20 и больше 10.
// // с участием '*'. Он должен возвращать новый массив с числами и '*' вместо этих чисел.

const substitute = array => array.map(item => (item < 20 && item > 10) ? "*": item);

// console.log(substitute([58, 14, 48, 12, 31, 19, 10]));
// returns [58, '*', 48, '*', 31, '*', 10]



// -------------------------------------------------задача #1    26.01.2022
// Write a function - positiveSum
// It should accept an array of numbers and return a result of their addition. But you must calculate only positive numbers and omit negative if any presents.
// Напишите функцию - PositiveSum
// Он должен принимать массив чисел и возвращать результат их сложения. Но вы должны вычислять только положительные числа и опускать отрицательные, если они есть.
// const positiveSum = array => array.filter(item => item >= 0).reduce((sum, item) => sum + item, 0)
const positiveSum = array => array.reduce((newArray, item) => (item>=0 ? newArray+item: newArray), 0)
// const positiveSum = arr => arr.reduce((acc, el) => (el >= 0 ? acc + el : acc), 0);

// For example:
// console.log(positiveSum([2, 4, 6, 8]))  // => 20
// console.log(positiveSum([0, -3, 5, 7]))  // => 12





// -------------------------------------------------задача #2   26.01.2022
// Write a function – letterCount
// It accepts two string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.

// const letterCount = (string1, string2) => [...string1.toLowerCase()].filter(elem => elem === string2.toLowerCase()).length;

// const letterCount = (string1, string2) => [...string1.toLowerCase()].reduce((acc, elem )=> (elem === string2.toLowerCase()) ? acc+1 : acc, 0);

// const letterCount = (str, lett) =>
// 	str
// 		.toLowerCase()
// 		.split("")
// 		.reduce((acc, letter) => (letter === lett ? acc + 1 : acc), 0);


// For example:
// console.log(letterCount("Maggy", "g")) // => 2
// console.log(letterCount("Barry", "b")) // => 1
// console.log(letterCount("", "z") )    // => 0

// -------------------------------------------------задача #3   26.01.2022
// Our football team completed the championship. The result of each match look like "x:y".
// Results of all matches are recorded in the collection like this: ["3:1", "2:2", "0:1", ...]
// Write a function – countPoints
// It should accept a collection of football games scores and count the points of our team in the championship.
// Rules for counting points for each match:
// •	if x > y   - 3 points
// •	if x < y   - 0 point
// •	if x = y   - 1 point
// ВАРИАНТ 1 РЕШЕНИЯ
// const countPoints = array => array.reduce((acc, elem) => {
//     if (elem[0] > elem[2]) {
//        return acc + 3;
//     } else if (elem[0] === elem[2]) {
//         return acc + 1;
//     } return acc;
// }, 0)
// ВАРИАНТ 2 РЕШЕНИЯ
// const countPoints = array => array.filter(elem => (elem[0] > elem[2])).length * 3 + array.filter(elem => (elem[0] === elem[2])).length
// For example:
// console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0'])) // => 17
// countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']) // => 12

const array = [1, 2, 3, 4, 5]
// ВАРИАНТ 1 ДЛЯ РЕШЕНИЯ
// const arrayNew = [];
// let total = 0;
// for (let item of array) {
//         arrayNew.push(total += item);
// }
// console.log(arrayNew)


// ВАРИАНТ 2 ДЛЯ РЕШЕНИЯ
// const getSums =

// ВАРИАНТ 3 ДЛЯ РЕШЕНИЯ
// const getSums = array =>
//   [...array].reduce((acc, num, index) => {
//     if (index === 0) {
//       acc[index] = num;
//       return acc;
//     }
//     acc[index] = acc[index - 1] + num;
//     return acc;
//   }, []);

// ВАРИАНТ 4 ДЛЯ РЕШЕНИЯ
//   const getSums = array =>
//   [...array].reduce((acc, num, index) => {
//     if (index === 0) {
//       acc[index] = num;
//       return acc;
//     }
//     acc[index] = acc[index - 1] + num;
//     return acc;
//   }, []);


// console.log(getSums([1, 2, 3, 4, 5]))


// ----------- ЗАДАЧИ ПРАКТИКА ЗА 27.01.2022
// ----------- ЗАДАЧА № 1 ПРАКТИКА ЗА 27.01.2022
// // Write a function that accepts an array of object and returns new array of values by passed key name.
// // That function should not change the original array.
// // Напишите функцию, которая принимает массив объектов и возвращает новый массив значений по переданному имени ключа.
// // Эта функция не должна изменять исходный массив.
const fruits = [
  { name: "apple", weight: 0.5 },
  { name: "pineapple", weight: 2 }
];

const getArrayOfKeys = (array, key) => array.reduce((acc, item) => {
    acc.push(item[key])
    return acc
}, [])

// console.log(getArrayOfKeys(fruits, 'name'));
// getArrayOfKeys(fruits, ‘name’);
// returns [‘apple’, ‘pineapple’]




// ----------- ЗАДАЧА № 2 ПРАКТИКА ЗА 27.01.2022

const first = [1, 3, 3, 4, 6, 5, 4];
const second = [6, 3, 5, 2, 2];
const third = [8, 13, 222, 93, 43, 11];
const fourth = [8, 222, 12, 93, 77, 83, 12, 43];

    // вариант решения 1
const getUnique = (first, second) => {
    const filteredFirstArray = first.filter(item => !second.includes(item));
    const filteredSecondArray = second.filter(item => !first.includes(item));
    const newArray = [...filteredFirstArray, ...filteredSecondArray].filter((elem, index, array) => array.indexOf(elem) === index).sort ((a,b)=> a-b);
    return newArray;
}
    // вариант решения 2
// const getUnique = (first, second) => {
//   return [
//     ...first.filter((el) => !second.includes(el)),
//     ...second.filter((el) => !first.includes(el)),
//   ]
//     .sort((a, b) => a - b)
//     .filter((e, i, arr) => i === arr.indexOf(e));
// };

    // вариант решения 3
// const getUnique = (arr1, arr2) =>
//   [...arr1.filter(el => !arr2.includes(el)), ...arr2.filter(el => !arr1.includes(el))]
//     .reduce((acc, el) => (!acc.includes(el) ? [...acc, el] : acc), [])
//     .sort((a, b) => a - b);

// console.log(getUnique(first, second)); // [1, 2, 4]
// console.log(getUnique(third, fourth)); // [11, 12, 13, 77, 83]


// ----------- ЗАДАЧА № 3 ПРАКТИКА ЗА 27.01.2022
// Подсчитать баланс всех юзеров чей возраст больше 30
const sumBalance = users => users.reduce((acc, user) => user.age > 30 ? acc + user.balance : acc, 0);
// console.log(sumBalance(users));




// ----------- ЗАДАЧА № 4 ПРАКТИКА ЗА 27.01.2022
// На выходе получить новый массив с одним другом у каждого юзера
// const changeKey = users => users.map(user => {
//     const newArr = ({ ...user });
//     newArr.bestFriend = user.friends[0]
//     const { friends, ...newArrOneFrend } = newArr
//     return newArrOneFrend
// })

const changeKey = users => users.map(({ friends, ...obj }) => ({...obj, bestFriend:friends[0]}))
console.log(changeKey(users));









// Задача лекция Таня
// Напишите функцию, которая разделяет массив на части заданного размера.
// const chunk = (array, maxSize) => array.reduce((acc, num) => {

// }, [[]]);
// const data = [1, 2, 3, 4, 5, 6, 7];
// console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]
// console.log(chunk(data, 4)); // [[1, 2, 3, 4], [5, 6, 7]]
// console.log(chunk(data, 1)); // [[1], [2], [3], [4], [5], [6], [7]]

