document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
// -----------------configurate the button action---------------
    const updateTotalForItem = (item) => {
        const minusButton = item.querySelector('.minus');
        const plusButton = item.querySelector('.plus');
        const deleteBtn = item.querySelector('.delete-btn');
        const heartIcons = item.querySelector('.far fa-heart');
        const quantitySpan = item.querySelector('.quantity-value');
        const totalSpan = item.querySelector('.total');
        const priceSpan = item.querySelector('.price');

        let quantity = parseInt(quantitySpan.textContent);
        const price = parseFloat(priceSpan.textContent);
// -----------------calculate the total price of the products---------------
        const updateTotal = () => {
            const total = quantity * price;
            totalSpan.textContent = total.toFixed(2);
            updateCartTotal();
        };
// ----------------add a click event listener to the minus button----------
        minusButton.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
                updateTotal();
            }
        });
// ----------------add a click event listener to the plus button----------
        plusButton.addEventListener('click', () => {
            quantity++;
            quantitySpan.textContent = quantity;
            updateTotal();
        });
        // ----------------add a click event listener to the delete button----------
        deleteBtn.addEventListener('click', function() {
            item.remove();
            updateTotal();
        });
      
        // Initial total update
        updateTotal();
    };
    const updateCartTotal = () => {
        let cartTotal = 0;
        cartItems.forEach(item => {
            const itemTotal = parseFloat(item.querySelector('.total').textContent);
            cartTotal += itemTotal;
        });
        document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
    };

    cartItems.forEach(item => updateTotalForItem(item));

    document.getElementById('checkout').addEventListener('click', () => {
        const total = parseFloat(document.getElementById('cart-total').textContent);
        alert(`Thank you for your order! Your total is XOF${total.toFixed(2)}`);
    });
    
    // Initial cart total update
    updateCartTotal();
});
