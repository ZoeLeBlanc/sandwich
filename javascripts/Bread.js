// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(makeBread) {

  var breadPrices = {
  	rye: 1,
  	wheat: 0.5,
  	white: 0.8
  };
  
  makeBread.addBread = function(selectedTopping) {
    for (var price in breadPrices) {
      if (price == selectedTopping) {
       SandwichMaker.addTopping(breadPrices[price]);
      } 
    }
  };
  makeBread.removeBread = function(selectedTopping) {
    for (var price in breadPrices) {
      if (price == selectedTopping) {
       SandwichMaker.removeTopping(breadPrices[price]);
      } 
    }
  };
 
  return makeBread;
})(SandwichMaker || {});