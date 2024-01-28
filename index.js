const getDiscount = (code) => {
  // system with codes, but for simplicity code = '#1111999' always
  // can be used array/object with discount codes and discount value for codes
  if (code === '#1111999') {
    return 5; // in this case the permanent discount will be only 5%
  }
  return 0;
};

const shoppingCart = {
  items: [],
  total: 0,
  addItem(newItem) {
    const { name: newItemName, price: newItemPrice, quantity: newItemQuantity } = newItem;
    if (!(newItemName
            && newItemPrice > 0
            && newItemQuantity > 0)) {
      return;
    } // check of isValid newItem

    const itemsLen = this.items.length;
    for (let i = 0; itemsLen > i; i += 1) {
      if (this.items[i].name === newItemName) {
        return;
      }
    } // check if item with that name is in cart yet

    this.items.push(newItem);
    this.calculateTotal();
  },

  removeItem(itemName) {
    const itemsLen = this.items.length;
    const result = [];
    for (let i = 0; itemsLen > i; i += 1) {
      if (!(this.items[i].name === itemName)) {
        result.push(this.items[i]);
      }
    } // add every item again except for the one being deleted

    this.items = [...result];
    this.calculateTotal();
  },

  updateQuantity(itemName, newQuantity) {
    const itemsLen = this.items.length;
    for (let i = 0; itemsLen > i; i += 1) {
      if (this.items[i].name === itemName) {
        this.items[i].quantity = newQuantity;
        this.calculateTotal();
        return;
      }
    } // if with that name item in then change quantity to new
  },

  calculateTotal() {
    // in fact it can be directly replaced in other methods with + || -
    // to the price when adding/deleting/changing to speed up the code
    // (without completely recalculating each time with method)
    const itemsLen = this.items.length;
    let result = 0;
    for (let i = 0; itemsLen > i; i += 1) {
      result += this.items[i].price * this.items[i].quantity;
    } // full calc of total in cart

    this.total = result;
  },

  clearCart() {
    this.items = [];
    this.total = 0;
    // replace values to initial
  },

  applyDiscount(code) {
    this.total *= (100 - getDiscount(code)) / 100;
    // code is valid is get back number of discount || 0
  },
};

export default shoppingCart;
