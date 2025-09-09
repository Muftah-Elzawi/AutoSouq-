import { Module } from '@nestjs/common';
import { OrdersController } from '../../interfaces/http/orders/orders.controller';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';
import { CreateOrderUseCase } from '../../application/use-cases/create-order.usecase';

@Module({
	controllers: [OrdersController],
	providers: [PrismaService, CreateOrderUseCase]
})
export class OrdersModule {}

