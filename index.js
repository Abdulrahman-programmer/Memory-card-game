const container = document.getElementById("container")
const wrap = document.getElementById("wrapper");
const front = document.querySelectorAll('.front_side');
const back = document.querySelectorAll('.back_side');
const btn = document.getElementById("game-btn");
const instruction = document.getElementById("instruction");
const SC = document.getElementById("score");
const Level_op = document.getElementById("dropdown");
const best_score_display = document.getElementById("best_score");
const play_again = document.getElementById("play-again-btn")
const end_page = document.getElementById("end-page")
let score = 0;
let High_score = -999;
let match_counter = 0;
let Total_match = 8;
let pre_box = "", current_box = "";
let pre = "", current = "";

function displayBestscore(level) {
    let data = localStorage.getItem(`Best-score-${level}`)
    data = JSON.parse(data);
    best_score_display.innerHTML = data[2]
    High_score = data[2]   
}

function images_combination(level) {
    let images_combination = [];
    if (level == "easy") {
        images_combination = [
            `<img src="Img/img-1.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-2.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-3.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-4.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-1.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-2.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-3.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-4.png" alt="" class="front_side"></img>`,
        ]
    }
    else if (level == "medium") {
        images_combination = [
            `<img src="Img/img-1.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-2.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-3.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-4.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-5.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-6.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-7.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-8.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-1.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-2.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-3.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-4.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-5.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-6.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-7.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-8.png" alt="" class="front_side"></img>`,
        ]
    }
    else if (level == "hard") {
        images_combination = [
            `<img src="Img/img-1.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-2.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-3.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-4.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-5.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-6.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-7.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-8.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-9.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-10.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-11.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-12.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-13.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-14.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-15.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-16.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-17.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-18.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-1.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-2.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-3.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-4.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-5.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-6.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-7.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-8.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-9.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-10.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-11.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-12.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-13.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-14.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-15.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-16.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-17.png" alt="" class="front_side"></img>`,
            `<img src="Img/img-18.png" alt="" class="front_side"></img>`,
        ]
    }
    return images_combination;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function set_img(cards, images) {
    let i = 0
    shuffleArray(images)
    cards.forEach(card => {
        card.innerHTML += images[i];
        i++
    });
}
function hide_img(box_A, box_B) {
    const frontSide1 = box_A.querySelector('.front_side');
    const backSide1 = box_A.querySelector('.back_side');
    const frontSide2 = box_B.querySelector('.front_side');
    const backSide2 = box_B.querySelector('.back_side');
    frontSide1.classList.remove('visible');
    frontSide1.classList.add('hidden');
    backSide1.classList.remove('hidden');
    backSide1.classList.add('visible');
    frontSide2.classList.remove('visible');
    frontSide2.classList.add('hidden');
    backSide2.classList.remove('hidden');
    backSide2.classList.add('visible');
}

function play_game(cards, level, Text) {
    cards.forEach(card => {
        card.addEventListener('click', () => {
            pre_box = current_box;
            current_box = card;
            pre = current;
            const frontImage = card.querySelector('.front_side');
            current = frontImage.getAttribute('src').split('/').pop();
            const frontSide1 = card.querySelector('.front_side');
            const backSide1 = card.querySelector('.back_side');

            if (frontSide1.classList.contains('hidden')) {
                frontSide1.classList.remove('hidden');
                frontSide1.classList.add('visible');
                backSide1.classList.remove('visible');
                backSide1.classList.add('hidden');
            } else {
                frontSide1.classList.remove('visible');
                frontSide1.classList.add('hidden');
                backSide1.classList.remove('hidden');
                backSide1.classList.add('visible');
            }
            if (pre && current_box !== pre_box) {
                if (current === pre) {
                    score += 2;
                    match_counter++;
                    SC.innerHTML = score;
                    pre_box.classList.add('matched');
                    current_box.classList.add('matched');

                } else {
                    score -= 1;
                    SC.innerHTML = score;

                    setTimeout(() => {
                        hide_img(pre_box, current_box);
                    }, 500);
                }

                pre = null;
                current = null;
            }
            set_high_score(level, Text);
        });
    });
}
function setup_level(level) {
    let element = `<div class="cards">
                <img src="Img/que_icon.svg" alt="" class="back_side">
            </div>`
    const display_level = document.getElementById("level_display");
    wrap.innerHTML = "";
    wrap.classList = ""
   displayBestscore(level)

    if (level == "easy") {
        for (let i = 0; i < 8; i++) {
            wrap.innerHTML += element;

        }
        wrap.classList.add("easy-level")
        container.style.height = "250px";
        wrap.style.marginTop = "3%";
        Total_match = 4;
        display_level.innerHTML = "EASY";
    }
    else if (level == "medium") {
        for (let i = 0; i < 16; i++) {
            wrap.innerHTML += element;
        }
        wrap.classList.add("medium-level")
        wrap.style.marginTop = "5%"
        container.style.height = "500px"
        Total_match = 8;
        display_level.innerHTML = "MEDIUM";
    }
    else if (level == "hard") {
        for (let i = 0; i < 36; i++) {
            wrap.innerHTML += element;
        }
        wrap.classList.add("hard-level")
        container.style.height = "500px"
        wrap.style.marginTop = "5%"
        Total_match = 18;
        display_level.innerHTML = "HARD";
    }
    const cards = document.querySelectorAll('.cards');
    set_img(cards, images_combination(level));
    return cards;
}

function Set_game(cards) {
    cards.forEach(card => {
        const frontSide1 = card.querySelector('.front_side');
        const backSide1 = card.querySelector('.back_side');
        frontSide1.classList.remove('visible');
        frontSide1.classList.add('hidden');
        backSide1.classList.remove('hidden');
        backSide1.classList.add('visible');
    })
}

function set_high_score(level, text) {

    if (match_counter === Total_match) {
        if (score > High_score) {
            best_score_display.innerHTML = score;
            High_score = score;
            localStorage.removeItem(`Best-score-${level}`)
            localStorage.setItem(`Best-score-${level}`, JSON.stringify([text, level, High_score]));
        }
        setTimeout(() => {
          end_page.style.display = "block"
        end_game(level);  
        }, 700);
        
    }
}
function end_game(level) {
    const endBs = document.getElementById("end-bestscore") 
    const name = document.getElementById("name")
    const score_end = document.getElementById("end-score")

    let data = localStorage.getItem(`Best-score-${level}`)
    data = JSON.parse(data);
    endBs.innerHTML ="Best Score : " + data[2];
    name.innerHTML = "by " + data[0].toUpperCase();
    score_end.innerHTML = "Your Score : " + score;

    play_again.addEventListener("click",function (){
        location.reload();
        return;
    })

}
setup_level("easy");
Level_op.addEventListener("change", (event) => {
    setup_level(event.target.value)
})

btn.addEventListener("click",
    function () {
        const inputText = document.getElementById('text_input').value;
        let level = Level_op.value;
        const cards = setup_level(level);
        if (!inputText) {
            alert("Please enter your name to start the game.");
            return;
        }

        instruction.classList.add('reduce');
        
        setTimeout(() => {
            Set_game(cards)
            play_game(cards, level, inputText)
        }, 10000);


    }
);



