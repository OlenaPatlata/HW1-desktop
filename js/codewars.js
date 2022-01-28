// -----------------------------------------------------------
const nbYear = (p0, percent, aug, p) => {
    let n = 0
    for (let i = 0; p0 <= p; i += 1) {
        p0 += p0 * percent / 100 + aug
        n += 1
    }
    return n
}
// console.log(nbYear(1500, 5, 100, 5000))
// console.log(nbYear(1500000, 2.5, 10000, 2000000))

// -----------------------------------------------------------
// const sumTwoSmallestNumbers = numbers => {
//     const firstNumber = Math.min(...numbers);
//     const indexfirstNumber = numbers.findIndex((numbers, index, array) => array[index] === firstNumber)
//     const newArray = [...numbers]
// newArray.splice(indexfirstNumber, 1)
//     const secondNumber = Math.min(...newArray);
//     const indexsecondNumber = numbers.findIndex((numbers, index, array) => array[index] === secondNumber)
//     const newArray2 = [...numbers]
// newArray2.splice(indexsecondNumber, 1)
//     return firstNumber + secondNumber
// }


// function sumTwoSmallestNumbers(numbers){  
//   numbers = numbers.sort(function(a, b){return a - b; });
//   return numbers[0] + numbers[1];
// };

const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);
// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

// -----------------------------------------------------------
function printerError(s) {
    const countError =[...s].reduce((acc, letter) => letter > 'm'? acc+1 : acc, 0)
    const countAllletter = s.split('').length
    return `${countError}/${countAllletter}` 
    // your code
}
// console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))


// -----------------------------------------------------------
function abbrevName(name){
   
  
    return `${name.toUpperCase().split(' ')[0].split('')[0]}.${name.toUpperCase().split(' ')[1].split('')[0]}`
    // code away

}
// console.log(abbrevName("Sam Harris"));


// -----------------------------------------------------------
const maps = x => x.map(number => number * 2);

// console.log(maps([4, 1, 1, 1, 4]));

// -----------------------------------------------------------
const litres = time => Math.floor(time / 2);

console.log(litres(12.3));