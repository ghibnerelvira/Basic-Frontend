// function hello(username) {
//   console.log(`Hello ${username}`)

//   return `Hello ${username}`
//   // return undefined добавляет javascript чтобы интерпретатор понял что здесь функция заканчивается
// }

// const result = hello("John")
// console.log(result);
// // undefined

// ================= var =================

// function test() {
//   var hello = 'hello world'
//   console.log(hello)
// }

// hoisting = поднятие всплытие
// срабатывает при использовании var вне функции и для function declaration

// console.log(hello) // undefined || if let or const get error

// if(true) {
//   var hello = 'hello world'
// }

// // test() // 'hello world'
// console.log(hello); // error || if var print 'hello world'

// // console.log(second_hello); // error is not defined

// let num = 4; // ставим точку с запятой чтобы javascript понял что здесь сротка заканчивается

// (function() {
//   if (true) {
//     var second_hello = 'hello world'
//   }
//   console.log("second_hello")
// })()

// var username = "John"
// var username = "Anna"
// console.log(username); // Anna


// for (var i = 0; i <= 97; i++) {
//   console.log(i) // 0 ... 97
// }
// console.log(i) // 98

// ================= function tasks =================
// Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.
// anna = anna | казак = казак | оно = оно | hello != olleh
// = оператор присвоения
// == оператор слабого равенства
// === оператор строгого равенства

// function isPalindrome(word) {
//   // let reversedStr = ''
//   // for(let i = word.length - 1; i >= 0; i--) {
//   //   // console.log(word[i]) // o + l + l + e + h
//   //   reversedStr += word[i]
//   // }

//   // // if (reversedStr === word) {
//   // //   return true
//   // // }
//   // // return false

//   // return reversedStr.toLowerCase() === word.toLowerCase() // return true || return false

//   return word.split("").reverse().join("").toLowerCase() === word.toLowerCase()
// }
// // split разбор букв строки на массив "hello" => ['h', 'e', 'l', 'l', 'o']
// // reverse переворачивает массив ['h', 'e', 'l', 'l', 'o'] => ['o', 'l', 'l', 'e', 'h']
// // join объединяет элементы массива в строку ['o', 'l', 'l', 'e', 'h'] => "olleh"
// // toLowerCase() все буквы сделать строчными
// // toUpperCase() все буквы сделать заглавными
// console.log(`hello => ${isPalindrome("hello")}`);
// console.log(`казак => ${isPalindrome("казак")}`);
// console.log(`Anna => ${isPalindrome("Anna")}`);

// Напишите функцию, которая в качестве аргументов получает массив и элемент, потом проверяет существует ли этот элемент в массиве, если да возвращает true в противном случае false.
// [3, 2, 6], 2 => true
// [3, 2, 6], 4 => false

// function isExist(arr = [], elem) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === elem) {
//       return true
//     }
//   }
//   return false
// }

// console.log(isExist([3, 2, 6], 2)) // true
// console.log(isExist([3, 2, 6], 4)) // false

// // Напишите функцию, которая в качестве аргументов принимает массив и возвращает его уникальные элементы без дубликатов в виде массива. Использовать функцию из 2 задачи.
// // [1, 2, 3, 2, 4, 1, 5] => [1, 2, 3, 4, 5]
// function getWithoutDuplicates(arr = []) {
//   const newArray = []
//   for (let i = 0; i < arr.length; i++) {
//     if(!isExist(newArray, arr[i])) { // !true = false
//       newArray.push(arr[i])
//     }
//   }
//   return newArray
// }
// let numArray = [1, 2, 3, 2, 4, 1, 5]
// console.log(`${numArray} => ${getWithoutDuplicates(numArray)}`);

// ================= dom =================
// document.querySelector("#my_elem") // универсальный метод возвращает с помощью указателья 
// document.getElementById("elem_id")
// document.getElementsByTagName("div")
// document.getElementsByClassName("elem_class")

// const pElems = document.querySelectorAll("p")
// console.log(pElems);
// for (let i = 0; i < pElems.length; i++) {
//   console.log(pElems[i]);
// }

// коллекции доступны только в среде выполнения браузера, поэтому методы массиво на них не работают (разные прородители)
// коллекции могут быть жывими и наоборот
// жывая коллекция реагирует на изменения DOM дерева
// getElementById getElementsByTagName getElementsByClassName возвращают жывую коллекцию узлов, querySelectorAll - нет

// remove() удаляет элемент из DOM
// pElems[0].remove()
// console.log(pElems)

// Напишите функцию, которая принимает один аргумент - указатель на элемент, находит их по этому указателю и выделяет их границы цветом.
// function addBorder(selector) {
//   const elems = document.querySelectorAll(selector)
//   for (let i = 0; i < elems.length; i++) {
//     elems[i].style.border = "2px solid red"
//   }
// }

// addBorder(".prgph")

// Напишите функцию, которая добавит к содержимому каждого элемента списка его порядковый номер.
function addNumbers() {
    const listItems = document.querySelectorAll(".list li")
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].innerText +=  ' ' + (i + 1)
    }
  }
  
  addNumbers()
  
// Напишите функцию, которая принимает один аргумент - n который является целым положительным числом, и удаляет каждый n_ный элемент списка.