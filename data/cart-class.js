class Cart {
    cartItems; // Public property
    #localStorageKey; // Private property

    constructor(localStorageKey) { 
        this.#localStorageKey = localStorageKey; 
        this.#loadFromStorage();             
    }

    // Private method to load data from localStorage
    #loadFromStorage() {
        const storedCart = JSON.parse(localStorage.getItem(this.#localStorageKey)); 
        this.cartItems = storedCart || []; // Initialize with an empty array if nothing is stored
    }

    // Save cart data to localStorage
    saveToStorage() {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }

    // Add item to cart
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
    }

    // Remove item from cart
    removeFromCart(productId) {
        this.cartItems = this.cartItems.filter(cartItem => cartItem.productId !== productId);
        this.saveToStorage();
    }

    // Update delivery option
    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem = this.cartItems.find(cartItem => cartItem.productId === productId);

        if (matchingItem) {
            matchingItem.deliveryOptionId = deliveryOptionId;
            this.saveToStorage();
        }
    }
}

// Create two cart instances
const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');





