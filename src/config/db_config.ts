import dotenv from 'dotenv';

dotenv.config()

interface DB_Config {
    hostname: string;
    db_name: string;
    db_user: string;
    db_password: string;

}

const db_config: DB_Config = {
    hostname : process.env.DB_HOSTNAME || "localhost",
    db_name : process.env.DB_NAME || "",
    db_user : process.env.DB_USER || "",
    db_password : process.env.DB_PASS || "",
};

export default db_config;