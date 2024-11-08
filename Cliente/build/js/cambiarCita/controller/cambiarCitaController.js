import CambiarCitaModel from "../model/cambiarCitaModel.js";
import CambiarCitaView from "../view/cambiarCitaView.js";
export default class CambiarCitaController {
    model;
    view;
    constructor() {
        this.model = new CambiarCitaModel();
        this.view = new CambiarCitaView();
        // Asignar el evento para buscar una cita
        document.addEventListener('buscarCita', (event) => {
            this.buscarCita(event.detail);
        });
        // Asignar el evento para cambiar la cita
        document.addEventListener('cambiarCita', (event) => {
            this.cambiarCita(event.detail);
        });
    }
    init() {
        this.view.render();
    }
    buscarCita(numeroCita) {
        const cita = this.model.consultarCita(numeroCita);
        console.log(cita);
        if (cita && this.isValidCita(cita)) {
            console.log(cita);
            this.view.cargarDatosCita(cita); // Pasa el objeto completo de cita
            this.view.mostrarCita(cita); // Ahora también pasa el objeto completo para mostrar la cita
        }
        else {
            alert(`No se encontró la cita con el número ${numeroCita}`);
        }
    }
    isValidCita(cita) {
        return cita.id !== undefined &&
            cita.tipocita !== undefined &&
            cita.fecha instanceof Date &&
            cita.hora !== undefined &&
            cita.descripcion !== undefined &&
            cita.cliente !== undefined &&
            cita.lugar !== undefined &&
            cita.estado !== undefined &&
            cita.observaciones !== undefined;
    }
    cambiarCita(nuevosDatos) {
        const mensaje = this.model.cambiarCita(1, nuevosDatos); // Aquí deberías agregar la lógica para obtener el ID adecuado
        alert(mensaje);
        this.view.mostrarMensajeExito();
    }
}
