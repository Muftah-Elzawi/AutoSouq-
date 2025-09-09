import { Module } from '@nestjs/common';
import { ProductsController } from '../../interfaces/http/products/products.controller';
import { ListProductsUseCase } from '../../application/use-cases/list-products.usecase';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';
import { PrismaProductRepository } from '../../infrastructure/repositories/prisma-product.repository';
import { PRODUCT_REPOSITORY } from '../../domain/repositories/product.repository';

@Module({
  controllers: [ProductsController],
  providers: [
    PrismaService,
    ListProductsUseCase,
    { provide: PRODUCT_REPOSITORY, useClass: PrismaProductRepository }
  ],
  exports: []
})
export class ProductsModule {}
