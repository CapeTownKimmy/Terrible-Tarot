const cardContainer = document.getElementById('cardGridContainer');
const cards = cardContainer.querySelectorAll('.card');
const textContainer = document.getElementById('textContainer');
const resetBtn = document.getElementById('resetBtn');
const bodyText = document.querySelector('.bodyText');
const displayMessage = document.getElementById('messageContainer');
const flipCardContainer = document.getElementById('threeCardContainer');
const flipCard = document.querySelectorAll('.flipCard');

const cardSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let firstCardFortune
let middleCardFortune
let lastCardFortune

//Fortune images for back face of cards//

const imageZero = document.querySelector('.imageZero');         // Back face card 1 // 
const cardTextZero = document.querySelector('.textZero');       // Back face card Text //

const imageOne = document.querySelector('.imageOne');           // Back face card 2 // 
const cardTextOne = document.querySelector('.textOne');         // Back face card Text //

const imageTwo= document.querySelector('.imageTwo');            // Back face card 3 // 
const cardTextTwo = document.querySelector('.textTwo');         // Back face card Text //

const fortuneZero = document.querySelector('.fortuneZero');     // Fortune Display - Greeting //
const fortuneOne = document.querySelector('.fortuneOne');       // Fortune Display - Card 1//
const fortuneTwo = document.querySelector('.fortuneTwo');       // Fortune Display - Card 2//
const fortuneThree = document.querySelector('.fortuneThree');   // Fortune Display - Card 3//

const greeting = 'Welcome my unfortunate friend... you have chosen: ';


// Fortune Maker Text - Card one, card two and card three//
const binoculars = [
    'The Binoculars',
    'Nice from far but far from nice!',
    'Yesterday, all my troubles seemed so far away... Look again, you are using your binoculars backwards!',
    'Roses are red... my binoculars are blue. Your blinds are open, someones wahtching you!'
];
const coffeeCup = [
    'The Coffee Cup',
    'More espresso, less depresso!',
    'Better latte than never!',
    'Deja Brew. You will recieve the wrong coffee order again!'
]
const lobster = [
    'The Lobster',
    "Don't be so shellfish. Would it kill you to crack a smile?",
    'Nice to sea you. An old friend is back in town.',
    'When life gives you lemons, order the lobster!'
];
const mirror = [
    'The Mirror',
    'Mirror, Mirror, on the wall. What the hell happened!',
    "Hold a clock to your mirror, it's time for reflection",
    'Objects in the rear view mirror may appear closer than they are... Run! While there is still time!'
]
const skull = [
    'The Skull',
    'Bone Jour! There is a holiday on the horizon.',
    "It's a no-brainer, you've lost your mind!",
    'Bone appetit, enjoy your next meal. It could be your last!'
];
const hotAirBalloon = [
    'The Hot-Air Balloon',
    'Want to hear a balloon joke? Nah, it will probably go over your head!',
    'You are over inflated. Check your ego, amigo!',
    'You are a basket-case! Get your head out of the clouds!'
]
const stag = [
    'The Stag',
    "You are stag-geringly vain, doe not over do it!",
    'Oh deer, what a year!',
    "What is love? Baby don't herd me..."
];
const microscope = [
    'The Microscope',
    'When life gets blurry, adjust your focus!',
    "Hocus, pocus. You've now lost your focus!",
    "It's been scientifically proven that people who have more birthdays live longer. Keep up the good work."
]
const musician = [
    'The Musician',
    "You're a treble maker!",
    'Life without music would b flat! Buy a radio.',
    'Warning! May contain sax and violins!'
];
const wasp = [
    'The Wasp',
    'You are nothing more than a wanna-bee!',
    'To bee or not to bee? Maybe just wing it...',
    'You are my every-sting!'
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

shuffleArr(cardSet);
runDraw();

// Show reset Button - once selection made //
function showFlipCards() {
    cards.forEach(element => element.classList.add('hideMe'));
    resetBtn.style.display = 'block';
    bodyText.textContent = 'Your misfortune awaits...';
    // flipCardContainer.style.visibility = 'visible';
    showCards();
    textContainer.style.gap = '22rem'
    cards.forEach(element => element.style.pointerEvents = 'none');
    showFortuneBox();
    displayFortune();
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
        shuffleArr(cardSet);
        runDraw();
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

// Random numbers and checks for same card draw//

function shuffleArr(arr) {
    let i = 0;
    let j = 0;
    let temp = null;

    for (i = arr.length -1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}


// Find index for random numbers //
function runDraw() {
    drawCardOne();
    drawCardTwo();
    drawCardThree();
}


// Card 1//

function drawCardOne() {

    switch(cardSet[0]) {
        case 0:
            imageZero.style.backgroundImage = 'url(./images/binoculars.jpg)';
            cardTextZero.textContent = 'The Binoculars';
            firstCardFortune = binoculars[1];
            break;
        case 1:
            imageZero.style.backgroundImage = 'url(./images/coffee.jpg)';
            cardTextZero.textContent = 'The Coffee Cup';
            firstCardFortune = coffeeCup[1];
            break;
        case 2:
            imageZero.style.backgroundImage = 'url(./images/lobster.jpg)';
            cardTextZero.textContent = 'The Lobster';
            firstCardFortune = lobster[1];
            break;
        case 3:
            imageZero.style.backgroundImage = 'url(./images/mirror.jpg)';
            cardTextZero.textContent = 'The Mirror';
            firstCardFortune = mirror[1];
            break;
        case 4:
            imageZero.style.backgroundImage = 'url(./images/skull.jpg)';
            cardTextZero.textContent = 'The Skull';
            firstCardFortune = skull[1];
            break;
        case 5:
            imageZero.style.backgroundImage = 'url(./images/hotAirBalloon.jpg)';
            cardTextZero.textContent = 'The Hot-Air Balloon';
            firstCardFortune = hotAirBalloon[1];
            break;
        case 6:
            imageZero.style.backgroundImage = 'url(./images/stag.jpg)';
            cardTextZero.textContent = 'The Stag';
            firstCardFortune = stag[1];
            break;
        case 7:
            imageZero.style.backgroundImage = 'url(./images/microscope02.jpg)';
            cardTextZero.textContent = 'The Microscope';
            firstCardFortune = microscope[1];
            break;
        case 8:
            imageZero.style.backgroundImage = 'url(./images/musician.jpg)';
            cardTextZero.textContent = 'The Musician';
            firstCardFortune = musician[1];
            break;
        case 9:
            imageZero.style.backgroundImage = 'url(./images/wasp.jpg)';
            cardTextZero.textContent = 'The Wasp';
            firstCardFortune = wasp[1];
            break;
    }

}



//Card Two//


function drawCardTwo() {

    switch(cardSet[1]) {
        case 0:
            imageOne.style.backgroundImage = 'url(./images/binoculars.jpg)';
            cardTextOne.textContent = 'The Binoculars';
            middleCardFortune = binoculars[2];
            break;
        case 1:
            imageOne.style.backgroundImage = 'url(./images/coffee.jpg)';
            cardTextOne.textContent = 'The Coffee Cup';
            middleCardFortune = coffeeCup[2];
            break;
        case 2:
            imageOne.style.backgroundImage = 'url(./images/lobster.jpg)';
            cardTextOne.textContent = 'The Lobster';
            middleCardFortune = lobster[2];
            break;
        case 3:
            imageOne.style.backgroundImage = 'url(./images/mirror.jpg)';
            cardTextOne.textContent = 'The Mirror';
            middleCardFortune = mirror[2];
            break;
        case 4:
            imageOne.style.backgroundImage = 'url(./images/skull.jpg)';
            cardTextOne.textContent = 'The Skull';
            middleCardFortune = skull[2];
            break;
        case 5:
            imageOne.style.backgroundImage = 'url(./images/hotAirBalloon.jpg)';
            cardTextOne.textContent = 'The Hot-Air Balloon';
            middleCardFortune = hotAirBalloon[2];
            break;
        case 6:
            imageOne.style.backgroundImage = 'url(./images/stag.jpg)';
            cardTextOne.textContent = 'The Stag';
            middleCardFortune = stag[2];
            break;
        case 7:
            imageOne.style.backgroundImage = 'url(./images/microscope02.jpg)';
            cardTextOne.textContent = 'The Microscope';
            middleCardFortune = microscope[2];
            break;
        case 8:
            imageOne.style.backgroundImage = 'url(./images/musician.jpg)';
            cardTextOne.textContent = 'The Musician';
            middleCardFortune = musician[2];
            break;
        case 9:
            imageOne.style.backgroundImage = 'url(./images/wasp.jpg)';
            cardTextOne.textContent = 'The Wasp';
            middleCardFortune = wasp[2];
            break;
    }
    
}



// Card Three //

function drawCardThree() {

    switch(cardSet[2]) {
        case 0:
            imageTwo.style.backgroundImage = 'url(./images/binoculars.jpg)';
            cardTextTwo.textContent = 'The Binoculars';
            lastCardFortune = binoculars[3];
            break;
        case 1:
            imageTwo.style.backgroundImage = 'url(./images/coffee.jpg)';
            cardTextTwo.textContent = 'The Coffee Cup';
            lastCardFortune = coffeeCup[3];
            break;
        case 2:
            imageTwo.style.backgroundImage = 'url(./images/lobster.jpg)';
            cardTextTwo.textContent = 'The Lobster';
            lastCardFortune = lobster[3];
            break;
        case 3:
            imageTwo.style.backgroundImage = 'url(./images/mirror.jpg)';
            cardTextTwo.textContent = 'The Mirror';
            lastCardFortune = mirror[3];
            break;
        case 4:
            imageTwo.style.backgroundImage = 'url(./images/skull.jpg)';
            cardTextTwo.textContent = 'The Skull';
            lastCardFortune = skull[3];
            break;
        case 5:
            imageTwo.style.backgroundImage = 'url(./images/hotAirBalloon.jpg)';
            cardTextTwo.textContent = 'The Hot-Air Balloon';
            lastCardFortune = hotAirBalloon[3];
            break;
        case 6:
            imageTwo.style.backgroundImage = 'url(./images/stag.jpg)';
            cardTextTwo.textContent = 'The Stag';
            lastCardFortune = stag[3];
            break;
        case 7:
            imageTwo.style.backgroundImage = 'url(./images/microscope02.jpg)';
            cardTextTwo.textContent = 'The Microscope';
            lastCardFortune = microscope[3];
            break;
        case 8:
            imageTwo.style.backgroundImage = 'url(./images/musician.jpg)';
            cardTextTwo.textContent = 'The Musician';
            lastCardFortune = musician[3];
            break;
        case 9:
            imageTwo.style.backgroundImage = 'url(./images/wasp.jpg)';
            cardTextTwo.textContent = 'The Wasp';
            lastCardFortune = wasp[3];
            break;
    }
}


// Build Fortune //


function displayFortune() {
    fortuneZero.textContent = greeting;
    fortuneOne.textContent = firstCardFortune;
    fortuneTwo.textContent = middleCardFortune;
    fortuneThree.textContent = lastCardFortune;
}