"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const health_module_1 = require("./health/health.module");
const products_module_1 = require("./products/products.module");
const auth_module_1 = require("./auth/auth.module");
const cart_module_1 = require("./cart/cart.module");
const orders_module_1 = require("./orders/orders.module");
const sellers_module_1 = require("./sellers/sellers.module");
const fitment_module_1 = require("./fitment/fitment.module");
const search_module_1 = require("./search/search.module");
const core_1 = require("@nestjs/core");
const roles_guard_1 = require("../common/guards/roles.guard");
const admin_module_1 = require("./admin/admin.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [health_module_1.HealthModule, products_module_1.ProductsModule, auth_module_1.AuthModule, cart_module_1.CartModule, orders_module_1.OrdersModule, sellers_module_1.SellersModule, fitment_module_1.FitmentModule, search_module_1.SearchModule, admin_module_1.AdminModule],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard
            }
        ]
    })
], AppModule);
