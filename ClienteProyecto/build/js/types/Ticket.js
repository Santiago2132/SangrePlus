export default class Ticket {
    id_ticket;
    id_cita;
    numero;
    fecha;
    hora;
    vencido;
    prioridad;
    constructor(id_ticket, id_cita, numero, fecha, hora, vencido, prioridad) {
        this.id_ticket = id_ticket;
        this.id_cita = id_cita;
        this.numero = numero;
        this.fecha = fecha;
        this.hora = hora;
        this.vencido = vencido;
        this.prioridad = prioridad;
    }
}
