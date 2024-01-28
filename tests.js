import shoppingCart from './index.js';

// tests
shoppingCart.addItem({
  name: 'apple',
  price: 20,
  quantity: 1,
});

shoppingCart.addItem({
  name: 'apple',
  price: 20,
  quantity: 5,
});
shoppingCart.addItem({
  name: 'banana',
  price: 20,
  quantity: 5,
});
shoppingCart.addItem({
  name: 'apple',
  price: 1,
  quantity: -10,
});
shoppingCart.addItem({
  name: 'for be deleted next step',
  price: 999,
  quantity: 1,
});
shoppingCart.removeItem('for be deleted next step');
shoppingCart.addItem({
  name: 'apple',
  price: 20,
  quantity: -10,
});
console.log(shoppingCart);
shoppingCart.updateQuantity('apple', 90);
shoppingCart.applyDiscount('#1111999');
console.log(shoppingCart);
shoppingCart.clearCart();
console.log(shoppingCart);
