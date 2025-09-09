"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    // Basic BMW fitment sample
    const make = await prisma.make.upsert({
        where: { name: 'BMW' },
        update: {},
        create: { name: 'BMW' }
    });
    const model = await prisma.model.upsert({
        where: { makeId_name: { makeId: make.id, name: '3 Series' } },
        update: {},
        create: { name: '3 Series', makeId: make.id }
    });
    const year = await prisma.year.upsert({
        where: { modelId_value: { modelId: model.id, value: 2018 } },
        update: {},
        create: { value: 2018, modelId: model.id }
    });
    const engine = await prisma.engine.upsert({
        where: { yearId_code: { yearId: year.id, code: 'B48' } },
        update: {},
        create: { code: 'B48', yearId: year.id }
    });
    // Create seller user
    const sellerUser = await prisma.user.upsert({
        where: { email: 'seller@example.com' },
        update: {},
        create: { email: 'seller@example.com', role: 'seller' }
    });
    const seller = await prisma.seller.upsert({
        where: { userId: sellerUser.id },
        update: {},
        create: { userId: sellerUser.id, companyName: 'BMW Parts Libya', kycStatus: 'approved' }
    });
    const product = await prisma.product.upsert({
        where: { sku: 'BMW-3-B48-OILFILTER' },
        update: {},
        create: {
            name: 'BMW 3 Series Oil Filter',
            slug: 'bmw-3-oil-filter',
            sku: 'BMW-3-B48-OILFILTER',
            oemCode: '11428583898',
            priceCents: 7500,
            stock: 25,
            sellerId: seller.id
        }
    });
    await prisma.productFitment.upsert({
        where: { productId_engineId: { productId: product.id, engineId: engine.id } },
        update: {},
        create: { productId: product.id, engineId: engine.id }
    });
    console.log('Seed completed.');
}
main().catch(e => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});
