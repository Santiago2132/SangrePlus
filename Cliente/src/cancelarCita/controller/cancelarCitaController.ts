import cancelarCitaView from "../view/cancelarCitaView.js";
import cancelarCitaTemplate from "../template/cancelarCitaTemplate.js";
import CancelarCitaModel from "../model/cancelarCitaModel.js";

export default class cancelarCitaController {
    private cancelarCitaView: cancelarCitaView;
    private cancelarCitaModel: CancelarCitaModel;

    constructor() {
        this.cancelarCitaModel = new CancelarCitaModel();
        this.cancelarCitaView = new cancelarCitaView(new cancelarCitaTemplate());
    }

    public init = (): void => {
        document.addEventListener('DOMContentLoaded', () => {
            this.cancelarCitaView.init().then(() => {
                this.addEventListeners();
            }).catch((error) => {
                console.error('Error initializing cancelarCitaView:', error);
            });
        });
    }

    private addEventListeners = async (): Promise<void> => {
        const buscarCitaButton = document.getElementById("buscar-cita-cancelar");

        if (buscarCitaButton) {
            buscarCitaButton.addEventListener("click", await this.handleBuscarCita);
        } else {
            console.error("El botón 'Buscar Cita' no se encontró.");
        }

        const confirmarCancelacionButton = document.getElementById("confirmar-cancelacion");
        if (confirmarCancelacionButton) {
            confirmarCancelacionButton.addEventListener("click", await this.handleConfirmarCancelacion);
        }

        const cancelarCancelacionButton = document.getElementById("cancelar-cancelacion");
        if (cancelarCancelacionButton) {
            cancelarCancelacionButton.addEventListener("click", await this.handleCancelarCancelacion);
        }
    }

    private handleBuscarCita = async(): Promise<void> => {
        // Obtener el número de cita desde la vista
        const numeroCita = this.cancelarCitaView.getNumeroCitaCancelar();
        
        if (numeroCita === '') {
            alert("Por favor, ingresa un número de cita válido.");
            return;
        }

        // Llamar al modelo para buscar la cita
        const cita = await this.cancelarCitaModel.buscarCita(numeroCita);

        if (cita) {
            this.cancelarCitaView.showConfirmPanel(); // Mostrar panel de confirmación
        } else {
            alert("No existe una cita con ese número.");
        }
    }

    private  handleConfirmarCancelacion = async(): Promise<void> => {
        // Obtener el número de cita desde la vista
        const numeroCita = this.cancelarCitaView.getNumeroCitaCancelar();
        console.log(numeroCita + 'en controller')

        if (numeroCita === '') {
            alert("Por favor, ingresa un número de cita válido.");
            return;
        }

        // Llamar al método cancelarCitaModel para cancelar la cita
        const citaCancelada = await this.cancelarCitaModel.cancelarCita(numeroCita);

        if (citaCancelada) {
            this.cancelarCitaView.hideConfirmPanel(); // Ocultar el panel de confirmación
            alert(`La cita número ${numeroCita} ha sido cancelada con éxito.`); // Mostrar mensaje de éxito con el número de cita
            (document.getElementById("numero-cita-cancelar") as HTMLInputElement).value = ''; // Limpiar campo
        } else {
            alert(`No se pudo cancelar la cita con número ${numeroCita}. Verifica el número de cita.`); // Mostrar error con el número de cita
        }
    }

    private handleCancelarCancelacion = (): void => {
        this.cancelarCitaView.hideConfirmPanel(); // Ocultar el panel de confirmación
    }
}
