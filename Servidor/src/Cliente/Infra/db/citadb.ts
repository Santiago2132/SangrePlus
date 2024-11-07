import { Pool } from 'pg'; // Import the Pool type from 'pg' package
import DBConnection from './DBC'; // Tu clase DBConnection

export default class CitaDB {
    private pool: Pool;

    // Constructor donde se inyecta el objeto DBConnection y se obtiene el pool
    constructor(private readonly dbConnection: DBConnection) {
        this.pool = dbConnection.getPool(); // Obtener el pool de conexiones
    }

    // Método para obtener las citas por cliente
    async obtenerCitasPorCliente(cliente_id: number): Promise<Cita[]> {
        const result = await this.pool.query('SELECT * FROM cita WHERE cliente_id = $1', [cliente_id]);
        return result.rows; // Retorna las filas obtenidas
    }

    // Método para agregar una cit
    async agregarCita(cita: Cita): Promise<Cita> {
        const result = await this.pool.query(
            `INSERT INTO cita (tipocita, cliente_id, fecha, hora, descripcion, lugar, estado, observaciones) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
            [cita.tipocita, cita.cliente_id, cita.fecha, cita.hora, cita.descripcion, cita.lugar, cita.estado, cita.observaciones]
        );
        return result.rows[0]; // Retorna la cita insertada
    }

    // Método para cancelar una cita
    async cancelarCita(id: number): Promise<Cita> {
        const result = await this.pool.query(
            'UPDATE cita SET estado = $1 WHERE id = $2 RETURNING *',
            ['cancelada', id]
        );
        return result.rows[0]; // Retorna la cita cancelada
    }

    // Método para modificar una cita
    async modificarCita(cita: Cita): Promise<Cita> {
        const result = await this.pool.query(
            `UPDATE cita SET tipocita = $1, fecha = $2, hora = $3, descripcion = $4, lugar = $5, estado = $6, observaciones = $7 
             WHERE id = $8 RETURNING *`,
            [cita.tipocita, cita.fecha, cita.hora, cita.descripcion, cita.lugar, cita.estado, cita.observaciones, cita.id]
        );
        return result.rows[0]; // Retorna la cita modificada
    }
}
