"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const products_controller_1 = require("../../interfaces/http/products/products.controller");
const list_products_usecase_1 = require("../../application/use-cases/list-products.usecase");
const prisma_service_1 = require("../../infrastructure/prisma/prisma.service");
const prisma_product_repository_1 = require("../../infrastructure/repositories/prisma-product.repository");
const product_repository_1 = require("../../domain/repositories/product.repository");
let ProductsModule = class ProductsModule {
};
exports.ProductsModule = ProductsModule;
exports.ProductsModule = ProductsModule = __decorate([
    (0, common_1.Module)({
        controllers: [products_controller_1.ProductsController],
        providers: [
            prisma_service_1.PrismaService,
            list_products_usecase_1.ListProductsUseCase,
            { provide: product_repository_1.PRODUCT_REPOSITORY, useClass: prisma_product_repository_1.PrismaProductRepository }
        ],
        exports: []
    })
], ProductsModule);
