import Cliente from "../Cliente/Cliente";
import Turno from "../Turno/Turno";

export default interface CitaInterface {
    id: number;
    cliente: Cliente;
    fecha: Date;
    turno: Turno
    hora: string;
    descripcion: string;
    lugar: string;
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