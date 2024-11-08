// src/nuevaCita/controller/nuevaCitaController.ts

import NuevaCitaTemplate from "../template/nuevaCitaTemplate.js";
import NuevaCitaView from "../view/nuevaCitaView.js";
import NuevaCitaModel from "../model/nuevaCitaModel.js";

export default class NuevaCitaController {
    private nuevaCitaView: NuevaCitaView;
    private nuevaCitaModel: NuevaCitaModel;

    constructor() {
        const template = new NuevaCitaTemplate();
        this.nuevaCitaModel = new NuevaCitaModel();
        this.nuevaCitaView = new NuevaCitaView(template, this.handleCitaSubmission); // Pasamos el callback
    }

    public init = (): void => {
        this.render();
    }

    public render = (): void => {
        document.addEventListener('DOMContentLoaded', () => {
            this.nuevaCitaView.init().then(() => {
                console.log('NuevaCitaView initialized and rendered.');
            }).catch((error) => {
                console.error('Error initializing NuevaCitaView:', error);
            });
        });
    }

    private handleCitaSubmission = (citaData: Record<string, string>): void => {
        console.log("Datos de la cita recibidos en el controlador:", citaData);
        const citaId: string = this.nuevaCitaModel.procesarCita(citaData); // Ahora citaId es un string
        this.nuevaCitaView.showCitaId(citaId); // Muestra el ID en la vista
        this.nuevaCitaView.clearForm(); // Limpia el formulario
    }
}
