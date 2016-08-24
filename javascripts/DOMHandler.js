// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;
var sandwichOutput = document.getElementById("SandwichOutput");
// Variable to hold topping that the user selects
var selectedTopping = "";
//sel.options[sel.selectedIndex].text
// Get a reference to the <select> element that has all the meat options

// Get Meats
var meatChooser = document.getElementById("meat-chooser");

meatChooser.addEventListener("change", function(event) {
    // Get the value chosen from the DOM
	if (event.target.checked) {
	  selectedTopping = event.target.value;
	  SandwichMaker.addMeat(selectedTopping);
	}
	if (event.target.checked === false){
		selectedTopping = event.target.value;
		SandwichMaker.removeMeat(selectedTopping);
	}
	finalSandwichPrice = SandwichMaker.getTotalPrice();
    sandwichOutput.innerHTML = finalSandwichPrice;
});


// finalSandwichPrice = SandwichMaker.getTotalPrice();
// sandwichOutput.innerHTML = finalSandwichPrice;
// console.log(finalSandwichPrice);

// Get Breads
var breadChooser = document.getElementById("bread-chooser");

breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
	if (event.target.checked) {
  		selectedTopping = event.target.value;
  		SandwichMaker.addBread(selectedTopping);
	}
	if (event.target.checked === false){
		selectedTopping = event.target.value;
		SandwichMaker.removeBread(selectedTopping);
	}
 	finalSandwichPrice = SandwichMaker.getTotalPrice();
    sandwichOutput.innerHTML = finalSandwichPrice;
});

//Get Cheese
var cheeseChooser = document.getElementById("cheese-chooser");

cheeseChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
	if (event.target.checked) {
  		selectedTopping = event.target.value;
  		SandwichMaker.addCheese(selectedTopping);
	}
	if (event.target.checked === false){
		selectedTopping = event.target.value;
		SandwichMaker.removeCheese(selectedTopping);
 	}
	finalSandwichPrice = SandwichMaker.getTotalPrice();
    sandwichOutput.innerHTML = finalSandwichPrice;
});

//Get Veggies
var veggiesChooser = document.getElementById("veggies-chooser");

veggiesChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
	if (event.target.checked) {
  		selectedTopping = event.target.value;
  		SandwichMaker.addVeggies(selectedTopping);
	}
	if (event.target.checked === false){
		selectedTopping = event.target.value;
		SandwichMaker.removeVeggies(selectedTopping);
 	}
 	finalSandwichPrice = SandwichMaker.getTotalPrice();
    sandwichOutput.innerHTML = finalSandwichPrice;
});
