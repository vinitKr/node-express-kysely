import { Router } from 'express';
import HealthController from './health.controller';

class HealthApi {
    constructor() {}

    configureRoutes() {
        const router: Router = Router();

        router.get('/', HealthController.get);

        return router;
    }
}

export default new HealthApi();
