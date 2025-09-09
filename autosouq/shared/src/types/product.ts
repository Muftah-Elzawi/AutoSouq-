export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  sku: string; // internal SKU
  oemCode?: string; // OEM part number
  aftermarketCode?: string; // Aftermarket reference
  priceCents: number;
  currency: string;
  stock: number;
  make?: string; // Fitment simplified reference (will map to fitment tables)
  model?: string;
  year?: number;
  createdAt: Date;
  updatedAt: Date;
}
