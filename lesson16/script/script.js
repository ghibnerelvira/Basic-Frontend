// let new_p = document.createElement('p');
// new_p.innerText = 'new';

// append -> в конце
// prepend -> в начале
// before -> до
// after -> после

// Element.remove();



// =============================================== callback function ===============================================

// function function_name1(param1, param2){
//     // ..
//     // 5 sec
// }

// function function_name2(param1, param2){
//     // ..
// }

// function function_name3(param1, param2){
//     // ..
// }

// function function_name4(param1, param2){
//     // ..
// }

// function_name1()
// function_name2()


// function printHello(username){
//     console.log(`Hello ${username}`);
//         // timer(2min)
// }

// function printBye(username){
//     console.log(`Bye ${username}`);
//     // timer(1min)
// }

// function ask(username){
//     console.log(`How are you ${username}`);
// }


// function dosmthwithUsername(username,callback){
//     callback(username);
// }

// dosmthwithUsername('John', printHello);
// dosmthwithUsername('John', ask);
// dosmthwithUsername('John', printBye);

// ---- practice 1 -----
// Написать функцию forEach, которая принимает в качестве 
// первого аргумента массив, а в  качестве второго функцию и 
// вызывает принятую функцию для каждого элемента массива.

function printArray(elem){
     console.log(elem);
}

function printElemPow(elem)//elem**2
{
     console.log(elem**2);
}

function printEvenElem(elem) //if even then console.log(elem)
{
     if(elem%2==0){
         console.log(elem);
     }
}

// function forEach(array, callback){
//     for(let i=0; i<array.length; i++){
//         callback(array[i])
//     }
// }

// let numbers = [5, -2, 12, 5, 0, 26, 25, 7, 1];

// forEach(numbers, printArray);
// forEach(numbers, printElemPow);
// forEach(numbers, printEvenElem);
// printElemPow(100);



// function first(){
//     setTimeout(() => {
//         console.log(1);
//     }, 500);
// }

// function second(){
//     console.log(2);
// }


// first();
// second();

//2
//1

// function first(callback){
//     setTimeout(() => {
//         console.log(1);
//         callback();
//     }, 500);
// }

// function second(){
//     console.log(2);
// }

// first(second);

// 1
// 2


// let paragraph = document.querySelector('.p1');

// // in-line
// // paragraph.addEventListener('click', function(){
// //     console.log(paragraph.innerText);
// // });

// paragraph.addEventListener('click', showText);

// function showText(){
//     console.log(paragraph.innerText);
// }


// Повесить событие клика на кнопку таким образом, чтобы при нажатии на нее в консоль выводилась строка “Hello world”.

// let button = document.querySelector('.btn1');

// button.addEventListener('click', function(){
//     console.log('Hello world');
// })

// Переделать кнопку таким образом, чтобы при нажатии на  нее в параграфе в интерфейсе значение увеличивалось на 1.  В начале рассмотрите процесс, при котором мы каждый раз  считываем число из параграфа, меняем и записываем  обратно, а потом переделайте процесс так, чтобы значение  хранилось в переменной, изменялось при клике и  записывалось в параграф.

// let button = document.querySelector('.btn1');
// let pNum = document.querySelector('.num');

// 1
// button.addEventListener('click', function(){
//     let counter = Number(pNum.innerText);
//     pNum.innerText = ++counter;
// })

// 2
// let num = 2;

// button.addEventListener('click', function(){
//     pNum.innerText = ++num;
// })

// button.addEventListener('click', function(){
//     console.log(pNum.innerText);
// })

// button.addEventListener('click', function(){
//     pNum.innerText = 'New text';
// })


// Задание1: Написать программу, которая создает две кнопки и вешает на них событие нажатия. При нажатии на первую выводится в консоль “минус”, а при нажатии на вторую ‘плюс’.

// Задание2: Доработать процесс таким образом, чтобы при нажатии на плюс в консоль выводилось число, увеличившись на 1, а при нажатии на минус уменьшившись на 1. Для решения этой задачи понадобится создать переменную и изменять ее при нажатии на ту или иную кнопку.

// Задание3: Попробовать так же изменить значение параграфа

// let button1 = document.createElement('button');
// button1.innerText = 'Minus';

// let button2 = document.createElement('button');
// button2.innerText = 'Plus';

// document.body.append(button1, button2);

// // let number = 5; //задание 2

// let paragraph_num = document.querySelector('.num');
// function plus(){
//     // console.log('Plus'); //задание 1
//     // console.log(++number); //задание 2
//     paragraph_num.innerText = Number(paragraph_num.innerText) + 1;
// }

// function minus(){
//     // console.log('Minus'); //задание 1
//     // console.log(--number); //задание 2
//     paragraph_num.innerText = Number(paragraph_num.innerText) - 1;
// }

// button1.addEventListener('click', minus);
// button2.addEventListener('click', plus);


// let button = document.querySelector('.btn1');

// button.addEventListener('click', clickMe);

// function clickMe(){
//     console.log('Hello');
// }

// button.removeEventListener('click', clickMe);


// Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на параграф текст должен меняться на звездочки => *****

// let str_array = ['John', 'Tom', 'Bob', 'Sam'];

// for(let i=0; i<str_array.length; i++){
//     let pElem = document.createElement('p');
//     pElem.innerText = str_array[i];
//     document.body.append(pElem);

//     pElem.addEventListener('click', function(){
//         pElem.innerText = '*****';
//     })
// }

// Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца в квадрат.

// let paragraph_num = document.querySelector('.num');
// let btn = document.querySelector('.btn1');

// btn.addEventListener('click', function(){
//     paragraph_num.innerText = Number(paragraph_num.innerText) ** 2;
// })

// Даны абзацы с числами, абзац и кнопка. По нажатию на кнопку найдите сумму значений абзацев и запишите ее в абзац.

// let paragraphs = document.querySelectorAll('.num');

// let btn = document.querySelector('.btn1');

// let sumP = document.querySelector('.sum');

// function getSum(){
// let sum = 0;

// for(let i=0; i<paragraphs.length; i++){
//     sum += Number(paragraphs[i].innerText);
// }

// sumP.innerText = sum;
// }

// btn.addEventListener('click', getSum);


// Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац.

// let btn = document.querySelector('.btn1');

// let sumP = document.querySelector('.sum');

// btn.addEventListener('click', getSum1);

// function getSum1(){
//     let sum = 0
//     for(let i=1; i<=100; i++){
//         sum+=i;
//     }
//     sumP.innerText = sum;
// }


// Даны абзацы, кнопка и див. По нажатию на кнопку найдите количество абзацев и выведите это значение в див.


// let button2 = document.querySelector('.btn2');
// let paragraphs = document.querySelectorAll('p');
// let block_count = document.querySelector('.count');

// button2.addEventListener('click', function(){
//     block_count.innerText = paragraphs.length;
// })

// Даны пустые абзацы и кнопка. По нажатию на кнопку заполните абзацы числами по порядку.

// let button3 = document.querySelector('.btn3');
// let paragraphs = document.querySelectorAll('p');

// button3.addEventListener('click', function(){
//     for(let i=0; i<paragraphs.length; i++){
//         paragraphs[i].innerText = i+1;
//     }
// })


// Дана ссылка, абзац и кнопка. По нажатию на кнопку запишите href ссылки в текст абзаца.

// let button4 = document.querySelector('.btn4');

// let link1 = document.querySelector('.link1');

// let paragraph_href = document.querySelector('.link_href');

// button4.addEventListener('click', function(){
//     paragraph_href.innerText = link1.getAttribute('href');
// })

// Даны ссылки и кнопка. По нажатию на кнопку получите массив значений атрибута href ссылок и выведите в консоль.

// let links = document.querySelectorAll('a');
// let button5 = document.querySelector('.btn5');

// button5.addEventListener('click', function(){
//     let href_array = [];
//     for(let i=0; i<links.length; i++){
//         href_array.push(links[i].getAttribute('href'))
//     }
//     console.log(href_array);
// })

// Создать кнопку. При клике на нее создать новый элемент (например, параграф). 
// При повторном клике на кнопку удалять последний созданный элемент.

// let button6 = document.createElement('button');
// button6.innerText = 'Create paragraph';

// document.body.append(button6);

// let new_paragraph = '';

// button6.addEventListener('click', function(){
//     if(new_paragraph==''){
//         new_paragraph = document.createElement('p');
//         new_paragraph.innerText = 'New paragraph';
//         document.body.append(new_paragraph);
//     }
//     else{
//         new_paragraph.remove();
//         new_paragraph = '';
//     }
// })

// Создать кнопку. При клике на нее создавать список элементов (например, список ul с несколькими пунктами li). 
// При повторном клике на кнопку удалять весь список.

// let button7 = document.createElement('button');
// button7.innerText = 'Create list';
// document.body.append(button7);
// let listCreated = false;
// let ul = '';
// button7.addEventListener('click', function(){
//     if(listCreated==false){
//         ul = document.createElement('ul');
//         for(let i=0; i<5; i++){
//             let li = document.createElement('li');
//             li.innerText = `Element ${i+1}`;
//             ul.append(li);
//         }
//         document.body.append(ul);
//         listCreated = true;
//     }
//     else{
//         ul.remove();
//         listCreated = false;
//     }
// })


// Создать блок. При наведении на блок добавлять в него дополнительный элемент 
// (например, изображение), который исчезает при уводе мыши.

let block1 = document.createElement('div');
block1.innerText = 'Block 1';
document.body.append(block1);

block1.addEventListener('mouseover', function(){
    let img = document.createElement('img');
    img.setAttribute('src', 'https://via.placeholder.com/150');
    block1.append(img)

    block1.addEventListener('mouseout', function(){
        img.remove();
    })
})

