import { request } from "http";
import type { RequestHandler } from "./$types";
import Stripe from 'stripe';
import { STRIPE_KEY } from '$env/static/private';

const stripe = new Stripe(STRIPE_KEY, {
    apiVersion:"2023-10-16"
});

export const POST: RequestHandler = async ({request}) => {
    const data = await request.json();
    const items = data.items;

    let lineItems : any = [];
    items.forEach((item : any) => {
        lineItems.push( {price: item.id, quantity: item.quantity} )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: 'https://karicards.store/success',
        cancel_url: 'https://karicards.store/cancel',
    })

    return new Response(
        JSON.stringify({url: session.url}),
        {
            status: 200,
            headers: {'content-type': 'application/json'}
        }
    )
}