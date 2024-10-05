export default class Cita {
    id_cita: number;
    id_cliente: number;
    descripcion: string;
    tipo: 'reclamo' | 'devolucion' | 'accesoria';
    fecha: Date;
    hora: string;
    lugar: string;
    estado: 'programada' | 'cancelada' | 'no_asistida';

    constructor(id_cita: number, id_cliente: number, descripcion: string, tipo: 'reclamo' | 'devolucion' | 'accesoria', fecha: Date, hora: string, lugar: string, estado: 'programada' | 'cancelada' | 'no_asistida') {
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
