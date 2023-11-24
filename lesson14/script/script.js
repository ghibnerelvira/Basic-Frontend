// DOM -> Document object model
// Существует всего два исключения из этого правила:
// 1. По историческим причинам пробелы и перевод строки перед тегом <head> игнорируются
// 2. Если мы записываем что-либо после закрывающего тега </body>, браузер автоматически 
// перемещает эту запись в конец body,
// поскольку спецификация HTML требует, чтобы всё содержимое было внутри <body>. 
// Поэтому после закрывающего тега </body> не может быть никаких пробелов.
// Все, что есть в HTML, даже комментарии, является частью DOM.
// Даже директива <!DOCTYPE...>, которую мы ставим в начале HTML, тоже является DOM-узлом. 
// Она находится в дереве DOM прямо перед <html>. Мы не будем рассматривать этот узел, мы даже 
// не рисуем его на наших диаграммах, но он существует.
// Даже объект document, представляющий весь документ, формально является DOM-узлом. 
// Существует 12 типов узлов. Но на практике мы в основном работаем с 4 из них:
// 1. document – «входная точка» в DOM.
// 2. узлы-элементы – HTML-теги, основные строительные блоки.
// 3. текстовые узлы – содержат текст.
// 4. комментарии – иногда в них можно включить информацию, которая не будет показана, 
// но доступна в DOM для чтения JS.
// Чтобы посмотреть структуру DOM в реальном времени, попробуйте 
// Live DOM Viewer http://software.hixie.ch/utilities/js/live-dom-viewer/ 
// Просто введите что-нибудь в поле, и ниже вы увидите, как меняется DOM.

// ============================================================ Selector: ============================================================
// tag name -> name
// class name -> .name
// id name -> #name
// tagname>.class

// sorce
// document.querySelector

// ================================================== querySelector (first elements)  ==================================================
// ------ возврашает только первый параграф 'p' ------
let paragraph = document.querySelector('p');
console.log(paragraph);


// ------ найти элемент по .классу ------
let paragraph3 = document.querySelector(".p3");
console.log(paragraph3);


// ------ найти элемент по id ------ 
let paragraph4 = document.querySelector("#p4");
console.log(paragraph4);


// ------ найти элемент по вложенным селектором ------
let paragraph5 = document.querySelector(".block1>p"); // ("div>p") -> без класса
console.log(paragraph5);


// ------ изменение текста -------
paragraph5.innerHTML = "New text";
paragraph5.innerHTML = '<span class="span1"> Text </span>'; // изменение ввиде HTML
paragraph5.innerText = '<span> Text </span>';// изменение ввиде текста
// <p><span> Text </span></p>


// ------ найти вложенные  ------
let paragraph6 = document.querySelector(".p6");
console.log(paragraph6); // Consol: <p class="p6">...</p>
// Эта строка выводит в консоль HTML-элемент, представленный переменной paragraph6.
console.log(paragraph6.innerHTML); // Сonsol: Text <span>text1</span> text2
// Эта строка выводит в консоль HTML-содержимое внутри элемента, представленного paragraph6. 
// Это включает в себя как текст, так и любые HTML-теги, text atribute внутри этого элемента.
console.log(paragraph6.innerText); // Consol: Text text1 text2
// Эта строка выводит в консоль текстовое содержимое внутри элемента, 
// Она возвращает только видимый текст в консоль.

// Zusammengefasst:
// innerHTML предоставляет вам HTML-содержимое внутри элемента, включая любые HTML-теги.
// innerText предоставляет только видимое текстовое содержимое, без HTML-тегов.
// console.log(paragraph6) выводит в консоль весь HTML-элемент.


// ---- practice -----
// Задача: Написать программу, которая находит 
// параграф по классу и заменяет в нем текст на “привет”.
let text1 = document.querySelector('.text1');
text1.innerText = 'Hello';
console.log(text1);
 

// ================================================== querySelectorAll (all elements) -nodelist ==================================================
// let links = document.querySelectorAll('a');
// console.log(links); -> nodeList

// ------ возврашает все параграфы(элементы) ------
// let paragraph = document.querySelectorAll('p');
let paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
// ---- отдельнные найти по index 
console.log(paragraphs[0]); // Consol: <p>Text1</p>
console.log(paragraphs[1]); // Consol: <p>Text2</p>
// ---- изменение через index
paragraphs[1].innerText = "New paragraph"; 
// Consol: <p>Text2</p> изменён -> <p>New paragraph</p>

// -- вывод через цыкл 
for (let i = 0; i < paragraphs.length; i++) { 
    console.log(paragraphs[i].innerText); // вывод текстом
} 
// Consol:  
// Text1
// New paragraph
// Text3
// Text4
// <span> Text </span>
// Text text1 text2
// 98 Hello

// -- вывод через цыкл for of
for (let elem of paragraphs) {
    console.log(elem); // console.log(elem.innerText); -> вывод текстом
}

// ---- practice 1 -----
// Задача: Написать программу, которая находит 
// параграфы и заменяет в каждом из них текст на “привет”.
for (let elem of paragraphs){
    elem.innerText = 'Hello';
}

// ---- practice 2 -----
// Задача: Написать скрипт, который находит 
// параграфы и первым 3 параграфам меняет текст 
// на указанные пользователем значения.
for (let i = 0; i < 3; i++) {
    paragraphs[i].innerText = prompt("enter the text");
}

// ---- practice 3 -----
// Задача: Написать скрипт, который находит параграфы 
// и четным параграфам меняет текст на 'Я четный', 
// a нечетным на 'Я нечетный'.
for (let i = 0; i < paragraphs.length; i++) {
    if (i%2==0) {
        paragraphs[i].innerText = "Я нечетный";
    } else {
        paragraphs[i].innerText = "Я четный";
    };
}

// ---- practice 4 -----
// Задача: Написать скрипт, который находит параграфы 
// и выводит (console) текстовое содержимое начная 
// с 3 параграфа до 6.
for (let i = 2; i < 6; i++) {
    console.log(paragraphs[i].innerText);  
}






