import { Application } from 'express';
import HealthApi from './health';
import DummyApi from './dummy';

class ApiController {
    configureRoutes(app: Application) {
        app.use('/api/health', HealthApi.configureRoutes());
        app.use('/api/dummy', DummyApi.configureRoutes());

        app.route('/*').get((req, res) => {
            res.send('Node App is Running');
        });
    }
}

export default new ApiController();
