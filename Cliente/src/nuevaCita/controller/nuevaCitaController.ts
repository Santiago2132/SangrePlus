import NuevaCitaTemplate from "../template/nuevaCitaTemplate.js";
import NuevaCitaView from "../view/nuevaCitaView.js";
import NuevaCitaModel from "../model/nuevaCitaModel.js";

export default class NuevaCitaController {
    private nuevaCitaView: NuevaCitaView;
    private nuevaCitaModel: NuevaCitaModel;

    constructor() {
        const template = new NuevaCitaTemplate();
        this.nuevaCitaModel = new NuevaCitaModel();
        this.nuevaCitaView = new NuevaCitaView(template,  this.handleCitaSubmission);
    }

    public init = (): void => {
        document.addEventListener('DOMContentLoaded', () => {
            this.nuevaCitaView.init()
                .then(() => {
                    console.log('NuevaCitaView initialized and rendered.');
                })
                .catch((error) => {
                    console.error('Error initializing NuevaCitaView:', error);
                });
        });
    }

    private  handleCitaSubmission = async(citaData: Record<string, string | undefined>): Promise<void> => {
        console.log("Datos de la cita recibidos en el controlador:", citaData);

        if (this.validateCitaData(citaData)) {
            const citaId: string = await  this.nuevaCitaModel.procesarCita(citaData);
            this.nuevaCitaView.showCitaId(citaId);
            this.nuevaCitaView.clearForm();
        } else {
            console.error('Error: Datos de la cita no válidos');
            this.nuevaCitaView.showError("Por favor, completa todos los campos correctamente.");
        }
    }

    private validateCitaData(citaData: Record<string, string | undefined>): boolean {
        return Boolean(citaData['id']) && Boolean(citaData['nombre']) && Boolean(citaData['apellido']) &&
               Boolean(citaData['edad']) && Boolean(citaData['fecha']) && Boolean(citaData['hora']);
    }
}
