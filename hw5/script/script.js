// ----------- 1. ----------- 
// Создайте новый элемент 
// -> добавьте ему текст и добавьте его после 
// элемента с id "existingElement".

// -> Создание нового элемента в формате текста
let newElement = document.createElement("p");

// -> Добавка текст
newElement.innerText = "Новый элемент с текстом 1";
// 2.Вариант
// let textNode = document.createTextNode("Новый элемент с текстом");
// newElement.appendChild(textNode);


// Поиск существующего элемента по id
let existingElement = document.getElementById("existingElement");

// добавить элемент после сушествуешего элемента
// -> appendChild(newNode): добавляет новый узел newNode в конец коллекции дочерних узлов
existingElement.appendChild(newElement);
// 2.Вариант 
// existingElement.insertAdjacentElement('afterend', newElement);



// ----------- 2. ----------- 
// Создайте новый элемент , добавьте ему 
// текст и вставьте его внутрь элемента с id "parentElement".
let newElement1 = document.createElement("p");
document.getElementById("parentElement").innerHTML = "Новый элемент с текстом 2";
// P.S. можно так и заменить текст



// ----------- 3. -----------
// Удалите элемент с классом "removeMe".
let removed_p = document.querySelector(".removeMe");
removed_p.remove();





// ----------- 4. -----------
// Создать множество карточек с товарами 
// (на основе массива с объектами. 
// -> У объекта свойства title, unit_price, count)

// Массив с объектами
let productsArrays = [
    {
        title: 'Товар 1', 
        unit_price: 10.99, 
        count: 2 
    },
    { 
        title: 'Товар 2', 
        unit_price: 24.99, 
        count: 3 
    },
    { 
        title: 'Товар 3', 
        unit_price: 7.49, 
        count: 4 
    },
];

console.log(productsArrays);
let out = "";
for (let key in productsArrays) {
    out += '<div class="card">';

    out += '<p class="p1">Title: '+productsArrays[key].title + '</p>';
    out += '<p class="p1">Unit Price: $' +productsArrays[key].unit_price + '</p>';
    out += '<p class="p1">Count: ' +productsArrays[key].count + '</p>';

    out += '</div>';
}
document.getElementById('out').innerHTML = out;







// ----------- 5. -----------
// Написать скрипт, который выводит карточки 
// с товарами в интерфейс 
// (на основе массива с объектами. У объекта свойства 
// title, unit_price, count), а внизу выводится 
// итоговая сумма товаров и их количество.

// Массив с объектами
let productsArray = [
    {
        title: 'Товар 1', 
        unit_price: 10.99, 
        count: 2 
    },
    { 
        title: 'Товар 2', 
        unit_price: 24.99, 
        count: 3 
    },
    { 
        title: 'Товар 3', 
        unit_price: 7.49, 
        count: 4 
    },
  ];
  
console.log(productsArray);  
// Создание множества карточек с товарами
let productContainer = document.getElementById('product-container');
  
productsArray.forEach(function(product) {
    let card = document.createElement('div');
    card.className = 'product-card';
    

    let title = document.createElement('div');
    title.className = 'product-title';
    title.textContent = product.title;
    card.appendChild(title);
    
    let price = document.createElement('div');
    price.className = 'product-price';
    price.textContent = '$' + product.unit_price;
    card.appendChild(price);
    
    let count = document.createElement('div');
    count.className = 'product-count';
    count.textContent = 'Количество: ' + product.count;
    card.appendChild(count);

    
    card.addEventListener('click', function () {
        
    // Переключаем класс 'active' для текущей карточки
    card.classList.toggle('active');
    });
  

    
    productContainer.appendChild(card);
});



