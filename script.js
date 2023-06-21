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

let cardOneName
let cardTwoName
let cardThreeName

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
    'Nice from far but far from nice! Beware the local Karen... she wants to talk to your manager!',
    'Yesterday, all my troubles seemed so far away... Look again, you are using your binoculars backwards!',
    'Roses are red... my binoculars are blue. Your blinds are open, someones watching you!'
];
const coffeeCup = [
    'The Caffeinated',
    "More espresso, less depresso! Perk up, old bean. You're mug-nificent!",
    "Better latte than never! Trouble is brewing and you've ground to a halt!",
    'Deja Brew. Bean there, done that! Back to the daily grind you go.'
]
const lobster = [
    'The Lobster',
    "Don't be so shellfish. Crack a smile, be-claws you're worth it!",
    'Nice to sea you. An old aquaintance is back in town telling tails about you.',
    'When life gives you lemons, order the lobster! Wave away the rainy day, kelp is on the way!'
];
const mirror = [
    'The Mirror',
    'Mirror, Mirror, on the wall. What the hell happened?!',
    "Hold your watch to your mirror, it's time for reflection. Eye wonder what it is you see?",
    'Objects in the rear view mirror may appear closer than they are... Run! While there is still time!'
]
const skull = [
    'The Skull',
    "Bone Jour! Your're just dying for a holiday!",
    "Keep one eye open for skullduggery, someone's got a bone to pick with you!.",
    'Bone appetit, enjoy your next meal. It might be your last!'
];
const hotAirBalloon = [
    'The Hot-Air Balloon',
    'Want to hear a balloon joke? Nah, it will probably go over your head!',
    'You are over inflated. Check your ego, amigo!',
    'You are a basket-case! With you feet on the air and your head on the ground...'
]
const stag = [
    'The Stag',
    "You are stag-geringly vain, doe not over do it! No need to fawn over yourself!",
    'Oh deer, what a year! Buck up! It might be over soon... just hang on for deer life!',
    "What is love? Baby don't herd me... Your love life is stuck in a rut."
];
const microscope = [
    'The Microscope',
    'When life gets blurry, adjust your focus! You need a recalibration of your identification.',
    "Hocus, pocus. You've lost your focus! How eye-ronic",
    "It's been scientifically proven that people who have more birthdays live longer. Keep up the good work."
]
const musician = [
    'The Musician',
    "Here comes treble! On that note, look sharp because there's no going Bach!",
    'Life without music would b flat! Buy a radio.',
    'Warning! Your week ahead may contain sax and violins!'
];
const wasp = [
    'The Wasp',
    "You are nothing more than a wanna-bee! That's gotta sting!",
    'To bee or not to bee? Maybe just wing it...',
    "You are my every-sting! You're pretty fly for a small fry."
]


// Changes the card colour to show which card has been selected on a click  //
// Selected card can be clicked again to deselect //
cards.forEach(element => {
    element.addEventListener('click', changeColor)
})

function changeColor(e) {
    e.target.classList.toggle('selected')
    cardCounter()
}



// Count how many cards have been selected on the third selection 3 cards will turn over to reveal the users choice//
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



// reset card deck on click //
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

// flip cards slowly, one by one //
function flipOneAfterAnother() {
    setTimeout(() => {flipCard[0].style.transform = 'rotateY(180deg)'}, 500);
    setTimeout(() => {flipCard[1].style.transform = 'rotateY(180deg)'}, 1300);
    setTimeout(() => {flipCard[2].style.transform = 'rotateY(180deg)'}, 2100);
}


// Once reset, flip cards back until next round //
function resetRotate () {
    flipCard[0].style.transform = 'rotateY(0deg)';
    flipCard[1].style.transform = 'rotateY(0deg)';
    flipCard[2].style.transform = 'rotateY(0deg)';
}

// Shuffle numbers in card deck array to randomise selection with no duplicate numbers//

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


// Find index for random numbers of each card and assign correct images and text//
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
            cardOneName = binoculars[0];
            break;
        case 1:
            imageZero.style.backgroundImage = 'url(./images/coffee.jpg)';
            cardTextZero.textContent = 'The Caffeinated';
            firstCardFortune = coffeeCup[1];
            cardOneName = coffeeCup[0];
            break;
        case 2:
            imageZero.style.backgroundImage = 'url(./images/lobster.jpg)';
            cardTextZero.textContent = 'The Lobster';
            firstCardFortune = lobster[1];
            cardOneName = lobster[0];
            break;
        case 3:
            imageZero.style.backgroundImage = 'url(./images/mirror.jpg)';
            cardTextZero.textContent = 'The Mirror';
            firstCardFortune = mirror[1];
            cardOneName = mirror[0];
            break;
        case 4:
            imageZero.style.backgroundImage = 'url(./images/skull.jpg)';
            cardTextZero.textContent = 'The Skull';
            firstCardFortune = skull[1];
            cardOneName = skull[0];
            break;
        case 5:
            imageZero.style.backgroundImage = 'url(./images/hotAirBalloon.jpg)';
            cardTextZero.textContent = 'The Hot-Air Balloon';
            firstCardFortune = hotAirBalloon[1];
            cardOneName = hotAirBalloon[0];
            break;
        case 6:
            imageZero.style.backgroundImage = 'url(./images/stag.jpg)';
            cardTextZero.textContent = 'The Stag';
            firstCardFortune = stag[1];
            cardOneName = stag[0];
            break;
        case 7:
            imageZero.style.backgroundImage = 'url(./images/microscope02.jpg)';
            cardTextZero.textContent = 'The Microscope';
            firstCardFortune = microscope[1];
            cardOneName = microscope[0];
            break;
        case 8:
            imageZero.style.backgroundImage = 'url(./images/musician.jpg)';
            cardTextZero.textContent = 'The Musician';
            firstCardFortune = musician[1];
            cardOneName = musician[0];
            break;
        case 9:
            imageZero.style.backgroundImage = 'url(./images/wasp.jpg)';
            cardTextZero.textContent = 'The Wasp';
            firstCardFortune = wasp[1];
            cardOneName = wasp[0];
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
            cardTwoName = binoculars[0];
            break;
        case 1:
            imageOne.style.backgroundImage = 'url(./images/coffee.jpg)';
            cardTextOne.textContent = 'The Caffeinated';
            middleCardFortune = coffeeCup[2];
            cardTwoName = coffeeCup[0];
            break;
        case 2:
            imageOne.style.backgroundImage = 'url(./images/lobster.jpg)';
            cardTextOne.textContent = 'The Lobster';
            middleCardFortune = lobster[2];
            cardTwoName = lobster[0];
            break;
        case 3:
            imageOne.style.backgroundImage = 'url(./images/mirror.jpg)';
            cardTextOne.textContent = 'The Mirror';
            middleCardFortune = mirror[2];
            cardTwoName = mirror[0];
            break;
        case 4:
            imageOne.style.backgroundImage = 'url(./images/skull.jpg)';
            cardTextOne.textContent = 'The Skull';
            middleCardFortune = skull[2];
            cardTwoName = skull[0];
            break;
        case 5:
            imageOne.style.backgroundImage = 'url(./images/hotAirBalloon.jpg)';
            cardTextOne.textContent = 'The Hot-Air Balloon';
            middleCardFortune = hotAirBalloon[2];
            cardTwoName = hotAirBalloon[0];
            break;
        case 6:
            imageOne.style.backgroundImage = 'url(./images/stag.jpg)';
            cardTextOne.textContent = 'The Stag';
            middleCardFortune = stag[2];
            cardTwoName = stag[0];
            break;
        case 7:
            imageOne.style.backgroundImage = 'url(./images/microscope02.jpg)';
            cardTextOne.textContent = 'The Microscope';
            middleCardFortune = microscope[2];
            cardTwoName = microscope[0];
            break;
        case 8:
            imageOne.style.backgroundImage = 'url(./images/musician.jpg)';
            cardTextOne.textContent = 'The Musician';
            middleCardFortune = musician[2];
            cardTwoName = musician[0];
            break;
        case 9:
            imageOne.style.backgroundImage = 'url(./images/wasp.jpg)';
            cardTextOne.textContent = 'The Wasp';
            middleCardFortune = wasp[2];
            cardTwoName = wasp[0];
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
            cardThreeName = binoculars[0];
            break;
        case 1:
            imageTwo.style.backgroundImage = 'url(./images/coffee.jpg)';
            cardTextTwo.textContent = 'The Caffeinated';
            lastCardFortune = coffeeCup[3];
            cardThreeName = coffeeCup[0];
            break;
        case 2:
            imageTwo.style.backgroundImage = 'url(./images/lobster.jpg)';
            cardTextTwo.textContent = 'The Lobster';
            lastCardFortune = lobster[3];
            cardThreeName = lobster[0];
            break;
        case 3:
            imageTwo.style.backgroundImage = 'url(./images/mirror.jpg)';
            cardTextTwo.textContent = 'The Mirror';
            lastCardFortune = mirror[3];
            cardThreeName = mirror[0];
            break;
        case 4:
            imageTwo.style.backgroundImage = 'url(./images/skull.jpg)';
            cardTextTwo.textContent = 'The Skull';
            lastCardFortune = skull[3];
            cardThreeName = skull[0];
            break;
        case 5:
            imageTwo.style.backgroundImage = 'url(./images/hotAirBalloon.jpg)';
            cardTextTwo.textContent = 'The Hot-Air Balloon';
            lastCardFortune = hotAirBalloon[3];
            cardThreeName = hotAirBalloon[0];
            break;
        case 6:
            imageTwo.style.backgroundImage = 'url(./images/stag.jpg)';
            cardTextTwo.textContent = 'The Stag';
            lastCardFortune = stag[3];
            cardThreeName = stag[0];
            break;
        case 7:
            imageTwo.style.backgroundImage = 'url(./images/microscope02.jpg)';
            cardTextTwo.textContent = 'The Microscope';
            lastCardFortune = microscope[3];
            cardThreeName = microscope[0];
            break;
        case 8:
            imageTwo.style.backgroundImage = 'url(./images/musician.jpg)';
            cardTextTwo.textContent = 'The Musician';
            lastCardFortune = musician[3];
            cardThreeName = musician[0];
            break;
        case 9:
            imageTwo.style.backgroundImage = 'url(./images/wasp.jpg)';
            cardTextTwo.textContent = 'The Wasp';
            lastCardFortune = wasp[3];
            cardThreeName = wasp[0];
            break;
    }
}


// Build Fortune Message from selection//
function displayFortune() {
    fortuneZero.textContent = greeting + cardOneName + ', ' + cardTwoName + ', ' + cardThreeName + '.';
    fortuneOne.textContent = firstCardFortune;
    fortuneTwo.textContent = middleCardFortune;
    fortuneThree.textContent = lastCardFortune;
}