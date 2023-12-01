// ==================== 1.  ==================== 
const pElem = document.createElement("p")
const pElem_2 = document.createElement("p")
pElem.innerText = "p 1"
pElem_2.innerText = "p 2"
document.body.append(pElem, pElem_2)
// appendChild добавляет всего лишь один элемент и возвращает его
document.body.appendChild(pElem)
// append добавляет несколько элементов и ничего не возвращает

// prepend
// after
// before


// ==================== 2.  ==================== 

// 'beforebegin': до самого element (до открывающего тега).
// 'afterbegin': сразу после открывающего тега element (перед первым потомком).
// 'beforeend': сразу перед закрывающим тегом element (после последнего потомка).
// 'afterend': после element (после закрывающего тега).
const divBlock = document.querySelector(".block")

const name = "<h1>John</h1>" // xss
divBlock.insertAdjacentHTML("beforeend", `<p class="inner">${name}</p>`)
// insertAdjacentHTML
// первым параметром местоположение элемента
// вторым текст который в итоге превратится в HTML

divBlock.insertAdjacentText("afterbegin", '<div class="inner">Inner</div>')
// insertAdjacentText
// первым параметром местоположение элемента
// вторым текст который браузер покажет как обычный текст

const pElem_3 = document.createElement("p")
pElem_3.innerText = "p 3"
divBlock.insertAdjacentElement("afterend", pElem_3)
// insertAdjacentElement
// первым параметром местоположение элемента
// вторым элемент созданный с помощью createElement

// ==================== 3.  ==================== 
document.querySelector("a").addEventListener("click", function(e) {
   e.preventDefault() 
})
document.querySelector("a").style.fontSize = "32px"



// ==================== Gallery  ==================== 
let images = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
    "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    "https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700265600&semt=ais",
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701302400&semt=sph",
    "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-simon-berger-1266810.jpg&fm=jpg",
    "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU",
    "https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=",
    "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg",
    "https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
  ]
  let activeImageIndex = -1 // здесь храним индекс активной картинки
  // [Самостоятельно] Создайте функцию createThumbnailsContainer, которая 
  //создает элемент div для изображений, добавляет класс, добавляет его в 
  //тело документа и возвращает этот элемент.
  // createThumbnailsContainer() => <div class="images_thumbnails"></div>
  function createThumbnailsContainer() {
    const thumbnailsContainer = document.createElement("div") // <div></div>
    thumbnailsContainer.classList.add("images_thumbnails") // <div class="images_thumbnails"></div>
    document.body.append(thumbnailsContainer)
    return thumbnailsContainer
}

  
// ==================== Задание 1  ==================== 
// Создайте функцию createImgThumbnail, которая принимает один аргумент 
// - ссылку на изображение, создает элемент div, содержащий изображение 
// с заданным источником и возвращает его.
// createImgThumbnail(src) => 
// <div>
//     <img src="src" alt="thumbnail">
// </div>
function createImgThumbnail(src) {
    const imgBlock = document.createElement("div")
    const thumbnailImg = document.createElement("img")
    thumbnailImg.setAttribute("src", src)
    thumbnailImg.setAttribute("alt", "thumbnail")
    imgBlock.append(thumbnailImg)
    return imgBlock
}
  

// ==================== Задание 2  ==================== 
// Создайте функцию initializeThumbnails, которая принимает два аргумента, 
// массив ссылок на изображения и элемент div для изображений, получаемый с 
// помощью createThumbnailsContainer, потом заполняет этот див элементами изображения, 
// используя createImgThumbnail.
// initializeThumbnails(srcArray, thumbnailsContainer)
// на основе ссылок из srcArray с помощью функции createImgThumbnail создать контейнер 
// картинок
// контейнер картинок после каждого создания добавить в thumbnailsContainer
function initializeThumbnails(srcArray, thumbnailsContainer) {
    for(let i = 0; i < srcArray.length; i++) {
      // [Самостоятельно] Модифицируйте функцию initializeThumbnails так, 
      // чтобы при клике по элементу изображения вызывалась функция setActiveImage 
      // со ссылкой той картинки, на которую нажали.
      const thumbnailCard = createImgThumbnail(srcArray[i])
      thumbnailCard.addEventListener("click", function() {
        activeImageIndex = i // меняем индекс активной картинки на ту на которую 
                            // нажал пользователь
        setActiveImage(srcArray[i])
      })
      thumbnailsContainer.append(thumbnailCard)
    }
}


// ==================== Задание 3  ==================== 
// Создайте функцию setActiveImage, которая в параметрах получает ссылку 
// на картинку, создает контейнер активного изображения и добавляет в DOM.
// setActiveImage(src)
// <div class="active_image_container">
//  <img src="src" alt="active image">
// </div>
function setActiveImage(src) {
    unsetActiveImage()   // перед назначением активного изображения 
                        // убираем старый контейнер чтобы 
                        // не было наложения друг на друга
    const activeImgDiv = document.createElement("div")
    activeImgDiv.classList.add("active_image_container")
    const activeImg = document.createElement("img")
    activeImg.setAttribute("src", src)
    activeImg.setAttribute("alt", "active image")
    activeImgDiv.append(activeImg)
    document.body.appendChild(activeImgDiv)
}


// ==================== Задание 4  ====================
// Создайте функцию unsetActiveImage, которая получает из DOM и 
// удаляет элемент активного изображения.
function unsetActiveImage() {
    const activeImgDiv = document.querySelector(".active_image_container")
    if(activeImgDiv) { // если этот контейнер существует то удаляем. Проверка для того чтобы не получить ошибку
      activeImgDiv.remove()
    }
}
  

// ==================== Задание 5  ====================
// Создайте функции nextImage и prevImage, которые будут переключать активную картинку.
// ["img1", "img2", "img3"] // 0 -1 
function nextImage() {
    if(activeImageIndex < 0) { // если значение -1 значит не выбрана ни одна картинка
      return // выходим из функции
    }
  
    activeImageIndex = activeImageIndex + 1 // берем индекс след. элемента
    if(activeImageIndex >= images.length) { // если индекс выходит за пределы массива 
                                            // с правой стороны то начинаем с первого элемента
      activeImageIndex = 0
    }
    setActiveImage(images[activeImageIndex])
}
  
function prevImage() {
    if(activeImageIndex < 0) {// если значение -1 значит не выбрана ни одна картинка
      return // выходим из функции
    }
  
    activeImageIndex = activeImageIndex - 1 // берем индекс пред. элемента
    if(activeImageIndex < 0) { // если индекс выходит за пределы массива с левой стороны то начинаем с последнего элемента
      activeImageIndex = images.length - 1
    }
    setActiveImage(images[activeImageIndex])
}


// ==================== Задание 6  ====================
// При нажатии клавиши Esc вызвать функцию unsetActiveImage, 
// нажатии стрелки вправо - nextImage, влево - prevImage.
// keydown событие при нажатии клавиш
document.addEventListener("keydown", function(e) {
    // e.key это название клавишы
    if (e.key === "Escape") {
      activeImageIndex = -1 // при выключении активной картинки активный 
                            // индекс возвращаем в состояние -1
      unsetActiveImage()
    }
    if (e.key === "ArrowLeft") {
      prevImage()
    }
    if (e.key === "ArrowRight") {
      nextImage()
    }
})
  
// получаем контейнер для галерии
let thumbnailsContainer = createThumbnailsContainer() 
// запускам функцию иницализации программы со ссылками на картинки и контейнером галерии
initializeThumbnails(images, thumbnailsContainer) 