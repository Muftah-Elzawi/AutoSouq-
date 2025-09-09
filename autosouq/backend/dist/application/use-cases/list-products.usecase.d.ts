import { ProductRepository } from '../../domain/repositories/product.repository';
import { ProductEntity } from '../../domain/entities/product.entity';
export declare class ListProductsUseCase {
    private readonly repo;
    constructor(repo: ProductRepository);
    execute(limit?: number): Promise<ProductEntity[]>;
}
