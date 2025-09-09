import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderUseCase } from '../../../application/use-cases/create-order.usecase';
import { CreateOrderDto } from './dto/create-order.dto';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private createOrder: CreateOrderUseCase) {}

  @Post()
  async create(@Body() dto: CreateOrderDto) {
    // Placeholder user until auth integrated
    const userId = 'anonymous-user';
    return this.createOrder.execute({ userId, items: dto.items });
  }
}
