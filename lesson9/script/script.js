// ============================================ Обевление переменных ============================================

// для длиной названии переменной 
// CamelCase, camelCase
// snake_case

console.log("Hello world"); 
// console.log("Hello world"); "..."  -> " ...'..." 
// console.log('Hello world'); '...' -> '...'..' -> error
// говорим компелятору что должен поевится -> ("слово") 
// ввывод инфо в инструмент разработчика в разделе consol 


// ==== 1. let =====
let variableName = 'First variable'; 
console.log(variableName);
// компелятор ищет значение и если нашёл выводет в consol 
let num1 = 5;
num1 = 6;
console.log(num1)
// значение меняется при присвоениие нового(можно изменить тип переменой)
let variable = 3;
variable = 'Text';
// let variable = 2; ->  error (нельзя называть одинаково)


// ===== 2. var ======
var new_variable = 'Var';

if (true) {
    var num2 = 5;  
}
console.log(num2);


// ====== 3. const =======
// const pi = 3.14;
// pi = 12; 
// console.log(pi); 
// значение не меняется , даже если изменить -> выдаст ошибку  
// error -> (Uncaught TypeError: Assignment to constant variable.)


// =============================================== простые Типы переменных  =======================================================
// ======================= number =======================
let number1 = 23;
let number2 = 23.4;

// ----- Базовые математические действия ------
// == 1. ==
// let num1 = 5;
// let num2 = 3;
// let sum = num1 + num2; // 8
// console.log(num1+num2); 
// или
// console.log(sum);
// == 2. ==
console.log(5 + 3); // 8
console.log(5 - 3); // 2
console.log(6 / 2); // 3
console.log(3 / 2); // 1.5
console.log(4 * 2); // 10
console.log(4 ** 2); // 16
console.log(11 % 2); // 1

// ------ специальные числовые значения -------
// 1. Infinity
// 2. -Infinity
// 3. NaN - not a number
console.log(3/0); // Infinity, потому-что делить на ноль нельзя!
console.log(-14/0); // -Infinity
console.log('not number или строка'/2); // NaN - not a number
console.log(NaN + 1); // NaN
console.log(NaN * 1); // NaN
console.log(NaN ** 0); // 1 (выведет 1 -> это единственный случий)


// =========================== String ============================
let first_name = 'John';
let last_name = 'Smith';
let age = 20;
// === 1 ===
// John
// Smith
console.log(first_name);
console.log(last_name);


// === 2.  конкатенация ===
// John Smith (склеевание строки)
// -- 1. --
console.log('1. '+first_name + ' ' + last_name);
// -- 2. + через переменную --
let full_name ='2. '+first_name + ' ' + last_name;
console.log(full_name);
// -- 3. --
console.log('3. '+'John'+' '+'Smith');

// Hello. I'm firstname lastname.
console.log("Hello. I'm " + first_name + " " + last_name + ".");
// Hi. My name is Firstname Lastname. I'm age.
console.log("Hello. My name is " + first_name + " " + last_name + "." + " I'm " + age + ".");


// === 3.  интерполяция (`...${..}...`) ===
// -> для чистого кода и удобнее
let first_name1 = 'Lena';
let last_name1 = 'Smith';
let age1 = 19;
console.log(`Hi. My name is ${first_name1} ${last_name1}. I'm ${age1}.`);

// === Practice ===
// Задача: есть переменные r, g, b с числовыми значениями. Вывести в консоль строку 
//“rgb(12, 34, 14)” используя конкатенацию и интерполяцию.
let r = 12;
let g = 34;
let b = 14;
// конкатенация
console.log("конкатенация: rgb(" + r + ", " + g + ", " + b + ")");
// интерполяция
console.log(`интерполяция: rgb(${r}, ${g}, ${b})`);


// ========================= boolean (true/false) =========================
// true
// false

// let result = true; //boolean
// let result1 = 'true'; //string

// =============================================== Bвод данных ===============================================
// --- из строки в число ---
// == 1. ==
let first_name2 = prompt("Enter your name", "Name"); 
// первое значение что ввёл пользователь bspl."Enter your name"
// второе значение bspl. "Name" по default, если пользователь не ввёл ничего
let last_name2 =prompt("Enter your surname");
console.log(first_name2 + " " + last_name2);
// выполнение компелятора (остальные данные появется после) ..
console.log("програма ввыполняется дальше....")

// == 2. ==
let num3 = prompt("enter the nummber");
console.log(num3);
console.log(typeof(num3)); // string
console.log(typeof(34)); // number
console.log(typeof(false)); // boolean

// =================================== Переобразование из строки в число и обратно ==================================
// --- из строки в число ---
let variable1 = "21";
console.log(typeof(variable1)); // string
// преобразование ..
let number3 = Number(variable1); // 21
console.log(typeof(number3)); // number
// или (короче)
let number4 = Number("123"); // 123 


// --- из числa в строки  ---
let variable3 = 12;
let str1 = String(variable3);
console.log(typeof(variable3));

// === Practice ===
console.log(2 + 2); // 4 -> number
console.log('2' + 2); // 22 -> string
console.log(2 + "2"); // 22 -> string
// не с "+" таких проблем нету
console.log('2' - 1); // 1 -> number
console.log('2' * 2); // 4 -> number
console.log('6' / 2); // 3 -> number
// с ошибкой NaN
console.log('6a' / 2); // NaN
console.log(Number("6a")); // NaN


// Задача 1: Написать программу, которая считывает через prompt число и выводит в консоль ее 
// квадрат.
let num = Number(prompt("enter the number"));
console.log("Задача 1: " + num**2);
// если ползователь введёт не число тогда будет NaN

// Задача 2: Написать программу, которая считывает два числа (объявляем две переменные и 
// записываем туда результат работы двух вызовов prompt) и выводит их сумму. Не забудьте 
// преобразовать полученные значения в число.
let numm1 = Number(prompt("enter the number 1"));
let numm2 = Number(prompt("enter the number 2"));
console.log("Задача 2: " + (numm1 + numm2));
// или 1. 
// let numm1 = prompt("enter the number 1");
// let numm2 = prompt("enter the number 2");
// console.log("Number(numm1)+ Number(numm2));
// или 2.
// let result = Number(numm1) + Number(numm2);
// console.log(result);


// =============================================== Условное ветвление ==================================================
// можно проверит допустим через e-mail зарегестрирован пользователь уже или нет
// == Обеснение ==
// if (условие1) {
//     действие1   
// }
// else if(условие2){
//     действие2   
// }
// else{
//     действиеN   
//  }

// if(true){
//     console.log("Hello")  // если истена то мы зайдём в код -> действие выполнится
// }
// if(false){
//    console.log("Hello")  // eсли ложное не войдём и действие не выполнится
// }

// == 1. ==
let num11 = 4;
if(num11>0){
     console.log("Больше 0")  
}
else if(numm1==0){
    console.log("Равно 0")  
}
else{
    console.log("Меньше 0")  
}

// == 2. ==
let str2 = "24";
let num12 = 24;
if(str2 == num1){
    console.log("True")  
}
else{
   console.log("False")  
}

// ==== 3. Сравнение по алфовиту в независимости от большой или меньшей буквы ====
if("X">"A"){
    console.log("yes")  
}                       // yes -> потому-что X поже идёт по счёту чем A (A=1)
else{
   console.log("no")  
}

// ==== 4. множественное Сравнение по алфовиту в независимости от большой или меньшей буквы ====
if("AB">"AF"){
    console.log("yes")  
}                       // no -> потому-что A = A -> B < F = false 
                        // (сначало сравнение первых символов а потом последуюшии)
else{
   console.log("no")  
}
// 'dog'  >  'cat' -> true
// 'human'  >  'dog' -> true


// =============================================== Операторы сравнения ==================================================
//   ==  равно -> сравневает только значение (не сравневает тип) 
//   === строгое равно -> сравневает значение, тип (num,string, bollean)
//   >  больше
//   <  меньше
//   >= больше или равно
//   <= меньше или равно
//   != не равно

let num22 = prompt("enter the number"); // .. = prompt... -> 0
if(num22 == 0){
    console.log("=0")  // -> true 
}

if(num22 === 0){
    console.log("=0")  // -> false (не отобразится на экране) 
}

// == Practice ==
// Составьте программуб которая принимает с клавиатуры целое число и, если оно
// положительное, увеличивает его в двое.
// -> Программа должна выводить на экран новое значение
let num13 = Number(prompt("Enter the number..")); // преобразить в number + ввод пользователя через prompt
if(num13>0){
    num13 = num13 * 2; // num13 = 4(ввод пользователя) * 2
}
console.log(num13);






