// src/nuevaCita/model/nuevaCitaModel.ts

export default class NuevaCitaModel {
    constructor() {
        console.log('Constructor de NuevaCitaModel inicializado.');
    }

    public procesarCita(citaData: Record<string, string>): void {
        console.log('Datos de la cita procesados:', citaData);
    }
}
