import NuevaCitaTemplate from "../template/nuevaCitaTemplate.js";
import NuevaCitaView from "../view/nuevaCitaView.js";
import NuevaCitaModel from "../model/nuevaCitaModel.js";
export default class NuevaCitaController {
    nuevaCitaView;
    nuevaCitaModel;
    constructor() {
        const template = new NuevaCitaTemplate();
        this.nuevaCitaModel = new NuevaCitaModel();
        this.nuevaCitaView = new NuevaCitaView(template, this.handleCitaSubmission); // Pasamos el callback
    }
    init = () => {
        this.render();
    };
    render = () => {
        document.addEventListener('DOMContentLoaded', () => {
            this.nuevaCitaView.init().then(() => {
                console.log('NuevaCitaView initialized and rendered.');
            }).catch((error) => {
                console.error('Error initializing NuevaCitaView:', error);
            });
        });
    };
    handleCitaSubmission = (citaData) => {
        console.log("Datos de la cita recibidos en el controlador:", citaData);
        this.nuevaCitaModel.procesarCita(citaData); // Pasa los datos al modelo para su procesamiento
    };
}
