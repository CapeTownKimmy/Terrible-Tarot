const cardContainer = document.getElementById('cardGridContainer');
const cards = cardContainer.querySelectorAll('.card');
const textContainer = document.getElementById('textContainer');
const resetBtn = document.getElementById('resetBtn');
const bodyText = document.querySelector('.bodyText');
const displayMessage = document.getElementById('messageContainer');
const flipCardContainer = document.getElementById('threeCardContainer');
const flipCard = document.querySelectorAll('.flipCard');


//Fortune images for back face of cards//

const imageZero = document.querySelector('.imageZero');
const cardTextZero = document.querySelector('.textZero');
const fortuneZero = document.querySelector('.fortuneZero');

const imageOne = document.querySelector('.imageOne');
const cardTextOne = document.querySelector('.textOne');
const fortuneOne = document.querySelector('.fortuneOne');

const imageTwo= document.querySelector('.imageTwo');
const cardTextTwo = document.querySelector('.textTwo');
const fortuneTwo = document.querySelector('.fortuneTwo');

const greeting = 'Welcome my unfortunate friend... you have chosen: ';


// Fortune Maker Text - Card one, card two and card three//
const binoculars = [
    'The Binoculars. Nice from far but far from nice! Maybe ',
    'Sentence 02',
    'Sentence 03'
];
const coffeeCup = [
    'The Coffee Cup. More espresso, less depresso! Why not try',
    'Sentence 02',
    'Sentence 03'
]
const lobster = [
    "The Lobster. Dont be so Shellfish, start",
    'Sentence 02',
    'Sentence 03'
];
const mirror = [
    'The Mirror. Mirror, Mirror, on the wall. What the hell happened! Expect some',
    'Sentence 02',
    'Sentence 03'
]
const skull = [
    'The Skull. Bone Jour! There is a holiday on the horizon. Perhaps',
    'Sentence 02',
    'Sentence 03'
];
const hotAirBalloon = [
    'The Hot-Air Balloon. You are full of hot air with your head in the clouds, Maybe ',
    'Sentence 02',
    'Sentence 03'
]
const stag = [
    'The Stag. You are staggeringly vain, perhaps',
    'Sentence 02',
    'Sentence 03'
];
const microscope = [
    'The Microscope. Your life is all out of focus! Soon ',
    'Sentence 02',
    'Sentence 03'
]
const musician = [
    "The Musician, You're a treble maker! There are",
    'Sentence 02',
    'Sentence 03'
];
const wasp = [
    'The Wasp. You are nothing more than a wanna-bee! Save yourself from',
    'Sentence 02',
    'Sentence 03'
]




// Show which cards user has selected on a click //
cards.forEach(element => {
    element.addEventListener('click', changeColor)
})

function changeColor(e) {
    e.target.classList.toggle('selected')
    cardCounter()
}



// Count how many cards have been selected and make submit button visible//
function cardCounter(){
    let maxClicked = cardContainer.querySelectorAll('.card.selected').length;
    if(maxClicked >= 0 && maxClicked < 3) {
        return   
    } else {
        setTimeout(showFlipCards, 500)
    }
}



// Show reset Button - once selection made //
function showFlipCards() {
    cards.forEach(element => element.classList.add('hideMe'));
    resetBtn.style.display = 'block';
    bodyText.textContent = 'Your misfortune awaits...';
    // flipCardContainer.style.visibility = 'visible';
    showCards();
    textContainer.style.gap = '22rem'
    cards.forEach(element => element.style.pointerEvents = 'none');
    showFortuneBox()
}



// reset cards on click //
resetBtn.addEventListener('click', refresh);

function refresh(e) {
    cards.forEach(element => {
        element.classList.remove('hideMe', 'selected');
        displayMessage.style.display = 'none';
        cards.forEach(element => element.style.pointerEvents = 'auto');
        flipCardContainer.style.visibility = 'hidden';
        resetRotate();
        restoreBtnAndText();
    })
}
function restoreBtnAndText() {
    resetBtn.style.display = 'none';
    bodyText.textContent = 'Pick 3 cards to know your unfortunate future';
    textContainer.style.gap = '8rem;';
}


// Show message box for display of fortune - once selection made //
function showFortuneBox(){
        displayMessage.style.display = 'block';
}

function showCards() {
    flipCardContainer.style.visibility = 'visible';
    flipOneAfterAnother()
}
function flipOneAfterAnother() {
    setTimeout(() => {flipCard[0].style.transform = 'rotateY(180deg)'}, 500);
    setTimeout(() => {flipCard[1].style.transform = 'rotateY(180deg)'}, 1300);
    setTimeout(() => {flipCard[2].style.transform = 'rotateY(180deg)'}, 2100);
}
function resetRotate () {
    flipCard[0].style.transform = 'rotateY(0deg)';
    flipCard[1].style.transform = 'rotateY(0deg)';
    flipCard[2].style.transform = 'rotateY(0deg)';
}

// Randomly select a cards for index 0//
let randomIndexZero = Math.floor((Math.random() * 8 + 1));

switch(randomIndexZero) {
    case 0:
        imageZero.style.backgroundImage = 'url(./images/binoculars.jpg)';
        cardTextZero.textContent = 'The Binoculars';
        fortuneZero.textContent = greeting + binoculars[0];
        break;
    case 1:
        imageZero.style.backgroundImage = 'url(./images/coffee.jpg)';
        cardTextZero.textContent = 'The Coffee Cup';
        fortuneZero.textContent = greeting + coffeeCup[0];
        break;
    case 2:
        imageZero.style.backgroundImage = 'url(./images/lobster.jpg)';
        cardTextZero.textContent = 'The Lobster';
        fortuneZero.textContent = greeting + lobster[0];
        break;
    case 3:
        imageZero.style.backgroundImage = 'url(./images/mirror.jpg)';
        cardTextZero.textContent = 'The Mirror';
        fortuneZero.textContent = greeting + mirror[0];
        break;
    case 4:
        imageZero.style.backgroundImage = 'url(./images/skull.jpg)';
        cardTextZero.textContent = 'The Skull';
        fortuneZero.textContent = greeting + skull[0];
        break;
    case 5:
        imageZero.style.backgroundImage = 'url(./images/hotAirBalloon.jpg)';
        cardTextZero.textContent = 'The Hot-Air Balloon';
        fortuneZero.textContent = greeting + hotAirBalloon[0];

        break;
    case 6:
        imageZero.style.backgroundImage = 'url(./images/stag.jpg)';
        cardTextZero.textContent = 'The Stag';
        fortuneZero.textContent = greeting + stag[0];
        break;
    case 7:
        imageZero.style.backgroundImage = 'url(./images/microscope02.jpg)';
        cardTextZero.textContent = 'The Microscope';
        fortuneZero.textContent = greeting + microscope[0]
        break;
    case 8:
        imageZero.style.backgroundImage = 'url(./images/musician.jpg)';
        cardTextZero.textContent = 'The Musician';
        fortuneZero.textContent = greeting + musician[0];
        break;
    case 9:
        imageZero.style.backgroundImage = 'url(./images/wasp.jpg)';
        cardTextZero.textContent = 'The Wasp';
        fortuneZero.textContent = greeting + wasp[0];
        break;
}



// Random selection of card two //
let randomIndexOne = Math.floor((Math.random() * 8 + 1));

switch(randomIndexOne) {
    case 0:
        imageOne.style.backgroundImage = 'url(./images/binoculars.jpg)';
        cardTextOne.textContent = 'The Binoculars';
        
        break;
    case 1:
        imageOne.style.backgroundImage = 'url(./images/coffee.jpg)';
        cardTextOne.textContent = 'The Coffee Cup';
        
        break;
    case 2:
        imageOne.style.backgroundImage = 'url(./images/lobster.jpg)';
        cardTextOne.textContent = 'The Lobster';
        
        break;
    case 3:
        imageOne.style.backgroundImage = 'url(./images/mirror.jpg)';
        cardTextOne.textContent = 'The Mirror';
        
        break;
    case 4:
        imageOne.style.backgroundImage = 'url(./images/skull.jpg)';
        cardTextOne.textContent = 'The Skull';
        
        break;
    case 5:
        imageOne.style.backgroundImage = 'url(./images/hotAirBalloon.jpg)';
        cardTextOne.textContent = 'The Hot-Air Balloon';
        

        break;
    case 6:
        imageOne.style.backgroundImage = 'url(./images/stag.jpg)';
        cardTextOne.textContent = 'The Stag';
        
        break;
    case 7:
        imageOne.style.backgroundImage = 'url(./images/microscope02.jpg)';
        cardTextOne.textContent = 'The Microscope';
        
        break;
    case 8:
        imageOne.style.backgroundImage = 'url(./images/musician.jpg)';
        cardTextOne.textContent = 'The Musician';
        
        break;
    case 9:
        imageOne.style.backgroundImage = 'url(./images/wasp.jpg)';
        cardTextOne.textContent = 'The Wasp';
        
        break;
}


// Random selection of card three //
let randomIndexTwo = Math.floor((Math.random() * 8 + 1));

switch(randomIndexTwo) {
    case 0:
        imageTwo.style.backgroundImage = 'url(./images/binoculars.jpg)';
        cardTextTwo.textContent = 'The Binoculars';
        
        break;
    case 1:
        imageTwo.style.backgroundImage = 'url(./images/coffee.jpg)';
        cardTextTwo.textContent = 'The Coffee Cup';
        
        break;
    case 2:
        imageTwo.style.backgroundImage = 'url(./images/lobster.jpg)';
        cardTextTwo.textContent = 'The Lobster';
        
        break;
    case 3:
        imageTwo.style.backgroundImage = 'url(./images/mirror.jpg)';
        cardTextTwo.textContent = 'The Mirror';
        
        break;
    case 4:
        imageOne.style.backgroundImage = 'url(./images/skull.jpg)';
        cardTextTwo.textContent = 'The Skull';
        
        break;
    case 5:
        imageTwo.style.backgroundImage = 'url(./images/hotAirBalloon.jpg)';
        cardTextTwo.textContent = 'The Hot-Air Balloon';
        

        break;
    case 6:
        imageTwo.style.backgroundImage = 'url(./images/stag.jpg)';
        cardTextTwo.textContent = 'The Stag';
        
        break;
    case 7:
        imageTwo.style.backgroundImage = 'url(./images/microscope02.jpg)';
        cardTextTwo.textContent = 'The Microscope';
        
        break;
    case 8:
        imageTwo.style.backgroundImage = 'url(./images/musician.jpg)';
        cardTextTwo.textContent = 'The Musician';
        
        break;
    case 9:
        imageTwo.style.backgroundImage = 'url(./images/wasp.jpg)';
        cardTextTwo.textContent = 'The Wasp';
        
        break;
}