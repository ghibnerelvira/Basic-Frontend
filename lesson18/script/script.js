// []
// {}

let box = document.querySelector('div');
console.log(box.classList); //DoMTokenList

console.log(box.className); // возврашает 'string class list'
box.className = 'box1'; // изменяется значение
// console.log(box.getAttribute('class'));

// box.classList.add
// box.classList.remove 
// box.classList.toggle
// box.classList.contains('className'); -> true or false
// box.classList.replace('oldclass', 'newclass'); -> замена

// box.style.backgroundColor = 'grey';



// ---------- Practice 1 ----------
// Реализовать 10 карточек с числами от 0 до 9 и при нажатии
// на какую-либо карточку присвоить ей класс active. 
// В классе  active должны быть стили, которые меняют цвет текста 
// и  цвет заднего фона местами. 
// card.classList.add('active'); -> card.classList.toggle('active');
// Доработать прошлый скрипт таким образом, 
// чтобы при  повторном нажатии класс active удалялся (через classList).

document.addEventListener('DOMContentLoaded', function () {
    let cardsContainer = document.getElementById('cards-container');
  
    // Создаем 10 карточек с числами от 0 до 9
    for (let i = 0; i < 10; i++) {
      let card = document.createElement('div');
      card.className = 'card'; // document.body.append(card);
      card.innerText = i;
      
      // Добавляем обработчик события для клика на карточку
      card.addEventListener('click', function () {
        
        // Переключаем класс 'active' для текущей карточки
        card.classList.toggle('active');
      });
  
      // Добавляем карточку в контейнер
      cardsContainer.appendChild(card);
    }
  });

// Вариант 2 (всё в одном)
// ---> style не в css
//   document.addEventListener('DOMContentLoaded', function () {
//     let cardsContainer = document.getElementById('cards-container');
  
//     // Создаем 10 карточек с числами от 0 до 9
//     for (let i = 0; i < 10; i++) {
//       let card = document.createElement('div');
//       card.className = 'card'; // document.body.append(card);
//       card.innerText = i;

//    card.style.color= 'blue';
//    card.style.backgroundColor = 'lightblue';
//    card.style.marginBottom = "10px";
//    card.style.width= ' 200px';

//  card.addEventListener('click', function () {
//  let temp_color = card.style.color;
//  let temp_back_color = card.style.background;
//  -> не нужно ( card.classList.add('active'); )
//  card.style.color = temp_back_color;
//  card.style.backgroundColor = temp_color;
//  });

// ---------- Practice 2 ----------
// Создать квадратный div с рамкой и при наведении курсора 
// на него цвет div-а поменять на введённый пользователем цвет 
// (все шаги сделать с помощью JS).

let block1 = document.createElement('div');
block1.style.border = '5px solid blue';
block1.style.width = '200px';
block1.style.height = '200px';

document.body.append(block1);

block1.addEventListener('mouseover', function(){
    block1.style.backgroundColor = prompt('enter the color');
});



// ---------- Practice 3 ----------
// Написать цикл, который создает множество div-ов c  
// цветами от rgb(128, 128, 0) до rgb(128, 128, 255). 
// У дивов  цвет должен меняться с шагом 5.

for(let i=0; i<=255; i+=5){ // i+=5 -> Увеличиваем значение цвета с шагом 5
    let colored_block = document.createElement('div');
    colored_block.style.width = '100%';
    colored_block.style.height = '50px';
    colored_block.style.backgroundColor = `rgb(128, 128, ${i})`;
    // colored_block.style.marginBottom = '10px'; // ростояние
    document.body.append(colored_block);
};


// ---------- Practice 4 ----------
// Есть массив из объектов. Каждый объект имеет свойства en и ru. 
// В свойстве en написано слово на английском, а в свойстве ru на русском. 
// Необходимо реализовать карточки, при нажатии на которые слова с русского 
// меняются на английский и обратно.Подсказка. В каждой карточке должно быть 
// два параграфа. В одном написано на русском, а во втором на английском и при 
// нажатии на карточку один параграф получает класс с display none а второй 
// с display block.

let array = [
    {
        en: 'banana',
        ru: 'банан'
    },
    {
        en: 'apple',
        ru: 'яблоко'
    }, 
    {
        en: 'grape',
        ru: 'виноград'
    }, 
    {
        en: 'pomegrante',
        ru: 'гранат'
    }
];

// 1. Вариант: en -> ru 
for(let i=0; i<array.length; i++){
    let card = document.createElement('div');

    let ru_p = document.createElement('p');
    ru_p.innerText = array[i].ru;
    ru_p.style.display = 'none'; // скрытие 

    let en_p = document.createElement('p');
    en_p.innerText = array[i].en;
    

    card.append(ru_p, en_p);

    card.addEventListener('click', function(){ // при нажатие показать скрытое и обратно
        if(ru_p.style.display !== 'none'){
            ru_p.style.display = 'none';
            en_p.style.display = 'block';
        }
        else{
            en_p.style.display = 'none';
            ru_p.style.display = 'block';
        }
    })

    document.body.append(card);
}

// 2. Вариант: ru -> en 
for(let i=0; i<array.length; i++){
    let card = document.createElement('div');

    let ru_p = document.createElement('p');
    ru_p.innerText = array[i].ru;

    let en_p = document.createElement('p');
    en_p.innerText = array[i].en;
    en_p.style.display = 'none'; // скрытие
    

    card.append(ru_p, en_p);

    card.addEventListener('click', function(){ // при нажатие показать скрытое и обратно
        if(ru_p.style.display !== 'none'){
            ru_p.style.display = 'none';
            en_p.style.display = 'block';
        }
        else{
            en_p.style.display = 'none';
            ru_p.style.display = 'block';
        }
    })

    document.body.append(card);
}


// <!-- Practice 2  -->
// ==================  event ==================

let btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', function(event){
    console.log(event.type); // тип события возврашает
    console.log(event.currentTarget);
    console.log(event.clientX);
    console.log(event.clientY);
})

// <!-- Practice 3  -->
// Создать форму, при submit 
// которой данные из формы выводятся в консоль.
// не остается в consol так как браузер обнавляется при каждой отправки на сервир

let form = document.querySelector('form');
let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname');

form.addEventListener('submit', function(event){
    event.preventDefault(); // для того чтобы страница не обнавлялось
    console.log(fname.value);
    console.log(lname.value);
})


// <!-- Practice 4  -->
let link = document.querySelector('a');

link.addEventListener('click', function(event){
    // отменяем действие браузера (открытие ссылки)
    event.preventDefault();
})

