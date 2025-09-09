export interface Product {
    id: string;
    name: string;
    slug: string;
    description?: string;
    sku: string;
    oemCode?: string;
    aftermarketCode?: string;
    priceCents: number;
    currency: string;
    stock: number;
    make?: string;
    model?: string;
    year?: number;
    createdAt: Date;
    updatedAt: Date;
}
