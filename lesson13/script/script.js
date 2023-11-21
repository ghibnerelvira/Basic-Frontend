// number
// string
// boolean
// object - array, object, list, funktion

// ================================================================================= Function Declaration ===================================================================================
// function functionName(p1, p2){
//     // ...
//     // return result;
// }

// === 1 ====
function sayHi1() {
    console.log("Hello 1");
};
sayHi1(); // -> Consol: Hello 1


// === 2 ====
console.log(getMax(3, 2)); // 1.Вариант: log может вызыватся и до и после  function get...
function getMax(a, b) {
    if (a>b) {
        return a;
    }
    return b;
};
console.log(getMax(2, 6)); // 2.Вариант: log может вызыватся и до и после  function get... 
// (но для коректности лутчше в конце, так как до компиляции -> функция сохраняется в памети)
// -> Consol: 6 

// =================================================================================== Function Expression ======================================================================
// === 1. ====
let sayHi2 = function(){
    console.log("Hello 2");
};
sayHi2();

// === 2. ====
let getMax2 = function(a, b){
    if(a>b){
        return a;
    }
    return b;
};
console.log(getMax2(10,6)); // нужно вызывать после функции -> так-как будет error
// -> Consol: 10




// === 2. ====
// короткий ваpиант
function showSum(a, b){
    console.log(a+b);
};

let function1 = showSum;
function1(15,200); // -> Consol: 200



// =================================================================================== Arrow Funktion ======================================================================

// -------- стрелочнный тип функции -----------
// ==== 1. ====
let getSum2 = (a, b) => a + b
console.log(getSum2(4,7)); // -> Consol: 11

// ======== Аналог ======
function getSum1(a, b){
    return a+b;
};
console.log(getSum1(4,7)); // -> Consol: 11


// ==== 2. ====
let pow = n => n*2;
console.log(pow(4)); // -> Consol: 8

// ==== 3. ====
let sayHi = () => "Hello 3";
console.log(sayHi()); // -> Consol: Hello 3


// ---------- двойная функция --------------
function showSum(a, b){
    console.log(getMax3(a, b));
};
showSum(20, 100);

// ======== Аналог ======
function getMax3(a, b) {
    if (a>b) {
        return a;
    }
    return b;
};
console.log(getMax3(15,200));

// ==================== Practice 1 ======================
// проверка 
// console.log([]==[]); ->  false
// лутчше делать 
// (array.length == 0) -> true

// Напишите функцию, который принимает массив чисел и возвращает сумму всех элементов.
function getArraySum(array=[]){ // -> можно сразу внутри указать: function getArraySum(arr1=[ 1, 2, 4, 4])
    if(array.length == 0){
        return 0;
    }
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum += array[i]; // sum = sum + array[i];
    }
    return sum;
}
let numbers = [3, 6, 2, -1, 0, 4]; // если вверху неуказанно в getArraySum(arr1=[ 1, 2, 4, 4])

console.log(getArraySum()); // Consol: 0 (default)
console.log(getArraySum(numbers)); // Consol: [3, 6, 2, -1, 0, 4]  (числа из пременной numbers) 
console.log(getArraySum([20, 4, 0, 10])); // Consol: [20, 4, 0, 10] (сразу указанный массив)


//  ====================== Practice 2 ======================
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
// -> содержащий только четные числа.

// === 1. Bариант ===
function getEvenNumbers(array=[]) {
    if (array.length==0) {
        return 0;
    }
    let OddArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2==0) { // Проверяем, является ли число четным
            OddArray.push(array[i]);
        }
    }
    return OddArray;
}
console.log(getEvenNumbers([3, 0, 121, 46, 10, -12]));


// === 2. Bариант ===
function getEvenNumbers1(sourceArray) {
    let newArray = sourceArray.filter(function(numbers) { // Используем метод filter для фильтрации четных чисел
        return numbers % 2 === 0; // Проверяем, является ли число четным
    });

    return newArray;
}

let sourceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = getEvenNumbers1(sourceArray);
console.log(result);


//  ====================== Practice 3 ======================
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
// -> содержащий только числа больше определенного порога(N). N>10 

function getNewArray1(array=[], N=0) {
    if (array.length==0) {
        return 0;
    }
    let NewArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i]>N) { 
            NewArray.push(array[i]);
        }
    }
    return NewArray;
}
// 1. Bариант
console.log(getNewArray1([3, 0, 121, 46, 10, -12], 10)); // Consol: [121, 46]
// 2. Bариант
let array = [10, 23, -1, 0, 13.2, 48];
let num = 12; // c 12..
console.log((getNewArray1(array,num))); // Consol: [23, 13.2, 48]

//  ====================== Practice 4 ======================
// Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает 
// объект со свойствами min, max, sum, avg с соответствующими значениями по массиву.

function getObj(array=[]) {
    if (array.length==0) {
        return 0;
    }
    let min = array[0];
    let max = array[0];
    let sum = array[0]; // обшяя сумма
    let avg; // среднее значение
    // проверка от начало до конца и поиск мньшего, большогo... числа
    for (let i = 1; i < array.length; i++) { 
        if (array[i]<min) { 
            min = array[i];
        }
        if (array[i]>max) { 
            max = array[i];
        }
        sum += array[i];
    }
    avg = sum / array.length;
    return {
        min,
        max,
        sum,
        avg
    }
}
let array1 = [10, 23, -1, 0, 13.2, 48];
console.log(getObj(array1));


//  ====================== Practice 5 ======================
// 1. У нас есть следующий объект:
//     let user = {
//     name: "John",
//     age: 30
//     };
// -> Проверьте, что в объекте есть ключ age.
// 2. Создать объект product с названием(product_name) и ценой(product_price) продукта и выведите данные в консоль.
// 3. Добавить в объект product свойства product_quantity и product_quality.
// 4.  Удалить свойство product_quality из объекта product.

let user = {
    name: "John",
    age: 30
};

// 1. Проверьте, что в объекте есть ключ age.
console.log("Age in User: "+"age" in user);

// 2. Создать объект product с названием(product_name) и ценой(product_price) продукта и выведите данные в консоль.
let product = {
    product_name: "Macbook",
    product_price: 3000
};
console.log(product.product_name);
console.log(product.product_price);

// 3. Добавить в объект product свойства product_quantity и product_quality.
product.prduct_quantity = 20;
product.product_quality = 7;

// 4.  Удалить свойство product_quality из объекта product.
delete product.product_quality;

// проверка результата
console.log(user);
console.log(product);



//  ====================== Practice 6 ======================
// Создайте объект с различными свойствами (строки, числа, булевы значения).
// Напишите функцию, которая выводит все ключи объекта.
// Напишите функцию, которая выводит все значения объекта.
// Напишите функцию, которая определяет количество свойств в объекте.

// 1. Cоздайте объект с различными свойствами (строки, числа, булевы значения).
let new_object = {
    name: 'iphone',
    price: 300,
    quality: 9,
    inStock: true
};
// 2. Напишите функцию, которая выводит все ключи объекта.
function showKeys(object={}){
    for(let key in object){
        console.log(key);
    }
}
showKeys(new_object);

// 3. Напишите функцию, которая выводит все значения объекта.
function showObj(object={}){
    for(let key in object){
        console.log(object[key]);
    }
}

showObj(new_object);

// 4. Напишите функцию, которая определяет количество свойств в объекте.
function object_Length(object={}){
    let count = 0;
    for (let key in object) {
        count++; // count = count + 1;
    }
    console.log(count);
}
object_Length(new_object); // Consol: 4

// 5. Напишите функцию, которая определяет количество числовых значений в объекте.
function number_count(object={}){
    let count = 0;
    for (let key in object) {
        if (typeof (object[key]) === "number") {
            count++;
        } 
    }
    console.log(count);
}
number_count(new_object); // Consol: 2


//  ====================== Practice 7 ======================
// Дан массив:
let numbers1 = [1, '', 2, 3, '', 5];
// Удалите из массива все пустые строки.(empty lines)
function getArray1(numbers){
    for (let i = 0; i < numbers1.length; i++) {
        if (numbers[i]=== "") {
            numbers1.splice(i, 1);
            i--; // проверка предедушего элемента 
        }
    } 
    return numbers1;
}

console.log(getArray1(numbers1));







