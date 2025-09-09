import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { OrdersModule } from './orders.module';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';

describe('OrdersController (e2e light)', () => {
  let app: INestApplication;
  // Prisma service is mocked; no instance variable needed

  beforeAll(async () => {
    const moduleRefBuilder = Test.createTestingModule({
      imports: [OrdersModule]
    });
    // Override PrismaService to avoid real DB connection for this validation test
    moduleRefBuilder.overrideProvider(PrismaService).useValue({
      onModuleInit: async () => {},
      $transaction: async (fn: (p: unknown) => unknown) => fn({}),
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
    await request(app.getHttpServer())
      .post('/orders')
      .send({ items: [] })
      .expect(400);
  });
});
