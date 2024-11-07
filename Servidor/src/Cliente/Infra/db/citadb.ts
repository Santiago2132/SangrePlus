class CitaService {
    private pool: Pool;

    constructor(pool: Pool) {
        this.pool = pool;
    }

    async obtenerCitasPorCliente(cliente_id: number): Promise<Cita[]> {
        const result = await this.pool.query('SELECT * FROM cita WHERE cliente_id = $1', [cliente_id]);
        return result.rows;
    }

    async agregarCita(cita: Cita): Promise<Cita> {
        const result = await this.pool.query(
            `INSERT INTO cita (tipocita, cliente_id, fecha, hora, descripcion, lugar, estado, observaciones) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
            [cita.tipocita, cita.cliente_id, cita.fecha, cita.hora, cita.descripcion, cita.lugar, cita.estado, cita.observaciones]
        );
        return result.rows[0];
    }

    async cancelarCita(id: number): Promise<Cita> {
        const result = await this.pool.query(
            'UPDATE cita SET estado = $1 WHERE id = $2 RETURNING *',
            ['cancelada', id]
        );
        return result.rows[0];
    }

    async modificarCita(cita: Cita): Promise<Cita> {
        const result = await this.pool.query(
            `UPDATE cita SET tipocita = $1, fecha = $2, hora = $3, descripcion = $4, lugar = $5, estado = $6, observaciones = $7 
             WHERE id = $8 RETURNING *`,
            [cita.tipocita, cita.fecha, cita.hora, cita.descripcion, cita.lugar, cita.estado, cita.observaciones, cita.id]
        );
        return result.rows[0];
    }

    // Otros métodos según sea necesario
}
