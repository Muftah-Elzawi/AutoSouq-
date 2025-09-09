"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderUseCase = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../infrastructure/prisma/prisma.service");
let CreateOrderUseCase = class CreateOrderUseCase {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async execute(input) {
        if (!input.items.length)
            throw new common_1.BadRequestException('No items');
        const productIds = input.items.map(i => i.productId);
        const products = await this.prisma.product.findMany({ where: { id: { in: productIds } } });
        const map = new Map(products.map((p) => [p.id, p]));
        let total = 0;
        const orderItemsData = input.items.map(i => {
            const product = map.get(i.productId);
            if (!product)
                throw new common_1.BadRequestException(`Product ${i.productId} not found`);
            if (product.stock < i.quantity)
                throw new common_1.BadRequestException('Insufficient stock');
            total += product.priceCents * i.quantity;
            return {
                productId: product.id,
                quantity: i.quantity,
                priceCents: product.priceCents,
                currency: product.currency
            };
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const order = await this.prisma.$transaction(async (tx) => {
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
};
exports.CreateOrderUseCase = CreateOrderUseCase;
exports.CreateOrderUseCase = CreateOrderUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CreateOrderUseCase);
