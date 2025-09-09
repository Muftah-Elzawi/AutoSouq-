import { ProductEntity } from '../entities/product.entity';
export interface ProductRepository {
    findAll(limit?: number): Promise<ProductEntity[]>;
}
export declare const PRODUCT_REPOSITORY: unique symbol;
