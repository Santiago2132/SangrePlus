import Cita from "../Cita/Cita";

export default interface TurnoInterface {
    idTurno: number;
    turno: string;
    modulo: string;
}

export default class Turno implements TurnoInterface {
    idTurno: number;
    turno: string;
    modulo: string;

    constructor(idTurno: number, turno: string, modulo: string) {
        this.idTurno = idTurno;
        this.turno = turno;
        this.modulo = modulo;
    }
}
