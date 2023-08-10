import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';
import { Database } from './schema';

const dialect = new PostgresDialect({
    pool: async () => new Pool({ connectionString: process.env.DB_URL }),
});

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export default new Kysely<Database>({ dialect });
