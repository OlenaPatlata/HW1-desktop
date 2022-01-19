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
