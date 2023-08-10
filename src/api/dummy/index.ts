import { Router } from 'express';
import DummyController from './dummy.controller';

class DummyApi {
    constructor() {}

    configureRoutes() {
        const router: Router = Router();

        router.get('/:id*?', DummyController.get);
        router.post('/', DummyController.create);
        router.put('/:id', DummyController.update);
        router.delete('/:id', DummyController.delete);

        return router;
    }
}

export default new DummyApi();
