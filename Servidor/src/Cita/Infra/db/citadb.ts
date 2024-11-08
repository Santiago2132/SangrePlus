import DatabaseConexion from "./DBC";  // Asegúrate de importar correctamente la clase DatabaseConexion
import DBCitaPort from "../../../Cita/Domain/Port/DB/DBCitaPort";

export default class CitaDB {
    private dbController: DatabaseConexion;

    constructor(dbController: DatabaseConexion) {
        this.dbController = dbController;
    }

    // Método para obtener citas por cliente
    async obtenerCitasPorCliente(cliente_id: number): Promise<DBCitaPort[]> {
        try {
            const query = 'SELECT * FROM cita WHERE cliente_id = $1';
            const result = await this.dbController.query<DBCitaPort>(query, [cliente_id]);

            if (result.rowCount === 0) {
               console.error(`No se encontraron citas para el cliente con ID: ${cliente_id}`); // Lanza un error si no hay resultados
            }
            return result.rows; // Retorna las filas obtenidas
        } catch (error) {
            console.error('Error al obtener citas por cliente:', error);
            return []
        }
    }

    // Método para agregar una nueva cita
    async agendarCita(cita: DBCitaPort): Promise<DBCitaPort | null> {
        try {
            const query = `INSERT INTO cita (id, tipocita, cliente_id, fecha, hora, descripcion, lugar, estado, observaciones)
                           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;
            const values = [
                cita.id,
                cita.tipocita,
                cita.cliente_id,
                cita.fecha,
                cita.hora,
                cita.descripcion,
                cita.lugar,
                cita.estado,
                cita.observaciones
            ];

            const result = await this.dbController.query<DBCitaPort>(query, values);
            if (result.rowCount === 0 || !result.rows[0]) {
                console.error('No se pudo agregar la cita. Verifique los datos.');
                return null
            }
            return result.rows[0]; // Retorna la cita insertada
        } catch (error) {
            console.error('Error al agendar cita:', error);
            return null
        }
    }

    // Método para modificar una cita existente
    async modificarCita(cita: DBCitaPort): Promise<DBCitaPort | null> {
        try {
            const query = `UPDATE cita SET tipocita = $1, fecha = $2, hora = $3, descripcion = $4, 
                           lugar = $5, estado = $6, observaciones = $7 
                           WHERE id = $8 RETURNING *`;
            const values = [
                cita.tipocita,
                cita.fecha,
                cita.hora,
                cita.descripcion,
                cita.lugar,
                cita.estado,
                cita.observaciones,
                cita.id
            ];

            const result = await this.dbController.query<DBCitaPort>(query, values);
            if (result.rowCount === 0 || !result.rows[0]) {
                console.error('Error al modificar cita:');
                return null
            }
            return result.rows[0]; // Retorna la cita modificada
        } catch (error) {
            console.error('Error al modificar cita:', error);
            return null
        }
    }

    // Método para cancelar una cita
    async cancelarCita(id: number): Promise<DBCitaPort | null> {
        try {
            const query = 'UPDATE cita SET estado = $1 WHERE id = $2 RETURNING *';
            const result = await this.dbController.query<DBCitaPort>(query, ['cancelada', id]);

            if (result.rowCount === 0 || !result.rows[0]) {
                console.error(`No se encontró la cita con ID: ${id}`); // Lanza un error si no se encontró la cita
                return null

            }
            return result.rows[0]; // Retorna la cita cancelada
        } catch (error) {
            console.error('Error al cancelar cita:', error);
            return null
        }
    }

    // Método para eliminar una cita
    async eliminarCita(id: number): Promise<boolean> {
        try {
            const query = 'DELETE FROM cita WHERE id = $1';
            const result = await this.dbController.query(query, [id]);

            if (result.rowCount > 0 || !result.rows[0]) {
                return true; // Si la fila fue eliminada con éxito
            } else {
                console.error(`No se encontró la cita con ID: ${id}`); // Lanza un error si no se encuentra la cita
                return false;
            }
        } catch (error) {
            console.error('Error al eliminar cita:', error);
            return false;
            }
    }

    // Método para buscar una cita por ID
    async buscarCita(id: number): Promise<DBCitaPort | null> {
        try {
            const query = 'SELECT * FROM cita WHERE id = $1';
            const result = await this.dbController.query<DBCitaPort>(query, [id]);

            if (result.rowCount === 0 || !result.rows[0]) {
                console.error(`No se encontró la cita con ID: ${id}`); // Lanza un error si no se encuentra la cita
                return null

            }
            return result.rows[0]; // Retorna la cita encontrada
        } catch (error) {
            console.error('Error al buscar cita:', error);
            console.error('No se pudo encontrar la cita'); // Lanza un error personalizado
            return null
        }
    }

    // Método para obtener todas las citas
    async obtenerTodasLasCitas(): Promise<DBCitaPort[]> {
        try {
            const query = 'SELECT * FROM cita';
            const result = await this.dbController.query<DBCitaPort>(query, []);
            if (result.rowCount === 0) {
                 console.error('No se encontraron citas'); // Lanza un error si no hay citas
                 return []
            }
            return result.rows; // Retorna todas las citas
        } catch (error) {
            console.error('Error al obtener todas las citas:', error);
            console.error('No se pudieron obtener las citas'); // Lanza un error personalizado
            return []
        }
    }
}
