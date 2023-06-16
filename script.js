const cardContainer = document.getElementById('cardGridContainer');
const cards = cardContainer.querySelectorAll('.card');
const textContainer = document.getElementById('textContainer');
const resetBtn = document.getElementById('resetBtn');
const bodyText = document.querySelector('.bodyText');
const displayMessage = document.getElementById('messageContainer');
const flipCardContainer = document.getElementById('threeCardContainer');
const flipCard = document.querySelectorAll('.flipCard');


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


// *******Fade in with opacity!!
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
