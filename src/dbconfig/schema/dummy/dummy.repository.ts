import db from '../..';
import { SelectDummy, CreateDummy, UpdateDummy } from './dummy.schema';

class DummyRepository {
    constructor() {}

    async get(criteria: Partial<SelectDummy>) {
        let query = db.selectFrom('dummy');
        if (criteria.id) {
            // Kysely is immutable, you must re-assign!
            query = query.where('id', '=', criteria.id);
            return await query.selectAll().executeTakeFirst();
        }

        if (criteria.first_name) {
            query = query.where('first_name', '=', criteria.first_name);
        }

        if (criteria.last_name !== undefined) {
            query = query.where(
                'last_name',
                criteria.last_name === null ? 'is' : '=',
                criteria.last_name
            );
        }

        if (criteria.gender) {
            query = query.where('gender', '=', criteria.gender);
        }

        if (criteria.created_at) {
            query = query.where('created_at', '=', criteria.created_at);
        }

        return await query.selectAll().execute();
    }

    async update(id: number, updateWith: UpdateDummy) {
        return await db
            .updateTable('dummy')
            .set(updateWith)
            .where('id', '=', id)
            .executeTakeFirst();
    }

    async create(dummy: CreateDummy) {
        return await db
            .insertInto('dummy')
            .values(dummy)
            .returningAll()
            .executeTakeFirst();
    }

    async delete(id: number) {
        return await db
            .deleteFrom('dummy')
            .where('id', '=', id)
            .returningAll()
            .executeTakeFirst();
    }

    // private async checkOrCreateTable() {
    //     const result = new Promise((resolve) => {
    //         db.schema
    //             .createTable('dummy')
    //             .addColumn('id', 'serial', (cb) => cb.primaryKey())
    //             .addColumn('first_name', 'varchar', (cb) => cb.notNull())
    //             .addColumn('last_name', 'varchar')
    //             .addColumn('gender', 'varchar(50)', (cb) => cb.notNull())
    //             .addColumn('created_at', 'timestamp', (cb) =>
    //                 cb.notNull().defaultTo(sql`now()`)
    //             )
    //             .execute()
    //             .then(() => {
    //                 resolve(true);
    //             })
    //             .catch((err) => {
    //                 console.log('err', err.message);
    //                 resolve(false);
    //             });
    //     });
    //     return Promise.resolve(result);
    // }
}

export default new DummyRepository();
