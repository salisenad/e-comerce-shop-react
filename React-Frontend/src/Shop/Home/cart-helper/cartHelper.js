export const addItem = (item = [], next = f => f) => {
    let cart = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        let itemExists = false;
        for(let cartItem of cart){
            if(cartItem.id == item.id){
                cartItem.count++;
                itemExists = true;
            }
        } 
        if(!itemExists){
            cart.push({...item, count: 1});  
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        next();
    }
};

export const subString = (item = [], next = f => f) => {
    let cart = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        let itemExists = false;
        for(let cartItem of cart){
            if(cartItem.id == item.id){
                cartItem.count--;
                itemExists = true;
            }
        } 
        
        localStorage.setItem('cart', JSON.stringify(cart));
        next();
    }
};



export const getCart = () => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart'));
        }
    }
    return [];
};


export const removeItem = productId => {
    let cart = [];
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        cart.map((product, i) => {
            if (product.id === productId) {
                cart.splice(i, 1);
            }
        });

        localStorage.setItem('cart', JSON.stringify(cart));
    }
    return cart;
};


