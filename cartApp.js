// IGNORE
// localStorage.removeItem('shoppingCart')
// IGNORE
// Create initializeCart func that checks if theres a cart in localStorage
function initializeCart(){
    let cart = localStorage.getItem('shoppingCart');
    if (!cart) {
        console.log("No cart. Creating one now....")
        cart = [];
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    } else {
        // Parse the existing cart from localStorage if it exists
        console.log("Cart exists- parsing")
        cart = JSON.parse(cart);
    }
}
// addItem func that takes item obj as param and retrieves cart from local storage
function addItem(item){
    // Retrieve cart from localStorage
    let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    // Add item to cart
    shoppingCart.push(item);
    // Store updated cart in storage
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
}
// removeItem function
function removeItem(itemId){
    // Retrieve Cart
    let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    // Remove from cart
    shoppingCart = shoppingCart.filter(item => item.id !== itemId); // We filter in anything that is NOT the itemId
    // Store in local
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}
// displayCart function
function displayCart(){
    // Retrive cart from storage
    let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    // Log contents to console
    console.log('Cart Contents:');
    console.log(shoppingCart);
}

// Event listener for the add item form submission
document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
  
    if (itemName && itemPrice) {
      const newItem = {
        id: Date.now(), // unique id for each item (using timestamp here)
        name: itemName,
        price: itemPrice
      };
      addItem(newItem);
      console.log('Item added to cart:', newItem);
      // Optionally, clear the form inputs after adding the item
      document.getElementById('itemName').value = '';
      document.getElementById('itemPrice').value = '';
    } else {
      alert('Please enter both item name and price.');
    }
  });
  
  // Event listener for the display cart button
  document.getElementById('displayCartButton').addEventListener('click', function() {
    displayCart();
  });
  
  // Initialize the cart when the script is loaded
  initializeCart();