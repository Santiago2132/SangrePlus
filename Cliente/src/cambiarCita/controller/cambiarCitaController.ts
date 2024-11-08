import CambiarCitaModel from "../model/cambiarCitaModel.js";
import CambiarCitaView from "../view/cambiarCitaView.js";

export default class CambiarCitaController {
    private model: CambiarCitaModel;
    private view: CambiarCitaView;

    constructor() {
        this.model = new CambiarCitaModel();
        this.view = new CambiarCitaView();

        // Asignar el evento para buscar una cita
        document.addEventListener('buscarCita', (event: any) => {
            this.buscarCita(event.detail);
        });

        // Asignar el evento para cambiar la cita
        document.addEventListener('cambiarCita', (event: any) => {
            this.cambiarCita(event.detail);
        });
    }

    public init(): void {
        this.view.render();
    }

    private buscarCita(numeroCita: string): void {
        const cita = this.model.consultarCita(numeroCita);

        if (cita) {
            this.view.mostrarCita(cita);
        } else {
            alert(`No se encontró la cita con el número ${numeroCita}`);
        }
    }

    private cambiarCita(nuevosDatos: Record<string, string | undefined>): void {
        const mensaje = this.model.cambiarCita(1, nuevosDatos); // Aquí deberías agregar la lógica para obtener el ID adecuado
        alert(mensaje);
        this.view.mostrarMensajeExito();
    }
}
