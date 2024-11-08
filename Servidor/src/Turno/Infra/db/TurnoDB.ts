import DatabaseConexion from "../../../Turno/Infra/db/DBC";
import DBTurnoPort from "../../Domain/Port/DB/DBTurnoPort"; // Asegúrate de que esta interfaz esté correctamente importada

export default class TurnoDB {
    private dbController: DatabaseConexion;

    constructor(dbController: DatabaseConexion) {
        this.dbController = dbController;
    }

    // Método para obtener un turno por ID de cita
    async getTurnoByIdCita(id: number): Promise<DBTurnoPort | null> {
        try {
            const query = 'SELECT * FROM turno WHERE cita_id = $1';
            const result = await this.dbController.query<DBTurnoPort>(query, [id]);

            if (result.rowCount === 0 || !result.rows[0]) {
                console.warn(`Turno con ID de Cita ${id} no encontrado`);
                return null; // No se encontró el turno
            }
            return result.rows[0]; // Retorna el turno encontrado
        } catch (error) {
            console.error('Error al obtener turno por ID de Cita:', error);
            return null;
        }
    }

    // Método para obtener un turno por ID de turno
    async getTurnoByIdTurno(id: number): Promise<DBTurnoPort | null> {
        try {
            const query = 'SELECT * FROM turno WHERE id_turno = $1';
            const result = await this.dbController.query<DBTurnoPort>(query, [id]);

            if (result.rowCount === 0 || !result.rows[0]) {
                console.warn(`Turno con ID ${id} no encontrado`);
                return null; // No se encontró el turno
            }
            return result.rows[0]; // Retorna el turno encontrado
        } catch (error) {
            console.error('Error al obtener turno por ID de turno:', error);
            return null;
        }
    }

    // Método para obtener todos los turnos
    async getTurnos(): Promise<DBTurnoPort[]> {
        try {
            const query = 'SELECT * FROM turno';
            const result = await this.dbController.query<DBTurnoPort>(query,[]);

            return result.rows; // Retorna todos los turnos encontrados
        } catch (error) {
            console.error('Error al obtener turnos:', error);
            return [];
        }
    }

    // Método para modificar turnos existentes y cambiar su puesto (número) según el id_turno
    async modificarTurnos(turnos: DBTurnoPort[]): Promise<boolean> {
        try {
            // Ordenamos los turnos de acuerdo al número para que los movimientos se realicen de manera lógica
            turnos.sort((a, b) => a.numero - b.numero); // Esto ordena los turnos por el campo 'numero'

            // Modificamos los turnos de acuerdo al nuevo orden
            for (const turno of turnos) {
                // Actualizamos cada turno, cambiando su posición (número) según el orden recibido
                const query = `UPDATE turno 
                            SET turno = $1, modulo = $2, numero = $3, cita_id = $4
                            WHERE id_turno = $5`;
                const values = [
                    turno.turno,          // El nombre o tipo del turno
                    turno.modulo,         // El módulo asociado al turno
                    turno.numero,         // El nuevo puesto (número) del turno
                    turno.cita_id,        // ID de la cita asociada
                    turno.id_turno        // ID del turno a actualizar
                ];

                const result = await this.dbController.query(query, values);

                if (result.rowCount === 0) {
                    console.warn(`No se pudo modificar el turno con ID ${turno.id_turno}`);
                    return false; // Si no se pudo modificar algún turno, retornamos false
                }
            }
            return true; // Si todos los turnos fueron modificados correctamente, retornamos true
        } catch (error) {
            console.error('Error al modificar turnos:', error);
            return false;
        }
    }


    // Método para agregar un nuevo turno
    async agregarTurno(turno: DBTurnoPort): Promise<boolean> {
        try {
            const query = `INSERT INTO turno (id_turno, turno, modulo, numero, cita_id)
                           VALUES ($1, $2, $3, $4, $5) RETURNING *`;
            const values = [
                turno.id_turno,
                turno.turno,
                turno.modulo,
                turno.numero,
                turno.cita_id
            ];

            const result = await this.dbController.query(query, values);
            if (result.rowCount === 0 || !result.rows[0]) {
                throw new Error('No se pudo agregar el turno');
            }
            return true; // Retorna true si el turno fue agregado exitosamente
        } catch (error) {
            console.error('Error al agregar turno:', error);
            return false; // Si ocurre un error, retorna false
        }
    }

    // Método para eliminar un turno
    async eliminarTurno(id: number): Promise<boolean> {
        try {
            const query = 'DELETE FROM turno WHERE id_turno = $1';
            const result = await this.dbController.query(query, [id]);

            if (result.rowCount === 0) {
                console.warn(`No se encontró el turno con ID ${id} para eliminar`);
                return false; // Retorna false si no se encontró el turno para eliminar
            }
            return true; // Retorna true si el turno fue eliminado exitosamente
        } catch (error) {
            console.error('Error al eliminar turno:', error);
            return false; // Si ocurre un error, retorna false
        }
    }

    async modificarTurno(turno: DBTurnoPort): Promise<boolean> {
        try {
            const query = `UPDATE turno 
                           SET turno = $1, modulo = $2, numero = $3, cita_id = $4
                           WHERE id_turno = $5`;
            const values = [
                turno.turno,       // El nombre o tipo del turno
                turno.modulo,      // El módulo asociado al turno
                turno.numero,      // La posición (número) del turno
                turno.cita_id,     // ID de la cita asociada
                turno.id_turno     // ID del turno a actualizar
            ];
    
            const result = await this.dbController.query(query, values);
    
            if (result.rowCount === 0) {
                console.warn(`No se encontró el turno con ID ${turno.id_turno} para modificar`);
                return false; // Retorna false si no se encontró el turno para modificar
            }
            return true; // Retorna true si el turno fue modificado exitosamente
        } catch (error) {
            console.error('Error al modificar turno:', error);
            return false; // Si ocurre un error, retorna false
        }
    }


}
