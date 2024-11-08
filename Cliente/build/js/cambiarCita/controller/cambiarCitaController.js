import CambiarCitaModel from "../model/cambiarCitaModel.js";
import CambiarCitaView from "../view/cambiarCitaView.js";
export default class CambiarCitaController {
    model;
    view;
    constructor() {
        this.model = new CambiarCitaModel();
        this.view = new CambiarCitaView();
        // Asignar el evento para buscar una cita
        document.addEventListener('buscarCita', async (event) => {
            await this.buscarCita(event.detail);
        });
        // Asignar el evento para cambiar la cita
        document.addEventListener('cambiarCita', async (event) => {
            await this.cambiarCita(event.detail);
        });
    }
    init() {
        this.view.render();
    }
    async buscarCita(numeroCita) {
        const cita = await this.model.consultarCita(numeroCita);
        console.log(cita);
        if (cita) {
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
    async cambiarCita(nuevosDatos) {
        const mensaje = await this.model.cambiarCita(1, nuevosDatos); // Aquí deberías agregar la lógica para obtener el ID adecuado
        alert(mensaje);
        await this.view.mostrarMensajeExito();
    }
}
