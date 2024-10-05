export default class Anotacion {
    id_anotacion: number;
    id_cita: number;
    id_agente: number;
    anotacion: string;
    fecha: Date;

    constructor(id_anotacion: number, id_cita: number, id_agente: number, anotacion: string, fecha: Date) {
        this.id_anotacion = id_anotacion;
        this.id_cita = id_cita;
        this.id_agente = id_agente;
        this.anotacion = anotacion;
        this.fecha = fecha;
    }
}
