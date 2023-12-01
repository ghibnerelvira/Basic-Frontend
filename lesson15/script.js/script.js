// ====================================== Добавление элементов ======================================
// Вывод на экран: Block1
let block = document.createElement("div");
block.innerText = "Block1";
document.body.prepend(block); // вставить блок в начало body

document.body.prepend(block);
document.body.append(block);// вставить блок в конец body

// ---- вставить параграф можно только один раз -----
let paragraph = document.querySelector(".p1");
paragraph.before(block); // вставить блок до параграфа
paragraph.after(block); // вставить блок после параграфа


// ---- Добавление через for ---- 
for (let i = 1; i < 6; i++) { // от 1 до 5 числа к блоку -> {i}
    let div = document.createElement("div"); // создать div элемент
    div.innerText = `Block${i}`; //  вставить в div Block ${i}
    document.body.append(div); // вставить блок в конец body
}
// Consol: Block1
//         Block2
//         Block3
//         Block4
//         Block5



// в пустой div добавление параграфа через id
// Создать параграф, задать ему текст и добавить в HTML- документ в div с #root
let new_p = document.createElement("p");
new_p.innerText = "Paragraph"; // добавление в <p> text
let root_div = document.querySelector("#root");
root_div.append(new_p);


// -------------- practice 1 -----------
// Задание: Напишите скрипт для создания списка.(все через JS)
// Для каждого пункта:
// Запрашивайте содержимое пункта (тега <li>) у пользователя с помощью prompt 10 раз.
// Создавайте элементы <li> и добавляйте его к <ul>.
// Elements: 
// <ul>
//    <li></li>
//    <li></li>
//    <li></li>
//    <li></li>
//    <li></li>
//    <li></li>
//    <li></li>
//    <li></li>
//    <li></li>
//    <li></li>
// </ul>

//  Вывод на экран:
// . 2
// . 3
// . 4
// . 5
// . 6
// . 7
// . 8
// . 5
// . 4
// . 3

let list = document.createElement('ul');
document.body.append(list);

for(let i=0; i<10; i++){
    let data = prompt('Введите содержимое для пункта ' + (i + 1)); 
    // (i + 1) -> Введите содержимое для пункта 1, 2, 3..
    let li = document.createElement('li');
    li.innerText = data;
    list.append(li);
}

// 2 Вариант:
// let ul = document.createElement('ul'); -> Создаем пустой список ul

// Запрашиваем содержимое для 10 пунктов списка
// for (let i = 0; i < 10; i++) {
//   Запрашиваем содержимое у пользователя
//   let listItemContent = prompt('Введите содержимое для пункта ' + (i + 1));

//   let li = document.createElement('li'); -> Создаем элемент li
//   li.textContent = listItemContent; -> Присваиваем содержимое элементу li
//   ul.appendChild(li); // Добавляем элемент li к списку ul
// }
// document.body.appendChild(ul); -> Добавляем список ul к body документа


// -------------- practice 2 -----------
// Создать множество параграфов с числами от 0 до 19.

// Создаем контейнер для параграфов
let container = document.createElement('div');
document.body.append(container);

// Создаем параграфы с числами от 0 до 19
for (let i = 0; i < 20; i++) {
  let paragraph = document.createElement("p");
  paragraph.textContent = "Number: " + i; // Number: 1 , Number: 2 ...
  container.append(paragraph); // вставить блок в конец body
}
// 2 Вариант:
// for(let i=0; i<20; i++){
//     let paragraph = document.createElement('p');
//     paragraph.innerText = i;
//     document.body.append(paragraph);
// }


// -------------- practice 3 -----------
// Написать цикл, который проходится по массиву 
// строк и для каждого создает параграф и добавляет в #root
let stringArray = ["Строка 1", "Строка 2", "Строка 3", "Строка 4", "Строка 5"];

// Получаем элемент #root
let root1Element = document.querySelector("#root1");

// Создаем параграфы для каждой строки в массиве и добавляем их в #root
for (let i = 0; i < stringArray.length; i++) {
    let paragraph = document.createElement("p");
    paragraph.innerText = stringArray[i];
    root1Element.append(paragraph);
}


// ======================================================= удаление ============================================
// ----- удаление paragraph ------ 
let removed_p = document.querySelector(".deleted");
removed_p.remove();

// ----- удаление link ----- 
let links = document.querySelectorAll('a');
for(let link of links){
    // console.log(link);
    link.remove();
}

// -------------- practice 1 -----------
// Создайте новый элемент <li>, добавьте ему текст и 
// вставьте его в начало списка с id "myList".
// <ul id="myList">
// <li>Elem1</li>
// <li>Elem2</li>
// <li>Elem3</li>
// <li>Elem4</li>
// </ul> 

let myList = document.querySelector('#myList');

let new_list = document.createElement('li');
new_list.innerText = 'New element';
myList.prepend(new_list);

// -------------- practice 2.1 -----------
// Написать программу, которая запрашивает у пользователя 
// картинку и ссылку на статью (любую) и формирует в интерфейсе 
// картинку и внизу ссылку, указанную пользователем.
// картинка с сылкой

// Вставляется любая ссылка

let imgSrc = prompt("Enter the image URL");
let aHref = prompt("Enter the link URL");

let imgElem = document.createElement("img");
imgElem.setAttribute("src", imgSrc);
imgElem.setAttribute("alt", "Post image");

document.body.append(imgElem);
let aElem = document.createElement("a");
aElem.setAttribute("href", aHref);
aElem.setAttribute("target", "_blank");
aElem.innerText = "Post Link"; 

document.body.append(aElem);


// -------------- practice 3 -----------
// Массив из объектов со свойствами link и title. 
// Свойства хранят в себе ссылку на страницу и название страницы соответственно. 
// Напишите цикл, который создаст для каждого объекта ссылку и добавит в #links.
// <a href="https://facebook.com" target="_blank">facebook</a>
// <a href="https://youtube.com" target="_blank">youtube</a>
// <a href="https://google.com" target="_blank">google</a>
// <a href="https://github.com" target="_blank">github</a>  // [i]
// линки на экране

let links1 = [
    {
        link: "https://facebook.com",
        title: "Facebook"
    },

    {
        link: "https://youtube.com",
        title: "Youtube"
    },
    
    {
        link: "https://google.com",
        title: "Google"
    },

    {
        link: "https://github.com",
        title: "GitHub"
    }
    
];

let divLinks = document.querySelector("#links1");

for(let i=0; i<links1.length; i++){
    // console.log(links1[i].link);  -> Consol: https://facebook.com
    // console.log(links1[i].title); -> Consol: https://facebook.com
    //                                          Facebook
    let linkElem = document.createElement('a');
    linkElem.setAttribute('href', links1[i].link);
    linkElem.setAttribute('target', '_blank');
    linkElem.innerText = links1[i].title;
    divLinks.append(linkElem);
}



// -------------- practice 4 -----------
// Рассматриваем кейс, в котором создается div с картинкой и ссылкой внутри.
// Создаем функцию, которая получает ссылку на картинку и ссылку на сайт и возвращает элемент.
function createBlockWithImage(imgSrc1, aHref1) {
    let block = document.createElement("div");

    let imgElem1 = document.createElement("img");
    imgElem.setAttribute("src", imgSrc1);
    imgElem1.setAttribute("alt", "Post Img");

    let linkElem1 = document.createElement("a");
    linkElem1.setAttribute("href", aHref1);
    linkElem1.setAttribute("target", "_blank");
    linkElem1.innerText = "Click me 2 -> Link для фото";

    block.append(imgElem, linkElem1); // картинка и ссылка вставляется в блок
    // <div>
    //      <img src="">
    //      <a href=''></a>
    // </div>

    return block;
}

let imgSrc1 = 'https://consumersiteimages.trustpilot.net/business-units/641aeaedbd3a43fcfbfedb1c-198x149-1x.jpg';
let aHref1 = 'https://startainstitute.com/';
let newDiv = createBlockWithImage(imgSrc1, aHref1);
document.body.append(newDiv);