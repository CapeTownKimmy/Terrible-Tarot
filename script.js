const cardContainer = document.getElementById('cardGridContainer');
const cards = cardContainer.querySelectorAll('.card');


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
    let notSelected = cardContainer.querySelectorAll('.card:not(.selected');
    if(maxClicked >= 0 && maxClicked < 3) {
        return   
    } else {
        notSelected.forEach(element => element.classList.add('hideMe'));
    }
}


