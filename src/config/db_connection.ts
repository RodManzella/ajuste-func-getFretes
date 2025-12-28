import mysql, {Pool} from 'mysql2/promise';
import db_config from './db_config';

const pool: Pool = mysql.createPool({
    host: db_config.hostname,
    user: db_config.db_user,
    password: db_config.db_password,
    database: db_config.db_password,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
})

export default pool;

