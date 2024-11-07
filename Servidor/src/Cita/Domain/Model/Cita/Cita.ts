import Cliente from "../../../../Cliente/Domain/Model/Cliente/Cliente";
import Turno from "../../../../Turno/Domain/Model/Turno/Turno";


export default interface CitaInterface {
    id: number;
    tipocita: string;
    fecha: Date;
    hora: string;
    descripcion: string;
    cliente_id: number;
    lugar: string;
    estado: string;
    observaciones: string;

    id SERIAL PRIMARY KEY,
    tipocita VARCHAR(255) NOT NULL,
    cliente_id INTEGER REFERENCES cliente(id) ON DELETE SET NULL,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    descripcion TEXT NOT NULL,
    lugar VARCHAR(255) NOT NULL,
    estado VARCHAR(255) CHECK (estado IN ('pendiente', 'asistida', 'cancelada')) NOT NULL,
    observaciones TEXT
}


export default class Cita implements CitaInterface {
    id: number;
    cliente: Cliente;
    fecha: Date;
    hora: string;
    descripcion: string;
    lugar: string;
    turno: Turno
    constructor(
        id: number,
        cliente: Cliente,
        fecha: Date,
        hora: string,
        descripcion: string,
        lugar: string,
        turno: Turno
    ) {
        this.id = id;
        this.cliente = cliente;
        this.fecha = fecha;
        this.hora = hora;
        this.descripcion = descripcion;
        this.lugar = lugar;
        this.turno = turno;
    }
    public getId(): number{
        return this.id;
    }
    public getCliente(): Cliente {
        return this.cliente;
    }
    public getFecha(): Date {
        return this.fecha;
    }
    public getHora(): string {
        return this.hora;
    }
    public getDescripcion(): string {
        return this.descripcion;
    }
    public getLugar(): string {
        return this.lugar;
    }
    // Método para obtener el turno de la cita
    public getTurno(): Turno {
        return this.turno;
    }

    public setId(id: number){
        this.id = id;
    }
    public setCliente(cliente: Cliente){
        this.cliente = cliente;
    }
    public setFecha(fecha: Date){
        this.fecha = fecha;
    }
    public setHora(hora: string){
        this.hora = hora;
    }
    public setDescripcion(descripcion: string){
        this.descripcion = descripcion;
    }
    public setTurno(turno: Turno){
        this.turno = turno;
    }

    // Método para obtener un resumen de la cita
    public obtenerResumen(): string {
        return `Cita para ${this.cliente.nombre} ${this.cliente.apellido} el ${this.fecha.toLocaleDateString()} a las ${this.hora}, en ${this.lugar}.`;
    }
}