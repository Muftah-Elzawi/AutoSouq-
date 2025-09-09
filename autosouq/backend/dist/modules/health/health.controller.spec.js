"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const health_controller_1 = require("./health.controller");
describe('HealthController', () => {
    let controller;
    beforeAll(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [health_controller_1.HealthController]
        }).compile();
        controller = module.get(health_controller_1.HealthController);
    });
    it('should return ok', () => {
        expect(controller.root()).toEqual({ status: 'ok', service: 'autosouq-backend' });
    });
});
