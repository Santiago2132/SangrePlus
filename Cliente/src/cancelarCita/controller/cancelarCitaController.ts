import cancelarCitaView from "../view/cancelarCitaView.js";
import cancelarCitaModel from "../model/cancelarCitaModel.js";
import cancelarCitaTemplate from "../template/cancelarCitaTemplate.js";

export default class cancelarCitaController {
    private cancelarCitaView: cancelarCitaView;
    private cancelarCitaModel: cancelarCitaModel;

    constructor() {
        this.cancelarCitaModel = new cancelarCitaModel();
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

    private addEventListeners = (): void => {
        const buscarCitaButton = document.getElementById("buscar-cita");

        if (buscarCitaButton) {
            buscarCitaButton.addEventListener("click", this.handleBuscarCita);
        } else {
            console.error("El botón 'Buscar Cita' no se encontró.");
        }
    }

    private handleBuscarCita = (): void => {
        const numeroCita = (document.getElementById("numero-cita") as HTMLInputElement).value.trim();
        const cita = this.cancelarCitaModel.buscarCita(numeroCita);

        if (cita) {
            this.cancelarCitaView.showInfoPanel(`
                <h3>Información de la Cita</h3>
                <p><strong>Fecha:</strong> ${cita.fecha}</p>
                <p><strong>Hora:</strong> ${cita.hora}</p>
                <p><strong>Lugar:</strong> ${cita.lugar}</p>
                <button id="cancelar-cita-button" class="cancelar-cita-button">Cancelar Cita</button>
            `);
            this.addEventListenersToCancelButton(); // Asignar evento al botón de cancelar
        } else {
            alert("No existe una cita con ese número.");
        }
    }

    private addEventListenersToCancelButton = (): void => {
        const cancelarCitaButton = document.getElementById("cancelar-cita-button");

        if (cancelarCitaButton) {
            cancelarCitaButton.addEventListener("click", this.handleCancelarCita);
        } else {
            console.error("El botón 'Cancelar Cita' no se encontró.");
        }
    }

    private handleCancelarCita = (): void => {
        console.log("Intentando cancelar la cita..."); // Para verificar si se llama a la función
        const numeroCita = (document.getElementById("numero-cita") as HTMLInputElement).value.trim();
        const citaCancelada = this.cancelarCitaModel.cancelarCita(numeroCita);

        if (citaCancelada) {
            this.cancelarCitaView.showInfoPanel("<p>La cita ha sido cancelada con éxito.</p>");
            // Reiniciar el campo de entrada
            (document.getElementById("numero-cita") as HTMLInputElement).value = '';
        } else {
            alert("No se pudo cancelar la cita. Verifica el número de cita.");
        }
    }
}