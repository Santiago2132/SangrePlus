import Cliente from "../Cliente/Cliente";

export default interface CitaInterface {
    id: number;
    cliente: Cliente;
    idTurno: number;
    fecha: Date;
    hora: string;
    edad: string;
    descripcion: string;
    lugar: string;
}


export default class Cita implements CitaInterface {
    id: number;
    cliente: Cliente;
    idTurno: number;
    fecha: Date;
    hora: string;
    edad: string;
    descripcion: string;
    lugar: string;

    constructor(
        id: number,
        cliente: Cliente,
        idTurno: number,
        fecha: Date,
        hora: string,
        edad: string,
        descripcion: string,
        lugar: string
    ) {
        this.id = id;
        this.cliente = cliente;
        this.idTurno = idTurno;
        this.fecha = fecha;
        this.hora = hora;
        this.edad = edad;
        this.descripcion = descripcion;
        this.lugar = lugar;
    }

    // Método para obtener un resumen de la cita
    public obtenerResumen(): string {
        return `Cita para ${this.cliente.nombre} ${this.cliente.apellido} el ${this.fecha.toLocaleDateString()} a las ${this.hora}, en ${this.lugar}.`;
    }
}