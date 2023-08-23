export const addItemToCart = (item, next) => {
    // Initialize an empty array to hold cart items.
    let cart = [];

    // Check if the 'window' object is defined (ensures code only runs in browser environment).
    if (typeof window != undefined) {

        // Check if there are already items in the cart stored in localStorage.
        if (localStorage.getItem("cart")) {
            // If there are items, parse the JSON data from localStorage and assign it to the 'cart' array.
            cart = JSON.parse(localStorage.getItem("cart"));
        }
    }

    // Add the 'item' parameter to the 'cart' array.
    cart.push({
        ...item, // Spread the properties of 'item' into this new object.
    });

    // Update the cart in localStorage by serializing the 'cart' array to JSON and storing it.
    localStorage.setItem("cart", JSON.stringify(cart));

    // Call the 'next' function provided as an argument to this function.
    // This is typically used to trigger some action after the item is added to the cart.
    next();
}


export const loadCart = () => {
    if (typeof window !== undefined) {
        if (localStorage.getItem("cart")) {
            return JSON.parse(localStorage.getItem("cart"));
        }
    }
}

export const removeItemFromCart = (productId) => {
    let cart = [];
    if (typeof window !== undefined) {
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
    }
    // Iterate through each product in the cart array.  
    cart.map((product, index) => {
        // Check if the current product's _id matches the productId to be removed.
        // Both product.id and product._id are supported 
        // _id is a common convention for the primary key if you are working with databases as MongoDB
        if (product._id === productId) {
            // If there's a match, use 'splice' to remove the product from the cart array.
            cart.splice(index, 1)
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    })

    return cart;
}

export const emptyCart = next => {
    if (typeof window !== undefined) {
        localStorage.removeItem("cart");
        let cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}