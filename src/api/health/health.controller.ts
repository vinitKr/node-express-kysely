import { Request, Response } from 'express';
import { successHandler } from '../../helper/handlers';

class HealthController {
    public get(req: Request, res: Response) {
        successHandler(res, null, 'Ok');
    }
}

export default new HealthController();
