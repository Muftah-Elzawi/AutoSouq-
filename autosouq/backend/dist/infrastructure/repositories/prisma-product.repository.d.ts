import { PrismaService } from '../prisma/prisma.service';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { ProductEntity } from '../../domain/entities/product.entity';
export declare class PrismaProductRepository implements ProductRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(limit?: number): Promise<ProductEntity[]>;
}
