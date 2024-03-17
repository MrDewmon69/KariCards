import { writable, get } from "svelte/store";

export const cartItems = writable<CartItem[]>([]);

// add to cart
export const addToCart = (id: string) => {
    let items = get(cartItems);
    let itemPos = items.findIndex(
        (item) => { return item.id == id}
    )

    if(itemPos !== -1) {
        // Item in cart
        cartItems.update(() => {
            let updatedItems = items.map( (item) => {
                if(item.id === id) {
                    return { ...item, quantity: item.quantity + 1};
                }
                return item;    
            });
            return updatedItems;
        });
    } else {
        // Item not in cart
        cartItems.update(() => {
            return [ ...items, { id: id, quantity: 1 } ]
        })
    }
}

// remove from cart
export const removeFromCart = (id: string) => {
    let items = get(cartItems);
    let itemPos = items.findIndex(
        (item) => { return item.id == id}
    )
    
    if(items[itemPos]?.quantity -1 === 0) {
        items.splice(itemPos, 1);
    }

    cartItems.update(() => {
        let updatedItems = items.map( (item) => {
            if(item.id === id) {
                return { ...item, quantity: item.quantity - 1};
            }
            return item;    
        });
        return updatedItems;
    });
}