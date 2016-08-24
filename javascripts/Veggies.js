// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(makeVeggies) {

  var veggiesPrices = {
  	onions: 0.1,
  	tomatoes: 0.5,
  	lettuce: 0.2
  };
  
  makeVeggies.addVeggies = function(selectedTopping) {
    for (var price in veggiesPrices) {
      if (price == selectedTopping) {
       SandwichMaker.addTopping(veggiesPrices[price]);
      } 
    }
  };
  makeVeggies.removeVeggies = function(selectedTopping) {
    for (var price in veggiesPrices) {
      if (price == selectedTopping) {
       SandwichMaker.removeTopping(veggiesPrices[price]);
      } 
    }
  };
 
  return makeVeggies;
})(SandwichMaker || {});