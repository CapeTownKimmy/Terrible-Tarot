const cardContainer = document.getElementById('cardGridContainer');
const cards = cardContainer.querySelectorAll('.card');
const textContainer = document.getElementById('textContainer');
const resetBtn = document.getElementById('resetBtn');
const bodyText = document.querySelector('.bodyText');
const displayMessage = document.getElementById('messageContainer');

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
    // let notSelected = cardContainer.querySelectorAll('.card:not(.selected');
    if(maxClicked >= 0 && maxClicked < 3) {
        return   
    } else {
        cards.forEach(element => element.classList.add('hideMe'));
        showBtnAndText();
    }
}

// Show reset Button - once selection made //

function showBtnAndText() {
    resetBtn.style.display = 'block';
    bodyText.textContent = 'Your misfortune awaits...';
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
        restoreBtnAndText()
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