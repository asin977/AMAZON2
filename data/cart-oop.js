function Cart(localStorageKey) {
    return {
        cartItems: [],

        loadFromStorage() {
            // Load from storage or set default values
            const storedCart = JSON.parse(localStorage.getItem('localStorageKey'));
            this.cartItems = storedCart || [
                {
                    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    quantity: 2,
                    deliveryOptionId: '1'
                },
                {
                    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    quantity: 1,
                    deliveryOptionId: '2'
                }
            ];
        },

        saveToStorage() {
            localStorage.setItem('localStorageKey', JSON.stringify(this.cartItems));
        },

        addToCart(productId) {
            let matchingItem = this.cartItems.find(cartItem => cartItem.productId === productId);

            if (matchingItem) {
                matchingItem.quantity += 1;
            } else {
                this.cartItems.push({
                    productId,
                    quantity: 1,
                    deliveryOptionId: '1'
                });
            }
            this.saveToStorage();
        },

        removeFromCart(productId) {
            this.cartItems = this.cartItems.filter(cartItem => cartItem.productId !== productId);
            this.saveToStorage();
        },

        updateDeliveryOption(productId, deliveryOptionId) {
            let matchingItem = this.cartItems.find(cartItem => cartItem.productId === productId);

            if (matchingItem) {
                matchingItem.deliveryOptionId = deliveryOptionId;
                this.saveToStorage();
            }
        }
    };
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');  
const extraCart = Cart('extra-cart');

// Load cart data on startup
cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(businessCart);
console.log(cart);
console.log(extraCart)