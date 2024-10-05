export default class Agente {
    id_agente: number;
    nombres: string;
    apellidos: string;
    lugar: string;

    constructor(id_agente: number, nombres: string, apellidos: string, lugar: string) {
        this.id_agente = id_agente;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.lugar = lugar;
    }
}
