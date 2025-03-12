// class is basically an object generator.

class Cart {
    cartItems;
    #localStorageKey; // private property.

    constructor(localStorageKey) { 
        this.localStorageKey = localStorageKey; 
        this.loadFromStorage();             
    }
     // works like the normal method we can put code inside it and it will run the code.but the special thing about this is that when we generate an object it will run this constructor automatically.
    // this points to the object that we generated.
    loadFromStorage() {
        const storedCart = JSON.parse(localStorage.getItem(this.localStorageKey)); 
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
    }

    saveToStorage() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
    }

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

    removeFromCart(productId) {
        this.cartItems = this.cartItems.filter(cartItem => cartItem.productId !== productId);
        this.saveToStorage();
    }

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem = this.cartItems.find(cartItem => cartItem.productId === productId);

        if (matchingItem) {
            matchingItem.deliveryOptionId = deliveryOptionId;
            this.saveToStorage();
        }
    }
}

const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');


cart.localStorageKey-'cart-oop';
businessCart.localStorageKey='cart-business ';

cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(businessCart);
console.log(cart);
// to check whether a class is instance of a class.we can use the code ,
console.log(businessCart instanceof Cart);

// oop is OBEJECT ORIENTED PROGRAMMING = organizing our code into objects(tries to repesent the real world)

// class= helps us to generate these objects.ie they are basically object generators.

// Benefits of classes.
//1) it is cleaner than using a function.
//2) It is having extra features for oop.
//i) Used as a constructor = lets us run setup code.ie Constructor lets us put this setup code inside the class.which makes cleaner and puts everything inside the class neatly.

// THINGS TO REMEMBER ABOUT CONSTRUCTOR.

// Should only use the name constructor.

// Also should not return anything from the constructor.

// CLASS IS A BETTERWAY TO GENERATE OBJECTS

//
