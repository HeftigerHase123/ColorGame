//ChatGPT generierte Messages
const messages = [
    "Well done!",
    "Nice work!",
    "Good job!",
    "Great!",
    "Nicely done!",
    "Nailed it!",
    "You got it!",
    "Spot on!",
    "Clean!",
    "Too easy!",
    "Perfect!",
    "Flawless!",
    "Outstanding!",
    "Impressive!",
    "That’s how it’s done!",
    "Level cleared!",
    "Objective complete!",
    "Mission accomplished!",
    "Critical success!",
    "Combo!",
    "Easy win!",
    "Too smooth!",
    "You're on fire!",
    "No mistakes!",
    "Built different!"
];

//Methode von ChatGTP
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Methode von ChatGPT
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `RGB(${r}, ${g}, ${b})`;
}

//Methode von ChatGPT
function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

async function checkColorCode(target_btn) {
    const colorSquare = getComputedStyle(target_btn).backgroundColor;
    const colorCode = document.querySelector(".head h2").textContent;
    const popup_content = document.querySelector(".popup-content p");

    if (colorCode.toLowerCase() === colorSquare.toLowerCase()) {
        confetti();
        popup.style.display = "block";
        const message = messages[randomNumber(messages.length - 1)];
        popup_content.textContent = message;
    }
}

function getNewColors() {
    const ColerCodeList = [];
    const articles = document.querySelectorAll(".color-square-container article");
    articles.forEach(article => {
        const color = randomColor();
        article.style.backgroundColor = color;
        ColerCodeList.push(color);
        article.addEventListener("click", () => {
            checkColorCode(article);
        })
    })
    const displayRGBcode = document.querySelector(".head h2");
    displayRGBcode.innerHTML = "";
    const radio = document.querySelector("#easy");
    const radioHard = document.querySelector("#hard");
    radio.checked
        ? displayRGBcode.textContent = ColerCodeList[randomNumber(3)]
        : radioHard.checked
            ? displayRGBcode.textContent = ColerCodeList[randomNumber(5)]
            : displayRGBcode.textContent = ColerCodeList[randomNumber(7)];
}

document.getElementById("easy").checked = true;
createArticle(4);

const btn = document.getElementById("getNewColor-btn");
const radio = document.querySelector("#easy");
const color_box = document.querySelector(".color-square-container div");
const radioHard = document.querySelector("#hard");
const radioUltra = document.querySelector("#ultra");
const popup = document.getElementById("popup");
const btn_next = document.querySelector(".next-btn");
const btn_menu = document.querySelector("#goToMenu");

btn.addEventListener("click", () => {
    getNewColors();
})

function createArticle(amount) {
    for (let i = 0; i < amount; i++) {
        const article = document.createElement("article");
        const section = document.querySelector(".color-square-container div");
        section.appendChild(article);
    }
    getNewColors();
}

radio.addEventListener("change", () => {
    if (radio.checked) {
        color_box.classList.add("easy");
        color_box.classList.remove("hard");
        color_box.classList.remove("ultra");
        color_box.innerHTML = "";
        createArticle(4);
    }
})

radioHard.addEventListener("change", () => {
    if (radioHard.checked) {
        color_box.classList.remove("easy");
        color_box.classList.remove("ultra");
        color_box.classList.add("hard");
        color_box.innerHTML = "";
        createArticle(6);
    }
})

radioUltra.addEventListener("change", () => {
    if (radioUltra.checked) {
        color_box.classList.remove("easy");
        color_box.classList.remove("hard");
        color_box.classList.add("ultra");
        color_box.innerHTML = "";
        createArticle(8);
    }
})


btn_next.addEventListener("click", () => {
    getNewColors();
    popup.style.display = "none";
})