// =========================================================== Массив cо своим index и внутренем index [1 = index блока][1 = index в блоке] ======================================================
// []{}

// ------ 1. мернный массив ------
// let users = [
//     ["John", "Smith", 23],
//     ["Lili", "Hardy", 45],
//     ["Bob", "Brown", 16]
// ];
// console.log(users[1][1]); // Hardy -> users[1 = index блока][1 = index в блоке]
// console.log(users[2][2]); // Вывод возраст третьего пользователя -> [2]-> ["Bob", "Brown", 16] /// [2] ->  , 16]

// ----- 3. мернный массив ------ (max что может использоватсяб для хорошого качества роботы)
let products = [ // оснавной массив содержит два элемента
    ["Iphone X", 900, ["blue", 256, 48]], // 1. элемент с index 0
    ["Iphone XR", 800, ["red", 64, 48]] // 2. элемент с index 1
];
console.log(products[1][2][0]); // Consol:  red

// ====== через for =======
let users = [
     ["John", "Smith", 23],
     ["Lili", "Hardy", 45],
     ["Bob", "Brown", 16]
];
for (let i = 0; i < users.length; i++) { // users.length -> lлина всего масивва users // 1. 0 index .... 1 index
    for (let j = 0; j < users[i].length; j++) { // 2. заходит внутерь и проходит все индексы в индексе 0 -> выходит берёт  1.index и повторяет 
            console.log(users[i][j]);
    }
}
// 1. i=0, j=0 -> Consol: John
// 2. i=0, j=1 -> Consol: Smith
// 3. i=0, j=2 -> Consol: 23
// -> 
// 4. i=1, j=0 -> Consol: Lili
// 5. i=1, j=1 -> Consol: Hardy
// 6. i=1, j=2 -> Consol: 45
// ->
// 7. i=2, j=0 -> Consol: Bob
// 8. i=2, j=1 -> Consol: Brown
// 9. i=2, j=2 -> Consol: 16

// ================================================================================ break (for) ==================================================================================
for (let i = 0; i < 5; i++) { // проверка от 0 до 2 // i<n бесканечность (сколько пользователь вернёт)
    // console.log(i); -> Consol: 0, 1, 2  действие включает 2
    if (i == 2){ // проверка до 2
        break; // break досрочно прекрашает действие
    }  
    console.log(i); // Consol: 0, 1   действие не включает 2 -> так как после бреак
}

// ================================================================================ continue (for) ==================================================================================
for (let i = 0; i < 5; i++) { 
    if (i == 2){ 
        continue; // пропускает  число указоное 2 ->  "if (i == 2)"(иногда используется в online магазинах при скидках) 01-04.02.23 -> скидка работает
    }  
    console.log(i); // Consol: 0, 1, 3, 4  действие не включает 2 -> так как continue пропускает 2
}

// ================================================================================ &&(and), ||(or) ==================================================================================
// <, >, <=, >=, ==, ===, !=
// &&(and), ||(or)

// ----------------- &&(and) -----------------
// одно неподходит -> false
let num  = 15; 
// 1 Условие.>0    
// 2 Условие.%3==0 
// 3 Условие.%5==0
if (num>0 && num%3==0 && num%5==0) {
    console.log("true");
}
// 15 true (num>0 true && num%3==0 true && num%5==0 true) -> true
// 5 false ( num>0 true %3==0 false , %5==0 false) -> false
// -15 false  (num>0 false)

// -------------- ||(or) -----------------
let num1  = 15;
// одно подходит -> true
// или >0 или%3==0 или %5==0
if (num1>0 || num1%3==0 || num1%5==0) {
    console.log("true");
}
// 15 (num>0->true || num%3==0-> true || num%5==0-> true) -> true
// 4 (num>0->true || num%3==0->false || num%5==0->false) -> true 
// -4 (num>0->false || num%3==0-> false || num%5==0-> false) -> false

// -------------- Practice -----------------
// Составьте программу, которая выводит на экран все трехзначные 
// положительные числа, делящиеся без остатка и на 3 и на 5 (and)
// (начиная с наименьшего).

for(let i=100; i<1000; i++){
    if(i%3==0 && i%5==0){
        console.log(i);
    }
}

// 2. Вариант
//  for(let i=100; i<1000; i+=5){
//    if(i%3==0){
//        console.log(i);
//    }
// }

// 3. Вариант
//  for(let i=105; i<1000; i+=15){
//        console.log(i);
// }

// ============================================================================== Object ==================================================================================

// {}
// phone
// model: Samsung A51
// color: white
// price: 1000$
// RAM: 8GB
// camera: 49mpx

let object = {}; // empty object
let user = { // cвойства - ключ, значение
    firstname: "Tom", 
    lastname: "Smith", 
    age: 18,
    "is admin": true
    // "first go": 15,
    // "!": 5,
    // "20": 20
};

console.log(user);
console.log(user.firstname);
console.log("2. "+user["firstname"]);
// Console: Tom

// ------  проверка ключа ------ 
console.log("age" in user); // yeas-> true / no-> false

// ------- изменение --------
user.age = 19;
console.log(user);
// Console: firstname: 'Tom', lastname: 'Smith', age: 19, is admin: true} 

// ------ добавление -------

// == 1. == 
user.gender = "Male";
console.log(user); 
// Consol: {firstname: 'Tom', lastname: 'Smith', age: 19, gender: 'Male'}

// == 2. ==
console.log("5. "+user['is admin']);
// Consol: true

// == 3. ==
user['is admin'] = false;
user['likes cars'] = true;
// Consol: {firstname: 'Tom', age: 19, gender: 'Male', is admin: false, likes cars: true}

// ------- удаление -------
delete user.lastname;
console.log(user);


// ============================================================================== основнные и вложенный Object ==================================================================================
// const product = {
//        model: "iphone 13 pro max",
//        price: "1200$"
// }
// product.price = "1250$";

// ========= 1 =========
let country = {
    name: "Germany",
    language: "German",
    capital:{
        name: "Berlin",
        population: 3000000,
        date: {
            day: 12,
            month: "June",
            year:  1237
        }
    }
};
console.log(country);
console.log(country.language); // Consol: German
console.log(country.capital.name); // Consol: Berlin
// console.log(country['capital']['name']); ->  Consol: Berlin
console.log(country['capital']['date'] ['day']); // Consol: 12
console.log("language" in country); // Consol: true
console.log("year" in country); // Consol: false (потому-что нет в основном обекте-> country , вложенный обект -> year )
console.log("year" in country.capital.date); // Consol: true

// ========= 2 =========
let users1 = {
    firstname: ["John", "Bob", "Mary"],
    lastname: ["Smith", "Brown", "Marley"]
};
console.log(users1.firstname); // Consol: (3) ['John', 'Bob', 'Mary']
console.log(users1.lastname[1]); // Consol: Brown


// ------------ practice 1 --------------
// 1. Напишите код, выполнив задание из каждого пункта отдельной строкой:
// Создайте пустой объект user1.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
let user1 = {
    name: "John",
    surname: "Smith"
};
// или 
// let user1 = {};
// user.name = "John";
// user.surname = "Smith"

// Измените значение свойства name на Peter.
user1.name = "Peter";
// Удалите свойство name из объекта.
delete user1.name;
// Consol: {surname: 'Smith'}
console.log(user1); 

// ------------ practice 2 --------------
// У нас есть следующий объект:
let user2 = {
    name: "John",
    age: 30
    };
// Проверьте, что в объекте есть ключ age.
console.log("age" in user2);

// ------------ practice 3 --------------
// В программе объявлена переменная list, представляющая массив положительных 
// и отрицательных численных значений. 
// Используя цикл, выведите в консоль сумму положительных чисел.

let list = [-23, 3, 2, 0, 1, -4, 2, -5];
let sum = 0;

for(let i=0; i<list.length; i++){
    if(list[i]>=0){
        sum += list[i];
    }
}
console.log(sum); // Consol: 8 (3+2+0+1+2=8 положительных чисел)




