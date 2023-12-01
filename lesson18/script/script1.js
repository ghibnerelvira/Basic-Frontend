// 1.
// Создать форму в html (наименование товара и цена) 
// и добавить скрипт, чтобы при отправке формы данные 
// из нее выводились в консоль.

// 2.
// Доработать процесс таким образом, чтобы при отправке формы 
// данные из нее добавлялись в массив с продуктами в виде объекта. 
// Вывести массив в консоль.

let form = document.forms.product_form; // может найти через name"" конкрет форму в html
                                        // проверка: console.log(form); 
let productName = document.querySelector('.name_input');
let productPrice = document.querySelector('.price_input');

// 2. только для 2 -> let products = [];   
let products = [];
// 1. + 2.
form.addEventListener('submit', function(event){

    event.preventDefault(); // для того чтобы страница не обнавлялось
    // 1. только для 1: 
    // console.log(productName.value);
    // console.log(productPrice.value);

    // 2. только для 2: 
    let product_obj = {
        title: productName.value,
        price: Number(productPrice.value) // Преобразуем в число
    }
    // Добавляем продукт в масси
    products.push(product_obj);
    // Выводим массив в консоль
    console.log(products);

});

