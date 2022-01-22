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
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
function getAllPropValues(propName) {
  // Change code below this line
  const allProperty = [];
  for (const product of products) {
    console.log(product);
    console.log(product[propName]);
    console.log(propName);
      console.log([propName]);
    // if([propName] !== propName) {
    //   continue;
      
    // } else
      if ([propName] === propName) {
      allProperty.push(product[propName]);
    }
  
  }
    return allProperty;
  // Change code above this line
}
console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));


// console.log();
// console.log();
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