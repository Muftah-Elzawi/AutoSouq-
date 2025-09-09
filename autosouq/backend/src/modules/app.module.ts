import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';
import { SellersModule } from './sellers/sellers.module';
import { FitmentModule } from './fitment/fitment.module';
import { SearchModule } from './search/search.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../common/guards/roles.guard';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [HealthModule, ProductsModule, AuthModule, CartModule, OrdersModule, SellersModule, FitmentModule, SearchModule, AdminModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ]
})
export class AppModule {}
