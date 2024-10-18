function addToCart(item, price) {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    const li = document.createElement('li');
    li.innerText = `${item} - $${price.toFixed(2)}`;
    cartItems.appendChild(li);

    const total = parseFloat(totalElement.innerText.substring(1)) + price;
    totalElement.innerText = `$${total.toFixed(2)}`;
}

function viewCart() {
    const cart = document.getElementById('cart');
    cart.style.display = 'block';
}

function checkout() {
    alert('Thank you for your purchase!');
}


