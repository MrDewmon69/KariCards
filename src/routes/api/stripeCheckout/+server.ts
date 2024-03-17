import { request } from "http";
import type { RequestHandler } from "./$types";
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const KEY : any = process.env.STRIPE_KEY;
const stripe = new Stripe(KEY, {
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