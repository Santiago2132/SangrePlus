import cancelarCitaTemplate from "../template/cancelarCitaTemplate.js";
import cancelarCitaView from "../view/cancelarCitaView.js";
export default class cancelarCitaController {
    cancelarCitaView;
    constructor() {
        this.cancelarCitaView = new cancelarCitaView(new cancelarCitaTemplate());
    }
    init = () => {
        document.addEventListener('DOMContentLoaded', () => {
            this.cancelarCitaView.init().then(() => {
                this.addEventListeners();
            }).catch((error) => {
                console.error('Error initializing cancelarCitaView:', error);
            });
        });
    };
    // Método para agregar los eventos al iniciar el controlador
    addEventListeners = () => {
        const buscarCitaButton = document.getElementById("buscar-cita");
        const cancelarCitaButton = document.getElementById("cancelar-cita-button");
        // Evento para buscar cita y mostrar panel
        buscarCitaButton?.addEventListener("click", this.handleBuscarCita);
        // Evento para cancelar la cita
        cancelarCitaButton?.addEventListener("click", this.handleCancelarCita);
    };
    // Lógica para mostrar el panel de información de la cita al buscar
    handleBuscarCita = () => {
        const numeroCita = document.getElementById("numero-cita").value;
        const infoCitaPanel = document.getElementById("info-cita-panel");
        // Validar que se haya ingresado un número de cita
        if (!numeroCita) {
            alert("Por favor, ingresa un número de cita válido.");
            return;
        }
        // Mostrar el panel de información con datos ficticios
        infoCitaPanel?.classList.remove("hidden");
        // Aquí puedes realizar una búsqueda real de la cita usando `numeroCita`
        console.log(`Buscando cita con número: ${numeroCita}`);
    };
    // Lógica para cancelar la cita
    handleCancelarCita = () => {
        const numeroCita = document.getElementById("numero-cita").value;
        // Confirmar la cancelación
        const confirmar = confirm(`¿Estás seguro de que deseas cancelar la cita #${numeroCita}?`);
        if (confirmar) {
            // Aquí puedes agregar la lógica para cancelar la cita en tu base de datos o backend
            console.log(`Cita con número ${numeroCita} ha sido cancelada.`);
            // Ocultar el panel de información después de cancelar
            const infoCitaPanel = document.getElementById("info-cita-panel");
            infoCitaPanel?.classList.add("hidden");
            // Limpiar el campo de número de cita
            document.getElementById("numero-cita").value = '';
        }
    };
}
