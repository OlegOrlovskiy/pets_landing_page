var filter_animals = document.getElementById('filter');
var animals_list = document.getElementById('animals-list');

filter_animals.onchange = function() {
	console.log(this.value);
  var cards = animals_list.getElementsByClassName('card');
  for (var i=0; i<cards.length; i++) {
  	if (cards[i].classList.contains(this.value)) {
    	cards[i].style.display = 'block';
    } else {
    	cards[i].style.display = 'none';
    }
  }
};