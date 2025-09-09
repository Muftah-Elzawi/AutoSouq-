import { CreateOrderUseCase } from '../../../application/use-cases/create-order.usecase';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrdersController {
    private createOrder;
    constructor(createOrder: CreateOrderUseCase);
    create(dto: CreateOrderDto): Promise<any>;
}
