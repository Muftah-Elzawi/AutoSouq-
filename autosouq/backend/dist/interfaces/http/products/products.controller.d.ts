import { ListProductsUseCase } from '../../../application/use-cases/list-products.usecase';
import { ProductDto } from './dto/product.dto';
export declare class ProductsController {
    private readonly listProducts;
    constructor(listProducts: ListProductsUseCase);
    list(limit?: string): Promise<ProductDto[]>;
}
