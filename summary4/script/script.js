// let, const, var
// if (1 == 0) {

// } else {

// }

// a-b A-B _ $ 0-9

// let store = {}
// let carModelName // camelCase
// let car_model_name // snake_case
// typeof(store)
// typeof store

// NaN
// неявное преобразования типов
// 2 + '2' = '22' 
// 1) 2 + NaN = NaN
// 2) '2' + '2' = '22'

// 2 - '2' = 0 = 2 - 2 = 0
// 2 - 'h' = 2 - NaN = NaN

// '3' > '123' сравниваются ASCII коды символов
// 51 > 49 true
// 3 > 123 сравниваются как обычные числа

// '3' == 3 // '3' == '3' true
// '3' === 3 // string === number // false
/// === строгое равенство, проверяются сначала типы данныъ операндов

// =================== tasks ===================
// Math.floor(2.9) = 2 // округление в нижную строну
// Math.ceil(2.1) = 3 // округление в верхнюю строну
// Math.round(2.1) = 2
// Math.round(2.6) = 3
// Написать код, где есть целочисленный массив и обработать каждое число из этого массива. Вывести в консоли массив, обработав каждое число из входного массива следующим образом:
// Если число имеет целочисленный квадратный корень, то извлечь его, в противном случае возвести число в квадрат. Пример:
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// i < arr.length; i < 6; 5
// i <= arr.length - 1; i <= 5
// i = i + 2
// i += 2
// i++ // увеличить значение на 1 всегда
// const arr = [4,3,9,7,2,1]
// const resultArr = []
// for(let i = 0; i < arr.length; i++) { // 0 1 2 3 4 5
//   // console.log(arr[i])
//   const sqrt = arr[i] ** 0.5 // квадратный корень
//   const roundedSqrt = Math.floor(sqrt) // округленный квадратный корень
//   if (sqrt === roundedSqrt) { // если да значит там целочисленный квадратный корень
//     resultArr.push(sqrt)
//   } else { // если нет значит там квадратный корень число с плавующей точкой
//     resultArr.push(arr[i] ** 2)
//   }
// }
// console.log(resultArr)

// Написать код, где будет массив полный мусора, но содержащий одну "иголку".
// Найти “иголку”, вывести в консоли сообщение, которое будет содержать:
// "найдена иголка в позиции {индекс}”, по которому она была найдена.Пример:
// ["сено", "мусор", "сено", "сено", "песок", "иголка", "трава", "иголка"]. --> 
// "найдена иголка в позиции 5"
// "найдена иголка в позиции 7"
// const arr = ["сено", "мусор", "сено", "сено", "песок", "иголка", "трава", "Иголка"] // "иголка"
// for (let i = 0; i < arr.length; i++) {
//   if(arr[i].toLowerCase() === "иголка") {
//     console.log(`найдена иголка в позиции ${i}`)
//   }
// }

// let word = "QwErTy"
// word.toUpperCase() // QWERTY
// word.toLowerCase() // qwerty

// Написать программу где есть два массива целых чисел cube1 и cube2. Каждый массив будет состоять из 3 положительных целых чисел больше 0, представляющих собой размеры куба [ширина, длина, высота] cube1 и cube2.  Найти разность объемов кубов, вычесть из большего меньший и вывести в консоль.
// Пример:
// Если переданы массивы [2, 2, 3], [5, 4, 1], то объем у cube1 равен 12, а объем у cube2 - 20. Следовательно, в консоли будет выведен результат 8.
// let cube1 = [2, 2, 3]
// let cube2 = [5, 4, 1]
// let volume1 = 1
// let volume2 = 1
// for(let i = 0; i < 3; i++) {
//   volume1 *= cube1[i]
//   volume2 *= cube2[i]
// }
// if(volume1 > volume2) {
//   console.log(volume1 - volume2)
// } else {
//   console.log(volume2 - volume1)
// }

// objects
// let id = Symbol('id')

// let product = {
//   title: 'Macbook',
//   price: 1000,
//   [id]: 1,
//   'Car model name': "BMW"
// }
// let duplicateProduct = structuredClone(product) // глубокое клонирование объекта

// let secondProduct = product
// secondProduct.price = 5000

// console.log(product.price) // 5000
// console.log(duplicateProduct.price) // 1000

// Создать массив users из объектов с данными пользователей (свойства id, firstname, lastname, age и country). Данные взять произвольные.
// Пройдитесь циклом по массиву users и сформируйте строки с описанием каждого совершеннолетнего пользователя. Выведите каждую полученную строку в консоль.
const users = [
    {
      id: 0,
      firstname: 'John',
      lastname: 'Doe',
      country: 'USA',
      age: 20
    },
    {
      id: 1,
      firstname: 'Jane',
      lastname: 'Doe',
      country: 'USA',
      age: 16
    },
    {
      id: 2,
      firstname: 'Richard',
      lastname: 'Gomez',
      country: 'Spain',
      age: 42
    }
  ]
  // \n => символ новой строки в консоли
  for(let i = 0; i < users.length; i++) {
    if(users[i].age >= 18) {
      const {firstname, lastname, country} = users[i]
      console.log(`Firstname: ${firstname}\n Lastname: ${lastname}\n Country: ${country}`)
    }
  }
  // деструктуризация
  // let obj = {
  //   a: 1,
  //   b: 2
  // }
  // let {a, b} = obj // a = 1, b = 2