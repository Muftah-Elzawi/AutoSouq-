import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { ProductEntity } from '../../domain/entities/product.entity';

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll(limit = 50): Promise<ProductEntity[]> {
    return this.prisma.product.findMany({
      take: limit,
      orderBy: { createdAt: 'desc' }
    });
  }
}
