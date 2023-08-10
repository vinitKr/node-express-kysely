import { Request, Response } from 'express';
import { errorHandler, successHandler } from '../../helper/handlers';
import DummyService from './dummy.service';

class DummyController {
    constructor() {}

    public async get(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const user = await DummyService.get(id);
            successHandler(res, user);
        } catch (err) {
            errorHandler(res, err);
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const payload = req.body;
            const user = await DummyService.create(payload);
            successHandler(res, user);
        } catch (err) {
            errorHandler(res, err);
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const payload = req.body;
            const user = await DummyService.update(id, payload);
            successHandler(res, user);
        } catch (err) {
            errorHandler(res, err);
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            await DummyService.delete(id);
            successHandler(res, true);
        } catch (err) {
            errorHandler(res, err);
        }
    }
}

export default new DummyController();
