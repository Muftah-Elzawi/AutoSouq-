"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const supertest_1 = __importDefault(require("supertest"));
const orders_module_1 = require("./orders.module");
const prisma_service_1 = require("../../infrastructure/prisma/prisma.service");
describe('OrdersController (e2e light)', () => {
    let app;
    // Prisma service is mocked; no instance variable needed
    beforeAll(async () => {
        const moduleRefBuilder = testing_1.Test.createTestingModule({
            imports: [orders_module_1.OrdersModule]
        });
        // Override PrismaService to avoid real DB connection for this validation test
        moduleRefBuilder.overrideProvider(prisma_service_1.PrismaService).useValue({
            onModuleInit: async () => { },
            $transaction: async (fn) => fn({}),
            product: { findMany: async () => [] },
            order: { create: async () => ({ id: 'order', items: [] }) }
        });
        const moduleRef = await moduleRefBuilder.compile();
        app = moduleRef.createNestApplication();
        await app.init();
    });
    afterAll(async () => {
        await app.close();
    });
    it('rejects empty order items', async () => {
        await (0, supertest_1.default)(app.getHttpServer())
            .post('/orders')
            .send({ items: [] })
            .expect(400);
    });
});
