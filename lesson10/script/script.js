// =================================================================== Array ===============================================================
// []{}
let array = []; // empty array
let fruits = ["Apple" , "Banana", "Orange"]; // 0 -> Apple, 1 -> Banana, 2 -> Orange ... (наченается с 0)
// == 1 ==
console.log(fruits); 
// Вывод в Consol:  Array(3)-> 0:"Apple" / 1:"Banana" / 2:"Orange" / length:3

// == 2 ==
console.log(fruits[1]); 
// Вывод в Consol: Banana

// == 3 ==
console.log(fruits.length); 
// Вывод длины массива (3)

// == 4 ==
console.log(fruits[fruits.length-1]); 
// -1 последней элемент массива -2 предпоследний ("Orange")

// ============================================== add elements -> добавление элемента (unshift, push) =======================================

// -------- добавление эл. в конец массива (через push) --------
fruits.push("Avocado", "Mango"); 
console.log(fruits); // Вывод в Consol:  Array(4)-> 0:"Apple" / 1:"Banana"/ 2:"Orange" / 3:"Avocado" / 4:"Mango"

// -------- добавление эл. в начало массива (через unshift) --------
fruits.unshift("Apricot"); // Вывод в Consol:  Array(6)-> 0:"Apricot" / 1:"Apple" / 2:"Banana"/ 3:"Orange" / 4:"Avocado" / 5:"Mango"
console.log(fruits);

//===================================================== удаление элемента(pop, shift) =======================================================

// -------- удаление последнего эл. массива --------
fruits.pop();
console.log(fruits);  // Вывод в Consol:  (5) ['Apricot', 'Apple', 'Banana', 'Orange', 'Avocado']

// -------- удаление первого эл. массива --------
fruits.shift();
console.log(fruits); // Вывод в Consol:  (4) ['Apple', 'Banana', 'Orange', 'Avocado']

//===================================================== удаление и замена элемента(splice, index)============================================

// -------- удаление эл. с его индексом  и заменна элемента --------
// fruits.splice(start, deletecount, elem1, elem2);
// (1(index elm.), 1(количество), "Mango"(на что изменить))
fruits.splice(1, 1, "Mango"); // замена idex 1: Banana -> Mango
console.log(fruits); // Вывод в Consol: (4) ['Apple', 'Mango', 'Orange', 'Avocado']

// -------- добавить эл. по середине и изменить порядок index --------
fruits.splice(2, 0, "Kiwi");
console.log(fruits); // Вывод в Consol: (4) ['Apple', 'Orange', 'Kiwi', 'Avocado']

// ------- удалить три(3) эл. начиная с индекса 1 --------
fruits.splice(1, 3);
console.log(fruits); // Вывод в Consol: (2) ['Apple', 'Avocado']

// -------- добавить три(3) эл. начиная с индекса 1 --------
fruits.splice(1, 0, "Kiwi", "Cherry", "Pear");
console.log(fruits); // Вывод в Consol: (5) ['Apple', 'Kiwi', 'Cherry', 'Pear', 'Avocado']

// -------- заменить эл. через index -------- 
fruits[1] = 'Peach';
console.log(fruits);// Вывод в Consol: (4) ['Apple', 'Peach', 'Pear', 'Avocado']

//===================================================== узнаём индекс элемента(indexOf) ===================================================

// --------  сушествуюший элемент (Вывод позитивного числа (1,2.. )) -------- 
// вывести индекс эл. Kiwi
console.log(fruits.indexOf('Kiwi')); // Вывод в Consol: 1 (index)

// --------  удалить Kiwi через index -------- 
fruits.splice(fruits.indexOf('Kiwi'), 1);
console.log(fruits); // Вывод в Consol: (4) ['Apple', 'Cherry', 'Pear', 'Avocado']

// --------  не сушествуюший элемент (Вывод негативного числа (-1)) -------- 
console.log(fruits.indexOf('banana')); // Вывод в Consol: -1 (нет элемента)

//================================================================= Practice =============================================================
// Задание:
// -> 
// Массив по ходу выполнения операций:
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// 1. Создайте массив styles с элементами «Джаз» и «Блюз».
let styles = ["Джаз", "Блюз"];

// 2. Добавьте «Рок-н-ролл» в конец.
styles.push("Рок-н-ролл");

// 3. Замените значение в середине на «Классика».
styles.splice(1, 1, "Классика");
// Вариант 1:
// style[1] = "Классика";
// Вариант 2:
// let middleIndex = Math.floor(styles.length / 2);
// styles[middleIndex] = "Классика";

// 4. Удалите первый элемент массива.
styles.shift();

// 5. Вставьте Рэп и Регги в начало массива.
styles.unshift("Рэп", "Регги");

// Вывод результата в консоль.
console.log(styles);

//===================================================== inkrement ++ / dikrement -- ========================================================
let i = 5;
i = i + 1;
// i+=1;
i = i / 2;
// i/=2;
console.log(i);

// ---- Inkrement ----
// i++;
// ++i;

// ---- Dikremment ----
// i--:
// --i;


// ---- Постфиксная форма ----
// inkrement
let ii = 5;
console.log(i++); // Consol: 5  (добавление после)  
console.log(i); // Consol: 6
// dikrement
let iii = 5;
console.log(i--); // Consol: 5  (добавление после)  
console.log(i); // Consol: 4


// ---- Префисная форма ----
// inkrement
let i1 = 5;
console.log(++i); // Consol: 6 (сразу выполняется)
// dikrement
let i2 = 5;
console.log(--i); // Consol: 5 (сразу выполняется)


// for(Начало; Условие; Шаг){
        // итерация (повторяется 10раз = 10 итераций)
        //тело цикла;
//  }

// ------- Вывести числа от 0 до 5 (вкл.) --------
for (let num01 = 0; num01 <= 5; num01++) {
    // 7 итераций -> от 0 до 5 / 7 итераций последняя num<=6 -> false -> выход)
    console.log(num01);
}

//=====================================================  Practice - цикл for  ==============================================================
// ----------- Программа, которая считывает три числа через prompt и добавляет их в массив. -----------

// === 1. ===
// let arr = [];
// let numbers1 = Number(prompt("Введите число 1:"));
// let numbers2 = Number(prompt("Введите число 2:"));
// let numbers3 = Number(prompt("Введите число 3:"));
// arr.push(numbers1,numbers2,numbers3);
// console.log(arr);

// === 2. === 
// let numbers1 = Number(prompt("Введите число 1:"));
// let numbers2 = Number(prompt("Введите число 2:"));
// let numbers3 = Number(prompt("Введите число 3:"));
// let numbers = [numbers1,numbers2,numbers3];
// console.log(numbers);

// === 3. ===
let numbers = [];
for (let i = 0; i < 3; i++) {
    numbers.push(Number(prompt("Введите число:")));  // push (3) [4, 6, 2]
                                                     // unshift (3) [8, 6, 5] -> порядок добовление изменён 5,6,8 -> 8,6,5
}
console.log(numbers);

// ============================================================ Вывести все элементы массива ================================================
let numbers4 = [1, -34, 0, 23.4, 3, -2, 5, 0, 12, 0];
// console.log(numbers4)[0];
// console.log(numbers4)[1];
//..
for (let i = 0; i < numbers4.length; i++) {
    console.log("1. "+numbers4[i]);
}

// ----------- Пример: Написать цикл, который выводит только положительные числа из массивa -------------
let numbers5 = [1, 0, -23.4, 5, -6, 5, -10];
for (let i = 0; i < numbers5.length-1; i++) {
    if (numbers5[i]>=0) {
        console.log("2. "+numbers5[i]);
    } 
} // Consol: 1, 0, 5, 5

// ============================================================ Найти сумму всех элементов массива ==========================================
let numbers6 = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4];
let sum = 0;
// sum = sum + numbers5[1];
// sum = sum + numbers5[2];
for (let i = 0; i < numbers6.length; i++) {
    // sum = sum + numbers6[i];
    sum += numbers6[i];
}
console.log("3. "+sum); // Consol: 22


// --------------- Practice -----------------
// Задание: Составьте программу, которая выводит на экран 
// -> все двузначные положительные числа, делящиеся без остатка на 5 (начиная с наименьшего).

let startNumber = 10; // Начинаем с наименьшего двузначного числа, то есть 10
let endNumber = 99;// Завершаем наибольшим двузначным числом, то есть 99

for (let i = startNumber; i <= endNumber; i++) { //Проходим по всем числам от startNumber до endNumber
  // Проверяем, делится ли текущее число на 5 без остатка
  if (i % 5 === 0) {
    console.log("4. "+i);
  }
}
// или

// Вариант 1:
// for(let i=10; i<100; i++){
//     if(i%5==0){
//         console.log(i);
//     }
// }

// Вариант 2:
// for(let i=10; i<100; i+=5){
//     console.log(i);
// }

//  ====================================================== Синтаксиса цикла от большего к меньшему ==========================================
// вывод чисел от 10 - 0 в обратном порядке
for (let i = 10; i >= 0; i--) {  // меняется "<" на ">" !!!!! чтобы незапустить вечный цыкл !!!!
        console.log("5. "+i);
}

// вывод чисел от 10 - 0 в обратном порядке через 2
for (let i = 10; i >= 0; i-=2) {
    console.log("6. "+i);
}











