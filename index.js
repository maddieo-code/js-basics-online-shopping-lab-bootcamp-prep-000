var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*(100 + 1) + 1);
  var itemObj = {[item]: price};
  cart.push(itemObj);
  console.log(`${item} has been added to your cart`);
  return cart;
}

function viewCart() {
  var cartContents = "In your cart you have";
  if (!cart.length) {
    cartContents = "Your shopping cart is empty.";
  } else if (cart.length === 1) {
      var key = Object.keys(cart[0]);
      cartContents = ` ${key} at ${cart[0].key}.`
  } else if (cart.length ===2) {
      var key0 = Object.keys(cart[0]);
      var key1 = Object.keys(cart[1]);
      cartContents = ` ${key0} at ${cart[0].key0} and ${key1]} at ${cart[1].key0}.`
  } else {
      for (var i = 0; i < cart.length; i++) {
        var key = Object.keys(cart[i]);
        cartContents = `${cartContents} ${key} at ${cart[i].key, and `;
      }
  }
  return cartContents;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
