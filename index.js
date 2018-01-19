var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*99 + 1);
 var itemObj = new Object({[item]:price});
 cart.push(itemObj);
 console.log(`${Object.keys(cart[cart.length - 1])} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if(cart.length === 0){
    return console.log(`Your shopping cart is empty.`);
  } 
  else {
    if(cart.length === 1){
      return console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`);
    } 
    else if(cart.length === 2){
      return console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`);
    }
    else{
      var str =  `In your cart, you have `
      for(var i = 0; i <= cart.length - 1; i++){
        if(i + 1 < cart.length){
            str = str + `${Object.keys(cart[i])} at $${Object.values(cart[i])}, `;
        } else if(i + 1 === cart.length){
            str = str + `and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`;
        }
      } 
    return console.log(str)  
    }
  }
  return cart;
}


function total() {
  var totalPrice = 0
  for(var i = 0; i + 1 <= cart.length; i++){
    if(i + 1 <= cart.length){
      totalPrice = totalPrice + parseInt(Object.values(cart[i]))
    }
  }
  return totalPrice
}

function removeFromCart(item) {
  var itemNameObj = [item]
  if (cart.hasOwnProperty(itemNameObj) === false){
    console.log(`That item is not in your cart.`);
  } else if(Object.keys(cart[item]) < cart.length - 1){
    var newCart = 
    [...cart.slice(0, Object.keys(cart[item])) , ...cart.slice(Object.keys(cart[item][0]+ 1))];
    setCart(newCart);
  } else if(Object.keys(cart[item]) === cart.length - 1){
    cart.pop()
  }
  return cart; 
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart([])
  }
}

addToCart('apple');
addToCart('spring');
addToCart('love');
addToCart('spice');
addToCart('smiles');
console.log(cart);
console.log(cart.length);
console.log(total());
console.log(Object.keys(cart[apple]))
removeFromCart('love');
console.log(cart);
removeFromCart('smiles')
viewCart()