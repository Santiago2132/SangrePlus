import DatabaseConexion from "../../../Cliente/Infra/db/DBC";
import DBClientePort from "../../Domain/Port/DB/DBClientePort";

export default class ClienteDB {
    private dbController: DatabaseConexion;

    constructor(dbController: DatabaseConexion) {
        this.dbController = dbController;
    }

    // Método para obtener un cliente por ID
    async getCliente(id: number): Promise<DBClientePort | null> {
        try {
            const query = 'SELECT * FROM cliente WHERE id = $1';
            const result = await this.dbController.query<DBClientePort>(query, [id]);

            if (result.rowCount === 0|| !result.rows[0]) {
                console.warn(`Cliente con ID ${id} no encontrado`);
                return null; // No se encontró el cliente
            }
            return result.rows[0]; // Retorna el cliente encontrado
        } catch (error) {
            console.error('Error al obtener cliente:', error);
            return null  
        }
    }

    // Método para agregar un nuevo cliente
    async agregarCliente(cliente: DBClientePort): Promise<DBClientePort | null> {
        try {
            const query = `INSERT INTO cliente (id, nombre, apellido, edad, tipo, historial)
                           VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
            const values = [
                cliente.id,
                cliente.nombre,
                cliente.apellido,
                cliente.edad,
                cliente.tipo,
                cliente.historial
            ];

            const result = await this.dbController.query<DBClientePort>(query, values);
            if (result.rowCount === 0 || !result.rows[0]) {
                throw new Error('No se pudo agregar el cliente');
            }
            return result.rows[0]; // Retorna el cliente insertado
        } catch (error) {
            console.error('Error al agregar cliente:', error);
            return null  
        }
    }

    // Método para modificar un cliente existente
    async editarCliente(cliente: DBClientePort): Promise<DBClientePort|null> {
        try {
            const query = `UPDATE cliente SET nombre = $1, apellido = $2, edad = $3, tipo = $4, historial = $5
                           WHERE id = $6 RETURNING *`;
            const values = [
                cliente.nombre,
                cliente.apellido,
                cliente.edad,
                cliente.tipo,
                cliente.historial,
                cliente.id
            ];

            const result = await this.dbController.query<DBClientePort>(query, values);
            if (result.rowCount === 0 || !result.rows[0]) {
                console.warn(`No se pudo encontrar el cliente con ID ${cliente.id} para modificar`);
                return null; // Retorna null si no se encontró el cliente
            }
            return result.rows[0]; // Retorna el cliente modificado
        } catch (error) {
            console.error('Error al editar cliente:', error);
            return null        
        }
    }

    // Método para eliminar un cliente
    async eliminarCliente(id: number): Promise<boolean> {
        try {
            const query = 'DELETE FROM cliente WHERE id = $1';
            const result = await this.dbController.query(query, [id]);

            if (result.rowCount === 0)  {
                console.warn(`No se encontró el cliente con ID ${id} para eliminar`);
                return false; // Retorna false si no se encontró el cliente para eliminar
            }
            return true; // Retorna true si el cliente fue eliminado exitosamente
        } catch (error) {
            console.error('Error al eliminar cliente:', error);
            return false  
        }
    }
}
