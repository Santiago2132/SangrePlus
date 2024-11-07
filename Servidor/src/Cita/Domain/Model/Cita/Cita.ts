import Cliente from "../../../../Cliente/Domain/Model/Cliente/Cliente";
import Turno from "../../../../Turno/Domain/Model/Turno/Turno";

export interface CitaInterface {
    id: number;
    tipocita: string;
    fecha: Date;
    hora: string;
    descripcion: string;
    cliente: Cliente;
    lugar: string;
    estado: string;
    observaciones: string;
}

export default class Cita   {

    id: number;
    tipocita: string;
    fecha: Date;
    hora: string;
    descripcion: string;
    lugar: string;
    estado: string;
    observaciones: string;
    cliente: Cliente;
    

    constructor(citaData: CitaInterface) {
        this.id = citaData.id;
        this.tipocita = citaData.tipocita;
        this.fecha = citaData.fecha;
        this.hora = citaData.hora;
        this.descripcion = citaData.descripcion;
        this.lugar = citaData.lugar;
        this.estado = citaData.estado;
        this.observaciones = citaData.observaciones;
        this.cliente = citaData.cliente;
    }

    public  isNull(): boolean {
        return false;
    }

    public getId(): number {
        return this.id;
    }
    public getTipocita(): string {
        return this.tipocita;
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
    public getEstado(): string {
        return this.estado;
    }
    public getObservaciones(): string {
        return this.observaciones;
    }
    public getCliente(): Cliente {
        return this.cliente;
    }


    public setId(id: number) {
        this.id = id;
    }
    public setTipocita(tipocita: string) {
        this.tipocita = tipocita;
    }
    public setFecha(fecha: Date) {
        this.fecha = fecha;
    }
    public setHora(hora: string) {
        this.hora = hora;
    }
    public setDescripcion(descripcion: string) {
        this.descripcion = descripcion;
    }
    public setLugar(lugar: string) {
        this.lugar = lugar;
    }
    public setEstado(estado: string) {
        this.estado = estado;
    }
    public setObservaciones(observaciones: string) {
        this.observaciones = observaciones;
    }
    public setCliente(cliente: Cliente) {
        this.cliente = cliente;
    }
    

}
