import { Pool } from 'pg';

export default class DBConnection {
    private static instance: DBConnection;
    private pool: Pool;

    private constructor() {
        this.pool = new Pool({
            user: process.env.DB_USER || "postgres",
            host: process.env.DB_HOST || "localhost",
            database: process.env.DB_NAME || "nombre_base_de_datos",
            password: process.env.DB_PASSWORD || "santiago",
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

    // Método para obtener todos los clientes
    public async obtenerClientes(): Promise<any> {
        const query = 'SELECT * FROM cliente';
        try {
            const result = await this.pool.query(query);
            return result.rows; // Devuelve las filas de la consulta
        } catch (error) {
            console.error('Error obteniendo clientes:', error);
            throw error;
        }
    }

    // Método para obtener un cliente por ID
    public async obtenerClientePorId(id: number): Promise<any> {
        const query = 'SELECT * FROM cliente WHERE id = $1';
        try {
            const result = await this.pool.query(query, [id]);
            return result.rows[0]; // Devuelve el primer cliente encontrado
        } catch (error) {
            console.error('Error obteniendo cliente:', error);
            throw error;
        }
    }

    // Método para agregar un cliente
    public async agregarCliente(cliente: { nombre: string, apellido: string, edad: number, tipo: string, historial: number }): Promise<any> {
        const query = 'INSERT INTO cliente (nombre, apellido, edad, tipo, historial) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        try {
            const result = await this.pool.query(query, [cliente.nombre, cliente.apellido, cliente.edad, cliente.tipo, cliente.historial]);
            return result.rows[0]; // Devuelve el cliente recién insertado
        } catch (error) {
            console.error('Error agregando cliente:', error);
            throw error;
        }
    }

    // Método para actualizar un cliente
    public async editarCliente(id: number, cliente: { nombre: string, apellido: string, edad: number, tipo: string, historial: number }): Promise<any> {
        const query = 'UPDATE cliente SET nombre = $1, apellido = $2, edad = $3, tipo = $4, historial = $5 WHERE id = $6 RETURNING *';
        try {
            const result = await this.pool.query(query, [cliente.nombre, cliente.apellido, cliente.edad, cliente.tipo, cliente.historial, id]);
            return result.rows[0]; // Devuelve el cliente actualizado
        } catch (error) {
            console.error('Error editando cliente:', error);
            throw error;
        }
    }

    // Método para eliminar un cliente
    // Método para eliminar un cliente
    public async eliminarCliente(id: number): Promise<boolean> {
        const query = 'DELETE FROM cliente WHERE id = $1';
        try {
            const result = await this.pool.query(query, [id]);
            return result.rowCount !== undefined && result.rowCount > 0; // Check if result.rowCount is not undefined before comparing
        } catch (error) {
            console.error('Error eliminando cliente:', error);
            throw error;
        }
    }

}
