// ==== 1. =====
// Написать функцию, получающую на вход два числа. 
// -> Если оба числа чётные - функция возвращает их произведение. 
// -> Если оба числа нечётные - функция возвращает их сумму. 
// -> Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

function processNumbers(number1, number2) {
    // Если оба числа четные - возвращаем их произведение
    if (number1 % 2 === 0 && number2 % 2 === 0) { 
      return number1 * number2;
    } 
    // Если оба числа нечетные - возвращаем их сумму
    else if (number1 % 2 !== 0 && number2 % 2 !== 0) { 
      return number1 + number2;
    }
    // Если одно из чисел четное, а второе нечетное - возвращаем нечетное число
    else { 
      return number1 % 2 !== 0 ? number1 : number2;
    }
  }
let result1 = processNumbers(2, 4); // оба числа четные -> возвращает их произведение (8)
let result2 = processNumbers(3, 5); // оба числа нечетные -> возвращает их сумму (8)
let result3 = processNumbers(2, 5); // одно четное, другое нечетное -> возвращает нечетное (5)
  
console.log("Результат 1:", result1);
console.log("Результат 2:", result2);
console.log("Результат 3:", result3);



// ==== 2. =====
// Написать  функцию, которая параметром будет принимать секунды, 
// -> а возвращать количество суток, соответствующих этим секундам.

function secondsToDays(seconds) {
    let secondsInADay = 24 * 60 * 60; // 1 сутки = 24 часа * 60 минут * 60 секунд
    // Вычисление количество суток
    let days = Number(seconds / secondsInADay, 10); //  десятичную систему счисления 1-10 = десятичное число.
    return days;
}
let seconds = 86400; // Например, 86400 секунд равны одному дню
let days = secondsToDays(seconds);
console.log(days); // Consol: 1



// ==== 3. =====
// Написать функцию isPrime, которая принимает число и возвращает
// -> true, если оно простое (имеет только два делителя: 1 и само число), 
// -> и false в противном случае.
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    // Проверка на простоту числа
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            // Если число делится нацело на любое число от 2 до корня из числа, то оно не простое
            return false;
        }
    }
    // Если цикл не нашел делителей, то число простое
    return true;
}
// Проверка 1:
// Consol: 17 - простое число
let num = 17;
let result = isPrime(num);

if (result) {
    console.log(`${num} - простое число`);
} else {
    console.log(`${num} - не простое число`);
}
// Проверка 2:
// Consol: 123 - не простое число
let num1 = 123;
let result_2 = isPrime(num1);

if (result_2) {
    console.log(`${num1} - простое число`);
} else {
    console.log(`${num1} - не простое число`);
}



// ==== 4. =====
// Написать функцию, которая в качестве аргументов получает два числа 
// -> и выводит в консоль наименьшее.
function findMinNumber(a, b) {
    let minNumber;
    if (a < b) {
        minNumber = a;
    } else {
        minNumber = b;
    }
    console.log(`Наименьшее число: ${minNumber}`);
}
// Проверка:
let number1 = 10;
let number2 = 7;
findMinNumber(number1, number2);


// ==== 5. =====
// Написать  функцию, которая в качестве аргументов получает два числа 
// -> и возвращает массив чисел со значениями от меньшего числа к большему. <
// Пример: getSortedArray(5, 2) => [2, 3, 4, 5]
function getSortedArray(num1, num2) {
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    let resultArray = [];

    for (let i = start; i <= end; i++) {
        resultArray.push(i);
    }

    return resultArray;
}
let sortedArray = getSortedArray(5, 2); // от 2 до 5
console.log(sortedArray);  // Consol: [2, 3, 4, 5]

