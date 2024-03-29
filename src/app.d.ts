// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare class Product {
	id: string // Stripe ID
	name: string // "Card game"
	price: number // "15"
}

declare class CartItem {
	id: string
	quantity: number
}