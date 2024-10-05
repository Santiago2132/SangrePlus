export default class Ticket {
    id_ticket: number;
    id_cita: number;
    numero: number;
    fecha: Date;
    hora: string;
    vencido: boolean;
    prioridad: boolean;

    constructor(id_ticket: number, id_cita: number, numero: number, fecha: Date, hora: string, vencido: boolean, prioridad: boolean) {
        this.id_ticket = id_ticket;
        this.id_cita = id_cita;
        this.numero = numero;
        this.fecha = fecha;
        this.hora = hora;
        this.vencido = vencido;
        this.prioridad = prioridad;
    }
}
