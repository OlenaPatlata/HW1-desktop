// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }


// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;
// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }
//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = "Клиента с таким именем нет в базе данных!";
// }
// console.log(message); // "Клиент с таким именем есть в базе данных!"

// const words = ["JavaScript", "это", "интересно"];
// console.log(words.join("")); // "JavaScriptэтоинтересно"
// console.log(words.join(" ")); // "JavaScript это интересно"
// console.log(words.join("-")); // "JavaScript-это-интересно"


// const wordss = [1, 2, 3];
// console.log(wordss.join("")); // "JavaScriptэтоинтересно"
// console.log(wordss.join(" ")); // "JavaScript это интересно"
// console.log(wordss.join("-")); // "JavaScript-это-интересно"

// // Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherryz";
// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);
// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// } else { console.log("Не красный фрукт");}


// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line
  
//   if (password === ADMIN_PASSWORD) {
 
//     return message = "Welcome!";
//   } 
//   if (password !== ADMIN_PASSWORD) {  
//   return message = "Access denied, wrong password!";
//   }
// }

// checkPassword("jqueryismyjamz");
// console.log(message);


// function withdraw(amount, balance) {
  // Если  условие выполняется, вызывается console.log
  // и выход из функции. Код идущий после тела if не выполнится.
  // if (amount === 0) {
  //   console.log("Для проведения операции введите сумму больше нуля");
  //   return;
  // }

  // Если условие первого if не выполнилось, его тело пропускается
  // и интерпретатор доходит до второго if.
  // Если условие выполняется, вызывается console.log и выход из функции.
  // Код идущий после тела if  не выполнится.
  // if (amount > balance) {
  //   console.log("Недостаточно средств на счету");
  //   return;
  // }

  // Если ни один из предыдущих if не выполнился,
  // интерпретатор доходит до этого кода и выполняет его.
//   console.log("Операция снятия средств проведена");
// }

// withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
// withdraw(500, 300); // "Недостаточно средств на счету"
// withdraw(100, 300); // "Операция снятия средств проведена"



// function getExtremeElements(array) {
  // Change code below this line

  // const deletedScores = array.splice(1, array.length - 2);
  // console.log([array[0], array[array.length - 1]]);
  // console.log(deletedScores);
  // console.log(array);
  // return; 

  // Change code above this line
// }
// let array = [1, 2, 3, 4, 5];
// getExtremeElements([1, 2, 3, 4, 5]);




//--------------Задача на чаевые------------------
// const price = prompt('Введите сумму потраченных средств:');
// console.log(price);
// const formatedPrice = Number.parseFloat(price);
// console.log(formatedPrice);

// const tip = prompt('Введите процент чаевых:');
// console.log(tip);
// const formatedTip = Number.parseFloat(tip);

// const tipAmount = Number((formatedPrice * formatedTip / 100).toFixed(2));

// const totalSum = Number((formatedPrice + tipAmount).toFixed(2));
// const message1 = `Check number: ${formatedPrice}\nTip:${formatedTip}%\nTip amount: ${tipAmount}\nTotal sum to pay: ${totalSum}`;
// alert(message1);
//--------------Конец задачи на чаевые------------------








// --------------------------------------ДЗ 10/32 модуль 2
// function splitMessage(message, delimeter) {
//   let words = message.split(delimeter);
// console.log(words);
//   return words;
// }
// splitMessage("Mango hurries to the train", " ");
// ['Mango', 'hurries', 'to', 'the', 'train']


// --------------------------------------ДЗ 11/32 модуль 2
// function calculateEngravingPrice(message, pricePerWord) {
// const splitMassege = (message.split(" ")).length * pricePerWord;
// console.log(splitMassege);
//   return splitMassege;

// }
// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);


// --------------------------------------ДЗ 12/32 модуль 2
// function makeStringFromArray(array, delimeter) {
//   let string = array.join(delimeter);
//   console.log(string);
//   return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");



// --------------------------------------ДЗ 13/32 модуль 2
// function slugify(title) {
//   let slug = ((title.split(" ")).join("-")).toLowerCase();
//   console.log(slug);
// return slug;
// }
// slugify("Arrays for begginers");
// arrays-for-begginers




// --------------------------------------ДЗ 16/32 модуль 2
// function makeArray(firstArray, secondArray, maxLength) {

//   let unitedArray = firstArray.concat(secondArray);
  
// if(unitedArray.length > maxLength){
//   unitedArray = unitedArray.slice(0, maxLength);
//   }
//   console.log(unitedArray);
//   return unitedArray;
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);




// --------------------------------------ДЗ 18/32 модуль 2
// function calculateTotal(number) {
//  let numberTotal = 0;
//   for (let i = 1; i <= number; i += 1) {
//     numberTotal += i;
//     }
//     console.log(numberTotal);
//   return numberTotal;
// }
// calculateTotal(3);


// --------------------------------------ДЗ 20/32 модуль 2
// function calculateTotalPrice(order) {
//   let total = 0;
// for(let i=0; i<=order.length-1; i+=1){
//   total = total + order[i];
// }
//   console.log(total);
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);


// --------------------------------------ДЗ 20/32 модуль 2
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for(let i=min; i<=max; i+=1){
// numbers.push(i);
// }
//   console.log(numbers);
//   return numbers;
// }
// createArrayOfNumbers(2, 6);



// --------------------------------------ДЗ 21/32 модуль 2
// function findLongestWord(string) {
//   let splitString = string.split(' ');
//   console.log(splitString);
//   let lengthWord = 0;
//   let indexWorld = 0;
//   for (let i = 0; i <= splitString.length-1; i += 1) {
//     if (lengthWord <= splitString[i].length) {
//       lengthWord = splitString[i].length;
//       indexWorld = i;
//         }
//   }
//     console.log(splitString[indexWorld]);
//   return splitString[indexWorld];
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("May the force be with you");



// --------------------------------------ДЗ 23/32 модуль 2
// function filterArray(numbers, value) {
//   let maxArray = [];
// for(let i=0; i<=numbers.length-1; i+=1){
//   if((numbers[i])>value){
//     maxArray.push(numbers[i]);
//   }
//   }
//   console.log(maxArray);
// return maxArray;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([12, 24, 8, 41, 76], 38);



// --------------------------------------ДЗ 24/32 модуль 2
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits.includes(fruit));
//   return; // Change this line
// }

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   let a = fruits.includes(fruit) ? true : false;
//   console.log(a);
//   return a; // Change this line
// }
// checkFruit("plum");


// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit); // Change this line
// }
// checkFruit("plumn");


// --------------------------------------ДЗ 25/32 модуль 2
// function getCommonElements(array1, array2) {
//   let newArray = [];
//   for (let i = 0; i <= array1.length - 1; i += 1){
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   console.log(newArray);
//   return newArray;
// }
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([1, 2, 3], [10, 20, 30]);


// --------------------------------------ДЗ 31/32 модуль 2
// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       console.log(i);
//         return i;
//      }
//   }
// }
// findNumber(16, 35, 7);

// --------------------------------------ДЗ 12/41 модуль 3
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//   }
// }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));




// --------------------------------------ДЗ 13/41 модуль 3
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key])
// }
// console.log(keys);
// console.log(values);




// --------------------------------------ДЗ 14/41 модуль 3
// function countProps(object) {
//   // Change code below this line
//   const keys = Object.keys(object);
//   return keys.length;
//   // Change code above this line
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// --------------------------------------ДЗ 15/41 модуль 3
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys);
// console.log(values);

// --------------------------------------ДЗ 16/41 модуль 3
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const arrSalaris = Object.values(salaries);
//   for (const salary of arrSalaris) {
//     totalSalary += salary;
//   }
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));



// --------------------------------------ДЗ 17/41 модуль 3
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


// --------------------------------------ДЗ 18/41 модуль 3
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name !== productName) {
//       continue;
//     } else if (product.name === productName) {
//       return product.price;
//     }
//   }  return null;
// }
//   // Change code above this line


// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Engine"));


// --------------------------------------ДЗ 19/41 модуль 3
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   // Change code below this line
//   const allProperty = [];
//   const keys = Object.keys(products[0]);
//   console.log(keys);

//   console.log(propName);
//   console.log([propName]);
//   for(const key of keys){
//     if (propName === key) {
//       // console.log('ура');
//       for (const product of products) {
//           console.log(product);
//           console.log(product[propName]);
//           allProperty.push(product[propName]);
//       }
//     } continue;
//   }
//     return allProperty;
  // Change code above this line
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));




// --------------------------------------ДЗ 20/41 модуль 3
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   const keys = Object.keys(products[0]);
//   // console.log(keys);
//   for (const key of keys) {
//     for (const product of products) {
//       if (productName === product[key]) {
//         // console.log(product.price);
//         // console.log(product.quantity);
//         const totalPrice = product.price * product.quantity;
//         return totalPrice;
//       }
//     }
//     // console.log(productName);
//     // console.log(products[key]);
//     // console.log(key);
//     continue;
//   }
//   return 0;
//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));



// --------------------------------------ДЗ 21/41 модуль 3
// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday, today, tomorrow} = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3
// console.log(meanTemperature);


// --------------------------------------ДЗ 22/41 модуль 3
// В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday, today, tomorrow, icon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);



// --------------------------------------ДЗ 23/41 модуль 3
// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday:highYesterday, today:highToday, tomorrow:highTomorrow, icon:highIcon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;
// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// --------------------------------------ДЗ 24/41 модуль 3
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }


// --------------------------------------ДЗ 25/41 модуль 3
// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const { today: { low:lowToday, high:highToday, icon:todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// }, tomorrow: { low:lowTomorrow, high:highTomorrow, icon:tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", }, } = forecast;


// --------------------------------------ДЗ 26/41 модуль 3
// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.
// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.
// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const { today: { low:todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;
// // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }



// --------------------------------------ДЗ 27/41 модуль 3
// В переменной scores хранится массив результатов тестирования. Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// --------------------------------------ДЗ 28/41 модуль 3
// В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:
// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// --------------------------------------ДЗ 29/41 модуль 3
// В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};


// --------------------------------------ДЗ 30/41 модуль 3
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.
// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.
// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать. Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const newTask = {category, priority, ...data, completed};
//   console.log(newTask);
//   // Change code above this line
// }

// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }));

// --------------------------------------ДЗ 31/41 модуль 3
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.
// Change code below this line
// function add(...args) {
//   let totalSum = 0;
//   for (const arg of args) {
//     totalSum += arg;
//   }
//   return totalSum;
//   // Change code above this line
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));


// --------------------------------------ДЗ 32/41 модуль 3
// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.
// Change code below this line
// function addOverNum(maxArg, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(arg > maxArg) {
//       total += arg;
//     }
//     continue;
//   }

//  return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27)); 
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); 
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// --------------------------------------ДЗ 33/41 модуль 3
// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.
// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.
// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть в массиве первого аргумента.
// ВАРИАНТ 1
// Change code below this line
// function findMatches(arrwayFigst, ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     if (arrwayFigst.includes(arg)) {
//     matches.push(arg)
//     } continue;
// }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// ВАРИАНТ 2
// Change code below this line
// function findMatches(arrwayFigst, ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     for (const arr of arrwayFigst) {
//       if (arr === arg) {
//         matches.push(arg);
//       } continue;
//     }
//   }  
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));


// --------------------------------------ДЗ 34/41 модуль 3
// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).
// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.
// Метод updateBook(oldName, newName) будет обновлять название книги на новое. Возвращает строку "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя>это значения параметров oldName и newName соотвественно.


// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   }, 
//   updateBook(oldName, newName) {
      
//     return `Updating book ${oldName} to ${newName}`;
//   }, 
//   // Change code above this line
// };

// console.log(bookShelf.getBooks());
// // Вызов метода bookShelf.getBooks() возвращает строку "Возвращаем все книги"
// // Значение свойства bookShelf.addBook это метод объекта

// console.log(bookShelf.addBook("Haze"));
// // Вызов метода bookShelf.addBook("Haze") возвращает строку "Adding book Haze"

// // Значение свойства bookShelf.removeBook это метод объекта
// console.log(bookShelf.removeBook("Red sunset"));
// // Вызов метода bookShelf.removeBook("Red sunset") возвращает строку "Deleting book Red sunset"

// // Значение свойства bookShelf.updateBook это метод объекта
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));
// // Вызов метода bookShelf.updateBook("Sands of dune", "Dune") возвращает строку "Updating book Sands of dune to Dune"



// --------------------------------------ДЗ 35/41 модуль 3
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const index = this.books.indexOf(oldName);
//     this.books.splice(index, 1, newName);
//     return this.books;
//     // Change code above this line
//   },
// };


// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// // После вызова метода bookShelf.updateBook("Haze", "Dungeon chronicles"), значение свойства books это массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
// // После вызова метода bookShelf.updateBook("The last kingdom", "Dune"), значение свойства books это массив ["Dune", "Haze", "The guardian of dreams"]



// --------------------------------------ДЗ 36/41 модуль 3
// К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий. Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.
// const atTheOldToad = {
//   // Change code below this line
//  potions: [],
//   // Change code above this line
// };


// --------------------------------------ДЗ 37/41 модуль 3
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//        return this.potions;
// },
//   // Change code above this line
// };

// --------------------------------------ДЗ 38/41 модуль 3
// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//     return this.potions;
//     // Change code above this line
//   },
// };


// --------------------------------------ДЗ 39/41 модуль 3
// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const index = this.potions.indexOf(potionName);
//      return this.potions.splice(index, 1);
//     // Change code above this line
//   },
// };



// --------------------------------------ДЗ 40/41 модуль 3
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//  const index = this.potions.indexOf(oldName);
//      return this.potions.splice(index, 1, newName);

//     // Change code above this line
//   },
// };

// --------------------------------------ДЗ 41/41 модуль 3
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.
// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
  
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       } continue;
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1){
//       const potion = potions[i];
//       if (potionName === potion.name) {
//         potions.splice(i, 1);
//         return potions;
//       }
//     }return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     for (const potion of potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return potions;
//       } 
//     }return `Potion ${oldName} is not in inventory!`;
    
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.table(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Speed potion", price: 460 }))
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));


// --------------------------------------ДЗ 3/48 модуль 4

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function deliverPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });


// --------------------------------------ДЗ 4/48 модуль 4

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     for (const pizza of this.pizzas) {
//       if (pizza !== pizzaName) {
//         continue;
//       }
//       return onSuccess(pizzaName);
//     } 
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));


// --------------------------------------ДЗ 5/48 модуль 4

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
// orderedItems.forEach(function(orderedItems){
//    totalPrice += orderedItems;
// }) 
 
//   // Change code above this line
//   console.log(totalPrice)
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))






// --------------------------------------ДЗ 13/48 модуль 4
// function changeEven(numbers, value) {
//   const newArray =[];
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//       continue;
//     } 
//     newArray.push(numbers[i]);
//   }
//   return newArray;
//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));


// --------------------------------------ДЗ 22/48 модуль 4
// Change code below this line
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]
// const getUsersWithEyeColor = (users, color) => {
//   const allName = [];
//   users.filter((item) => {
//     if (color === item.eyeColor) {
//       allName.push(item);
//     }
//     return allName;
//   });
//   return allName;
// }
// console.log(getUsersWithEyeColor(users, "green"));




// -------------------------задача 23/48
// Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) =>  users.filter(user => user.age <=maxAge && user.age>=minAge)
//     ;
// // Change code above this line




// -------------------------задача 24/48
// Change code below this line
// const getUsersWithFriend = (users, friendName) => users.filter(user=>user.friends.includes(friendName));
// // Change code above this line

// console.log(getUsersWithFriend(users, "Goldie Gentry"));




// -------------------------задача 25/48
// Change code below this line
// const getFriends = (users) => {
//   const allFriends = users.flatMap(user => user.friends);
//   const uniqueFriends = allFriends.filter((friend, index, array) => array.indexOf(friend) === index);
//   return uniqueFriends;
   
// };
// // Change code above this line
// console.log(getFriends(users));


// -------------------------задача 26/48
// Change code below this line
// const getActiveUsers = (users) =>   users.filter(user => user.isActive===true);
// // Change code above this line
// console.log(getActiveUsers(users));


// -------------------------задача 28/48
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books => books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books => books.find(book=>book.author===AUTHOR);
// console.log(bookWithTitle(books));
// console.log(bookByAuthor(books));


// -------------------------задача 30/48
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray=> firstArray.every(value=>value%2===0);
// const eachElementInFirstIsOdd = firstArray=> firstArray.every(value=>value%2!==0)

// const eachElementInSecondIsEven = secondArray;
// const eachElementInSecondIsOdd = secondArray;

// const eachElementInThirdIsEven = thirdArray;
// const eachElementInThirdIsOdd = thirdArray;
// console.log(eachElementInFirstIsEven(firstArray));
// console.log(eachElementInFirstIsOdd(firstArray));





const students = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
];

const inAscendingScoreOrder = students=> students.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = students=>students.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = students=>students.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);

// console.log(inAscendingScoreOrder(students));

// console.log(inDescendingScoreOrder(students));
// console.log(inAlphabeticalOrder(students));



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// Change code below this line

// const sortedByAuthorName = books=>[...books].sort((firstBook, secondBook) =>  firstBook.author.localeCompare(secondBook.author)
// );

// const sortedByReversedAuthorName = books=>[...books].sort((firstBook, secondBook) =>  secondBook.author.localeCompare(firstBook.author)
// );

// const sortedByAscendingRating = books=> [...books].sort(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating
// );;

// const sortedByDescentingRating = books=> [...books].sort(
//   (firstBook, secondBook) =>  secondBook.rating - firstBook.rating 
// );
// console.log(sortedByAuthorName(books));
// console.log(sortedByReversedAuthorName(books));
// console.log(sortedByAscendingRating(books));
// console.log(sortedByDescentingRating(books));

// -----------------------------задач 42/48 блок 4
// Change code below this line
// const sortByAscendingBalance = users => users.sort((user1, user2) => user1.balance- user2.balance)
   

// Change code above this line
// console.log(sortByAscendingBalance(users))



// -----------------------------задач 43/48 блок 4
// Change code below this line
const sortByDescendingFriendCount = users =>[... users].sort((user1, user2)=> (user2.friends).length - (user1.friends).length);
// Change code above this line
// console.log(sortByDescendingFriendCount(users))






// -----------------------------задачa 44/48 блок 4
// Change code below this line
const sortByName = users => [...users].sort((user1, user2)=>user1.name.localeCompare(user2.name));
// Change code above this line
// console.log(sortByName(users))


// -----------------------------задачa 45/48 блок 4
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books.filter(book => book.rating > MIN_BOOK_RATING).sort((book1, book2) => book1.author.localeCompare(book2.author)).map(a => a.author);
// console.log(names);

// -----------------------------задачa 47/48 блок 4
// Change code below this line
const getSortedFriends = users => users.flatMap(user=>user.friends).filter((friend, index, array)=>array.indexOf(friend)===index).sort((friend1, friend2) => friend1.localeCompare(friend2));
// console.log("🚀 ~ file: test.js ~ line 1348 ~ users", users)
// Change code above this line
// console.log(getSortedFriends(users));


// -----------------------------задачa 10/20 блок 5
class Storage {
  constructor(items) {
    this.items = items;
  }
getItems (){
return this.items;
};
addItem (newItem){
this.items.push(newItem)
};
removeItem (itemToRemove){
  this.items.splice(this.items.indexOf(itemToRemove), 1)
};
}

// Change code above this line

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.dir(storage)
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// -----------------------------задачa 11/20 блок 5
class StringBuilder{
    constructor(value ){
        this.value =value 
    }
    getValue(){
        return this.value;
    }
    padEnd(str){
        this.value=`${this.value}${str}`
    }
    padStart(str){
        this.value=str+this.value
    }
    padBoth(str){
       this.value= str+this.value+str
    }
}


// Change code above this line
const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
builder.padStart("^");
// console.log(builder.getValue()); // "^."
builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="




// -----------------------------задачa 16/20 блок 5
class Car {
  // Change code below this line
  #price;
  static MAX_PRICE = 50000;
  
  constructor({ name, price }) {
    this.#price = price;
    this.name = name;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice > Car.MAX_PRICE) {
      console.log('error')
      return;
    }
    this.#price = newPrice;
  }
}
const audi = new Car({ name: 'dada', price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
console.log(audi)


// ----------------------------Репета
class CarAll {
    static description = 'Класс описывающий автомобиль';
  static MAX_PRICE=50000;
    static logInfo(carObj) {
        console.log('Car.logInfo -> carObj', carObj);
    }

    constructor({ brand, model, price } = {}) {
        this.brand = brand;
        this._model = model;
        this._price = price;
    }

    get price() {
        return this._price;
    }

  set price(newPrice) {
    if (newPrice <= this.MAX_PRICE) {
      this._price = newPrice;
    }
    }

    get model() {
        return this._model;
    }

    set model(newModel) {
        this._model = newModel;
    }
}
// console.log(CarAll.MAX_PRICE)
const carInstance = new CarAll({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
});

// console.log(carInstance.model);
carInstance.model = 'Q4';
// console.log(carInstance.model);

// console.log(carInstance.price);
carInstance.price = 49000;
// console.log(carInstance.price);

// console.log(carInstance);

// console.log(books);
// console.log();
// console.log();
// console.log();


// function findOdd(A) {
//   //happy coding!
//   for (let i = 0; i <= A - 1; i += 1){
//     let i = A[i];
//     console.log(i);
//   }
//   return 0;
// }
// findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);


// Я на для тренировки на свичах делал задачу с freecodecamp по переводу числа (1-3999) из римских цифр в обычные


// --------------------------------------codewar 1 ----------------------------------

// function isValidWalk(walk) {
//    //insert brilliant code here
//   const north = 1;
//     const south = -1;
//     const east = 1;
//     const west = -1;
//     let verticalWalkNorthsSouth = 0;
//     let horizontalWalkEastWest = 0;
//     for (let i = 0; i <= walk.length - 1; i += 1){
//       if (walk[i].includes('n')) {
//         walk[i] = north;
//         verticalWalkNorthsSouth += walk[i];
//       } else if (walk[i].includes('s')) {
//         walk[i] = south;
//         verticalWalkNorthsSouth += walk[i];
//       } else if (walk[i].includes('e')) {
//         walk[i] = east;
//         horizontalWalkEastWest+= walk[i];
//       } else if (walk[i].includes('w')) {
//         walk[i] = west;
//         horizontalWalkEastWest+= walk[i];
//       }
//     }
//     if (horizontalWalkEastWest + verticalWalkNorthsSouth === 0 && walk.length === 10) {
//       return console.log('should return true');
//     } else {
//       return console.log('should return false');
//     }
// }

// isValidWalk(['n', 'w', 'n', 'e', 'e', 'e', 's', 'w', 'n', 'w']);
// isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);
// isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);
// isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']);
// isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']);
// isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']);
// isValidWalk(['w', 's']);
// isValidWalk(['w', 'e']);
// isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);

// function isValidWalk(walk) {
//   //insert brilliant code here
//   if (walk.length !== 10) {
//     console.log('should return false');
 
//   } else {
//     const north = 1;
//     const south = -1;
//     const east = 1;
//     const west = -1;
//     let verticalWalkNorthsSouth = 0;
//     let horizontalWalkEastWest = 0;
//     for (let i = 0; i <= walk.length - 1; i += 1){
//       if (walk[i].includes('n')) {
//         walk[i] = north;
//         verticalWalkNorthsSouth += walk[i];
//       } else if (walk[i].includes('s')) {
//         walk[i] = south;
//         verticalWalkNorthsSouth += walk[i];
//       } else if (walk[i].includes('e')) {
//         walk[i] = east;
//         horizontalWalkEastWest+= walk[i];
//       } else if (walk[i].includes('w')) {
//         walk[i] = west;
//         horizontalWalkEastWest+= walk[i];
//       }
//     }
//     if (horizontalWalkEastWest + verticalWalkNorthsSouth === 0) {
//       return console.log('should return true');
//     } else {
//       return console.log('should return false');
//     }
//   }
// }



// --------------------------------------codewar 2 ----------------------------------
// function solution(str){
//     const newWord = str.split('').reverse().join('');
//     console.log(newWord);
//   return newWord;
// }
// solution('world');




// --------------------------------------codewar 3 ---------------------------------
// function even_or_odd(number) {
//     if (number % 2 !== 0) {
//         console.log("Odd");
//         return "Odd";
//     }console.log("Even");
//     return "Even";
// }
// even_or_odd(7);
// even_or_odd(8);
// even_or_odd(-1);
// even_or_odd(0);

// --------------------------------------codewar 4 ---------------------------------

// function DNAStrand(dna){
//   //your code here
//     let array = dna.split('');
//     console.log(array);
//     const A = "A";
//     const T = "T";
//     const G = "G";
//     const C = "C";
//     for (let i = 0; i < array.length; i += 1) {
//       if (array[i] === A) {
//         array.splice(i, 1, T);
//         continue;
//       }
//       if (array[i] === T) {
//         array.splice(i, 1, A);
//         continue;
//       }
//       if (array[i] === C) {
//           array.splice(i, 1, G);
//           continue;
//       }
//       if (array[i] === G) {
//           array.splice(i, 1, C);
//       }
//     }
//     const newDpa = array.join('');
//     console.log(newDpa);
//     return newDpa;
// }
// DNAStrand("AGAA");
// DNAStrand("ATTGC");
// DNAStrand("GTAT");
// DNAStrand("");
// DNAStrand("TACC");
// DNAStrand("GGCC");