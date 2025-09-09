import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ListProductsUseCase } from '../../../application/use-cases/list-products.usecase';
import { ProductDto } from './dto/product.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly listProducts: ListProductsUseCase) {}

  @Get()
  async list(@Query('limit') limit?: string): Promise<ProductDto[]> {
    const lim = limit ? Math.min(parseInt(limit, 10) || 50, 100) : 50;
    return (await this.listProducts.execute(lim)).map(p => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      sku: p.sku,
      priceCents: p.priceCents,
      currency: p.currency,
      stock: p.stock
    }));
  }
}
