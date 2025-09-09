import { ProductEntity } from '../entities/product.entity';

export interface ProductRepository {
  findAll(limit?: number): Promise<ProductEntity[]>;
}

export const PRODUCT_REPOSITORY = Symbol('PRODUCT_REPOSITORY');
