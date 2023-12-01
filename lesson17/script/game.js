function start_game() {
    document.title = `Score: ${score}`;
    object.classList.toggle('is-moving');

    /* для проверки console.log('start_game() works');*/
    
}

function finish_game() {
    /* для проверки console.log('end_game() works'); */
    alert(`You lose. Score ${score}`);
    score = 0;
}

function hit() {
    score++;
    document.title = `Score: ${score}`;

    /* при попдани исчезает и наченает заного*/ 
    object.classList.remove('is-moving');
    void object.offsetWidth;
    object.classList.add('is-moving');
    /* для проверки console.log('hit() works'); */

    change_object_size();
    change_object_background();
    change_object_offset();

    hit_sound.currentTime = 0;
    hit_sound.play(); // play `miss` sound
}

// случайный размер по умолчанию 
function change_object_size() {
    const random_size = 20 + Math.random() * 40;
    object.style.width =  `${random_size}px`;
}

// случайный цвет
function change_object_background() {
    const colors = ['red', 'blue', 'orange', 'purple'];
    const random_index = Math.round(Math.random() * colors.length);
    object.style.background = colors[random_index];
}

function change_object_offset() {
    const random_offset = Math.random() * 340;
    object.style.left = `${random_offset}px`;
}

function miss(event) {
    if (event.target.id == "area") {
        score--;
        document.title = `Score: ${score}`;
        /* console.log('miss() works'); */

        miss_sound.currentTime = 0;
        miss_sound.play(); // play `miss` sound
    
        if (score <= 0) {
          finish_game();
        }
    }
}


let score = 0;
let object = document.querySelector('#object');

// подключить звуковые дорожки
const hit_sound = new Audio("sounds/sounds_hit.wav");
const miss_sound = new Audio("sounds/sounds_miss.wav");
