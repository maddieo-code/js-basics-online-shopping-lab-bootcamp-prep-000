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
  var keys = Object.keys(cart)
  if (!cart.length) {
    cartContents = "Your shopping cart is empty.";
  } else if (cart.length === 1) {
      cartContents = ` ${keys[0]} at ${cart[0].keys}.`
  } else if (cart.length ===2) {
      cartContents = ` ${keys[0]} at ${cart[0].keys[0]} and ${keys[1]} at ${cart[1].keys[1]}.`
  } else {
      for (var i = 0; i < cart.length; i++) {
        cartContents = `${cartContents} ${keys[i]} at ${cart[i].keys[i]}, and `;
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
