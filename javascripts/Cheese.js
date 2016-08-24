// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(makeCheese) {

  var cheesePrices = {
  	feta: 1,
  	blue: 0.5,
  	provolone: 0.2
  };
  
  makeCheese.addCheese = function(selectedTopping) {
    for (var price in cheesePrices) {
      if (price == selectedTopping) {
       SandwichMaker.addTopping(cheesePrices[price]);
      } 
    }
  };
  makeCheese.removeCheese = function(selectedTopping) {
    for (var price in cheesePrices) {
      if (price == selectedTopping) {
       SandwichMaker.removeTopping(cheesePrices[price]);
      } 
    }
  };
 
  return makeCheese;
})(SandwichMaker || {});