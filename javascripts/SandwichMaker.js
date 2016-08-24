var SandwichMaker = (function() {
  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
      SandwichMaker.getTotalPrice();
    },
    removeTopping: function(toppingPrice) {
    	totalPrice -= toppingPrice;
      SandwichMaker.getTotalPrice();
    },
    getTotalPrice: function() {
      return totalPrice.toFixed(2);
      //return totalPrice;
    }
  };
})();
