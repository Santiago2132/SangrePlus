export default class Anotacion {
    id_anotacion;
    id_cita;
    id_agente;
    anotacion;
    fecha;
    constructor(id_anotacion, id_cita, id_agente, anotacion, fecha) {
        this.id_anotacion = id_anotacion;
        this.id_cita = id_cita;
        this.id_agente = id_agente;
        this.anotacion = anotacion;
        this.fecha = fecha;
    }
}
