import DatabaseConexion from "./DBC";  // Asegúrate de importar correctamente la clase DatabaseConexion
import DBCitaPort from "../../../Cita/Domain/Port/DB/DBCitaPort";

export default class CitaDB {
    private dbController: DatabaseConexion;

    constructor(dbController: DatabaseConexion) {
        this.dbController = dbController;
    }

    // Método para obtener citas por cliente
    async obtenerCitasPorCliente(cliente_id: number): Promise<DBCitaPort[]> {
        const query = 'SELECT * FROM cita WHERE cliente_id = $1';
        const result = await this.dbController.query<DBCitaPort>(query, [cliente_id]);
        return result.rows; // Retorna las filas obtenidas
    }

    // Método para agregar una nueva cita
    async agendarCita(cita: DBCitaPort): Promise<DBCitaPort> {
        const query = `INSERT INTO cita (tipocita, cliente_id, fecha, hora, descripcion, lugar, estado, observaciones)
                       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
        const values = [
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
        return result.rows[0]; // Retorna la cita insertada
    }

    // Método para modificar una cita existente
    async modificarCita(cita: DBCitaPort): Promise<DBCitaPort> {
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
        return result.rows[0]; // Retorna la cita modificada
    }

    // Método para cancelar una cita
    async cancelarCita(id: number): Promise<DBCitaPort> {
        const query = 'UPDATE cita SET estado = $1 WHERE id = $2 RETURNING *';
        const result = await this.dbController.query<DBCitaPort>(query, ['cancelada', id]);
        return result.rows[0]; // Retorna la cita cancelada
    }

    // Método para eliminar una cita
    async eliminarCita(id: number): Promise<boolean> {
        const query = 'DELETE FROM cita WHERE id = $1';
        const result = await this.dbController.query(query, [id]);

        if (result.rowCount > 0) {
            return true; // Si la fila fue eliminada con éxito
        } else {
            return false; // No se encontró la cita a eliminar
        }
    }

    // Método para buscar una cita por ID
    async buscarCita(id: number): Promise<DBCitaPort | null> {
        const query = 'SELECT * FROM cita WHERE id = $1';
        const result = await this.dbController.query<DBCitaPort>(query, [id]);

        if (result.rowCount === 0) {
            return null; // No se encontró la cita
        }

        return result.rows[0]; // Retorna la cita encontrada
    }

    // Método para obtener todas las citas
    async obtenerTodasLasCitas(): Promise<DBCitaPort[]> {
        const query = 'SELECT * FROM cita';
        const result = await this.dbController.query<DBCitaPort>(query, []);
        return result.rows; // Retorna todas las citas
    }
}
