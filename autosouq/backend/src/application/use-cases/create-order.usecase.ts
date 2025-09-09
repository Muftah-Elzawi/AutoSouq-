import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';

interface CreateOrderItemInput { productId: string; quantity: number }
interface CreateOrderInput { userId: string; items: CreateOrderItemInput[] }

@Injectable()
export class CreateOrderUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(input: CreateOrderInput) {
    if (!input.items.length) throw new BadRequestException('No items');
    const productIds = input.items.map(i => i.productId);
  const products = await this.prisma.product.findMany({ where: { id: { in: productIds } } });
  const map = new Map<string, (typeof products)[number]>(products.map((p: (typeof products)[number]) => [p.id, p]));
    let total = 0;
    const orderItemsData = input.items.map(i => {
      const product = map.get(i.productId);
      if (!product) throw new BadRequestException(`Product ${i.productId} not found`);
      if (product.stock < i.quantity) throw new BadRequestException('Insufficient stock');
      total += product.priceCents * i.quantity;
      return {
        productId: product.id,
        quantity: i.quantity,
        priceCents: product.priceCents,
        currency: product.currency
      };
    });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const order = await this.prisma.$transaction(async (tx: any) => {
      const created = await tx.order.create({
        data: {
          userId: input.userId,
            totalCents: total,
            currency: 'LYD',
            items: { create: orderItemsData }
        },
        include: { items: true }
      });
      // decrement stock
      for (const item of orderItemsData) {
        await tx.product.update({ where: { id: item.productId }, data: { stock: { decrement: item.quantity } } });
      }
      return created;
    });
    return order;
  }
}
