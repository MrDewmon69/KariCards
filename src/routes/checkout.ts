import { get } from 'svelte/store';
import { cartItems } from '../cartManager';

export async function checkout() {
    await fetch('./api/stripeCheckout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items: get(cartItems) })
    })
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            data.url;
            window.location.replace(data.url);
        });
}