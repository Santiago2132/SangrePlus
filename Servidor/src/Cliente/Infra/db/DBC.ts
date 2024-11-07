import { Pool } from "pg"

class DBConnection {
    private static instance: DBConnection;
    private pool: Pool;

    private constructor() {
        this.pool = new Pool({
            user: process.env.DB_USER || "postgres",
            host: process.env.DB_HOST || "localhost",
            database: process.env.DB_NAME || "nombre_base_de_datos",
            password: process.env.DB_PASSWORD || "contraseña",
            port: Number(process.env.DB_PORT) || 5432,
        });
    }

    public static getInstance(): DBConnection {
        if (!DBConnection.instance) {
            DBConnection.instance = new DBConnection();
        }
        return DBConnection.instance;
    }

    public getPool(): Pool {
        return this.pool;
    }
}

export default DBConnection;
