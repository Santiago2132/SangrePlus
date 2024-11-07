export default interface DBTurno {
    id_turno: number;
    turno: string;
    modulo: string;
    numero: number;
    cita_id: number | null;
}
