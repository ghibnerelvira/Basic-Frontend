// 1.
// Создать форму в html (наименование товара и цена) 
// и добавить скрипт, чтобы при отправке формы данные 
// из нее выводились в консоль.

// 2.
// Доработать процесс таким образом, чтобы при отправке формы 
// данные из нее добавлялись в массив с продуктами в виде объекта. 
// Вывести массив в консоль.

// Получаем форму по её имени(attribute 'name').
let form = document.forms.product_form; // может найти через name"" конкрет форму в html
                                        // проверка: console.log(form); 
// Получаем поле ввода для наименования товара.
let productName = document.querySelector('.name_input');
// Получаем поле ввода для цены товара.
let productPrice = document.querySelector('.price_input');

// 2. только для 2 -> let products = [];   
let products = []; // Создаём массив для хранения товаров.
// 1. + 2.
form.addEventListener('submit', function(event){ // Добавляем обработчик события отправки формы.

    event.preventDefault(); // для того чтобы страница не обнавлялось
                            // Предотвращаем перезагрузку страницы при отправке формы.

    // 1. только для 1: 
    // console.log(productName.value);
    // console.log(productPrice.value);

    // 2. только для 2: 
    let product_obj = { // Создаём объект товара из введённых данных в форму.
        title: productName.value, // Наименование товара из поля ввода.
        price: Number(productPrice.value) // Цена товара из поля ввода (преобразуем в число).
    };
    products.push(product_obj); // Добавляем товар в массив продуктов.

    rerender(); // Перерисовываем список товаров.

    form.reset(); // Очищаем значения в полях ввода формы.

});



// 3. 
// Добавить функцию, которая получает наименование карточки 
// и цену и возвращает HTML элемент с карточкой товара.

function createProductCard({ title, price }) { // Функция, создающая HTML-элемент карточки товара.
    let pTitle = document.createElement('p'); // Создаём параграф для наименования товара.
    pTitle.innerText = title; // Устанавливаем текст для наименования товара.
    let pPrice = document.createElement('p'); // Создаём параграф для цены товара.
    pPrice.innerText = price; // Устанавливаем текст для цены товара.
    let productCard = document.createElement('div'); // Создаём контейнер карточки товара.
    productCard.classList.add('product_card'); // Добавляем класс для стилизации.
    productCard.append(pTitle, pPrice); // Добавляем параграфы в карточку товара.

    return productCard; // Возвращаем готовую карточку товара.
}

// 4. 
// Разработать функцию rerender. Эта функция очищает контейнер 
// с карточками и создает множество карточек с товарами из массива. 
// Настроить rerender при добавлении нового продукта.

function rerender() { // Функция перерисовки списка товаров.
    // Находим контейнер для списка товаров.
    let productsList = document.querySelector('.products_list_container'); 
    productsList.innerHTML = ''; // Очищаем его содержимое перед перерисовкой.

    if (products.length == 0) { // Если список товаров пуст...
        // Создаём элемент для отображения сообщения о пустом списке.
        let emptyP = document.createElement('p'); 
        emptyP.innerText = 'Товаров нет'; // Устанавливаем текст сообщения.
        emptyP.classList.add('empty_p'); // Добавляем класс для стилизации.
        productsList.append(emptyP); // Добавляем сообщение в контейнер списка товаров.
    }

    for (let i = 0; i < products.length; i++) { // Перебираем все товары в массиве.
        let productCardElem = createProductCard(products[i]); // Создаём карточку для каждого товара.

        let removeBtn = createRemoveBtn(); // Создаём кнопку-крестик для удаления товара.
        productCardElem.append(removeBtn); // Добавляем кнопку в карточку товара.
        // Добавляем обработчик события клика по кнопке удаления.
        removeBtn.addEventListener('click', function() { 
            products.splice(i, 1); // Удаляем соответствующий товар из массива.
            rerender(); // Перерисовываем список товаров после удаления.
        });

        productsList.append(productCardElem); // Добавляем карточку товара в контейнер списка товаров.
    }
}


// 5. 
// Добавить функцию, которая возвращает кнопку в виде крестика в красном кружке. 

function createRemoveBtn() { // Функция создания кнопки-крестика для удаления товара.
    let btnRemove = document.createElement('button'); // Создаём кнопку.
    btnRemove.innerText = 'X'; // Устанавливаем текст на кнопке.
    btnRemove.classList.add('remove_btn'); // Добавляем класс для стилизации.

    return btnRemove; // Возвращаем созданную кнопку.
}