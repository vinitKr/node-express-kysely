import {
    CreateDummy,
    UpdateDummy,
} from '../../dbconfig/schema/dummy/dummy.schema';
import DummyRepository from '../../dbconfig/schema/dummy/dummy.repository';
import { DummyPayload } from './dummy.model';

class DummyService {
    constructor() {}

    async get(id: number) {
        return await DummyRepository.get({ id });
    }

    async update(id: number, dummy: Partial<DummyPayload>) {
        const updateWith: UpdateDummy = {
            first_name: dummy.firstName,
            last_name: dummy.lastName,
            gender: dummy.gender,
        };
        return await DummyRepository.update(id, updateWith);
    }

    async create(dummy: DummyPayload) {
        const payload: CreateDummy = {
            first_name: dummy.firstName,
            last_name: dummy.lastName,
            gender: dummy.gender,
        };
        return await DummyRepository.create(payload);
    }

    async delete(id: number) {
        return await DummyRepository.delete(id);
    }
}

export default new DummyService();
