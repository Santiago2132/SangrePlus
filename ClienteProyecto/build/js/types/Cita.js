export default class Cita {
    id_cita;
    id_cliente;
    descripcion;
    tipo;
    fecha;
    hora;
    lugar;
    estado;
    constructor(id_cita, id_cliente, descripcion, tipo, fecha, hora, lugar, estado) {
        this.id_cita = id_cita;
        this.id_cliente = id_cliente;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.fecha = fecha;
        this.hora = hora;
        this.lugar = lugar;
        this.estado = estado;
    }
}
