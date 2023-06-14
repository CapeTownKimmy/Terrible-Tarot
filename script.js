const cardContainer = document.getElementById('cardGridContainer');
const cards = cardContainer.querySelectorAll('.card');
const selectedCards = cardContainer.querySelectorAll('.card.selected');

// console.log(cardContainer);
// console.log(cards);
// console.log(selectedCards);


// Show which cards user has selected on a click //

cards.forEach(element => {
    element.addEventListener('click', changeColor);
})

function changeColor(e) {
    if(e.target.classList.contains('selected')) {
        e.target.classList.remove('selected');
    } else {
        e.target.classList.add('selected');
    } 
}