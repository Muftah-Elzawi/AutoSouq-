import { PrismaService } from '../../infrastructure/prisma/prisma.service';
interface CreateOrderItemInput {
    productId: string;
    quantity: number;
}
interface CreateOrderInput {
    userId: string;
    items: CreateOrderItemInput[];
}
export declare class CreateOrderUseCase {
    private prisma;
    constructor(prisma: PrismaService);
    execute(input: CreateOrderInput): Promise<any>;
}
export {};
