//================================================================ открытие ссылки Link ============================================================

// 
let link = document.querySelector('a');
link.innerText = "Google"; // название чтобы ссылка открылась 
// меняется ссылка на картинку итд.
link.setAttribute("href", "https://www.google.com"); 
link.setAttribute("target", "_blank");  // открытие ссылки экстернo
// Эта строка устанавливает атрибут href элемента 
// link в значение "https://www.google.com".

console.log(link.getAttribute("href")); // Consol:https://www.google.com
// Эта строка выводит в консоль значение 
// атрибута href элемента link.


// ------- проверка на наличие отрибута --------
console.log(link.hasAttribute('target')); // Consol: true
// Здесь в консоль выводится true, потому что у элемента 
// link есть атрибут target.
console.log(link.hasAttribute('class')); // Consol: false
// В консоль выводится false, поскольку у элемента 
// link нет атрибута class.


// ------- удаление атрибута у элемента link -------
link.removeAttribute("target");
// Эта строка удаляет атрибут target у элемента link.


// ----------- practice 1 ------------
// Задача: Написать скрипт, который находит картинки 
// в блоке с классом main и первым 5 картинкам меняет 
// url на указанное значение.

// изменение ссылки
let url = 'https://cdn-cafdl.nitrocdn.com/fQHdfFSxWCuDmbpNBOTabVcchzVvBqxc/assets/images/optimized/rev-10d6093/blog/wp-content/uploads/2014/09/cute-kittens.jpg';
let images = document.querySelectorAll('.main>img');
console.log(images);
// изменение ссылки c помощью setAttribute
for(let i=0; i<5; i++){
    images[i].setAttribute('src', url);
}

// Работа с картинками и ссылками и со всеми атрибутами
// Свойство setAttribute() предназначен для добавления в элемент 
// нового атрибута с указанным значением. Если указанный атрибут уже
// существует, то значение этого атрибута изменяется на значение, 
// переданное методу в качестве второго аргумента.
// element.setAttribute(имяАтрибута, значение); 
// Пример: HTML -> <a>Google</a>
// JS -> document.querySelector('a').setAttribute('href', 'https://www.google.com/'); 
// Еще несколько свойств: 
// let elem = document.querySelector('p'); 
// console.log(elem.hasAttribute('id')); -> проверяет наличие атрибута 
// console.log(elem.getAttribute('id')); -> получает значение атрибута 
// elem.setAttribute('class', 'text'); -> устанавливает атрибут 
// elem.removeAttribute('id'); -> удаляет атрибут