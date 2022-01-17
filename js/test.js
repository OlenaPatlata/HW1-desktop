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

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// и управление передаётся на следующую итерацию.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
}


const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;
for (const client of clients) {
  // На каждой итерации будем проверять совпадает ли элемент массива с
  // именем клиента. Если совпадает то мы записываем в message сообщение
  // об успехе и делаем break чтобы не искать дальше
  if (client === clientNameToFind) {
    message = "Клиент с таким именем есть в базе данных!";
    break;
  }
  // Если они не совпадают то запишем в message сообщение об отсутствии имени
  message = "Клиента с таким именем нет в базе данных!";
}
console.log(message); // "Клиент с таким именем есть в базе данных!"

const words = ["JavaScript", "это", "интересно"];
console.log(words.join("")); // "JavaScriptэтоинтересно"
console.log(words.join(" ")); // "JavaScript это интересно"
console.log(words.join("-")); // "JavaScript-это-интересно"


const wordss = [1, 2, 3];
console.log(wordss.join("")); // "JavaScriptэтоинтересно"
console.log(wordss.join(" ")); // "JavaScript это интересно"
console.log(wordss.join("-")); // "JavaScript-это-интересно"

// Выносим варианты в массив
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherryz";
// Проверяем наличие элемента
const hasFruit = redFruits.includes(fruit);
if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
} else { console.log("Не красный фрукт");}


function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  let message = "Access denied, wrong password!";

  if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  continue;
  }
  return message;
  // Change code above this line
}

checkPassword("jqueryismyjam");
console.log(message);
