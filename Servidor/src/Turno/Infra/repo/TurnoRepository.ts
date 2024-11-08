import NullTurno from "../../Domain/Model/Turno/NullTurno";
import Turno from "../../Domain/Model/Turno/Turno";
import DBTurnoPort from "../../Domain/Port/DB/DBTurnoPort";
import TurnoRepositoryPort from "../../Domain/Port/Driven/TurnoRepositoryPort";
import TurnoDB from "../db/Turnodb";


export default class TurnoRepository implements TurnoRepositoryPort {
    private turnoDB: TurnoDB;

    constructor(turnoDB: TurnoDB) {
        this.turnoDB = turnoDB;
    }

    async updateAll(turnos: Turno[]): Promise<boolean> {
        const dbTurnos = turnos.map(this.toDBTurnoPort); // Convertimos a DBTurnoPort
        return await this.turnoDB.modificarTurnos(dbTurnos);
    }

    async findByNumberCita(id: number): Promise<Turno> {
        const dbTurno = await this.turnoDB.getTurnoByIdCita(id);
        return dbTurno ? this.fromDBTurnoPort(dbTurno) : new NullTurno();
    }

    async findAll(): Promise<Turno[]> {
        const dbTurnos = await this.turnoDB.getTurnos();
        return dbTurnos.map(this.fromDBTurnoPort); // Convertimos cada DBTurnoPort a Turno
    }

    async findById(id: number): Promise<Turno > {
        const dbTurno = await this.turnoDB.getTurnoByIdTurno(id);
        return dbTurno ? this.fromDBTurnoPort(dbTurno) : new NullTurno();
    }

    async save(item: Turno): Promise<Boolean > {
        const dbTurno = await this.turnoDB.agregarTurno(this.toDBTurnoPort(item)); // Convertimos a DBTurnoPort antes de guardar
        if(dbTurno){
            return true
        }else{
            return false
        }    }

    async update(id: number, item: Partial<Turno>): Promise<Boolean> {
        const dbTurno = await this.turnoDB.modificarTurno({
            ...this.toDBTurnoPort(item as Turno),
            id_turno: id,
        });
        if(dbTurno){
            return true
        }else{
            return false
        }
    }

    async delete(id: number): Promise<boolean> {
        return await this.turnoDB.eliminarTurno(id);
    }


        // Convierte un objeto Turno a DBTurnoPort
    toDBTurnoPort(turno: Turno): DBTurnoPort {
        return {
            id_turno: turno.getIdTurno,
            turno: turno.getTurno,
            modulo: turno.getModulo || '',
            numero: turno.getNumero,
            cita_id: turno.getCitaId,
        };
    }

    // Convierte un objeto DBTurnoPort a Turno
    fromDBTurnoPort(dbTurno: DBTurnoPort): Turno {
        return new Turno({
            id_turno:dbTurno.id_turno, 
            turno:dbTurno.turno, 
            modulo:dbTurno.modulo || '' , // Quitar "modulo:"
            numero:dbTurno.numero, 
            cita_id: dbTurno.cita_id
        }
        );
    }

}
