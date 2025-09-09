export interface ProductEntity {
    id: string;
    name: string;
    slug: string;
    sku: string;
    priceCents: number;
    currency: string;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
}
