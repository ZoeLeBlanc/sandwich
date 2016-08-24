// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(makeMeat) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	salami: 1,
  	turkey: 0.5,
  	roastbeef: 0.8
  };
  //var finalMeatTotal = 0;

  // Augment the original object with another method
  makeMeat.addMeat = function(selectedTopping) {
    for (var price in meatPrices) {
      if (price == selectedTopping) {
       SandwichMaker.addTopping(meatPrices[price]);
      } 
    }
  };
  makeMeat.removeMeat = function(selectedTopping) {
    for (var price in meatPrices) {
      if (price == selectedTopping) {
       SandwichMaker.removeTopping(meatPrices[price]);
      } 
    }
  };
 // maker.updateMeat = function() {
 //    return maker.addTopping(finalMeatTotal);
 //  };


  // Return the new, augmented object with the new method on it
  return makeMeat;
})(SandwichMaker || {});