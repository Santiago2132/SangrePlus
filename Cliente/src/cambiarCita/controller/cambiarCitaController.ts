import CambiarCitaModel from "../model/cambiarCitaModel.js";
import CambiarCitaView from "../view/cambiarCitaView.js";

export interface Cliente {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    historial: number;
    tipo: string;
}

export interface CitaInterface {
    id: number;
    tipocita: string;
    fecha: Date;
    hora: string;
    descripcion: string;
    cliente: Cliente;
    lugar: string;
    estado: string;
    observaciones: string;
}

export default class CambiarCitaController {
    private model: CambiarCitaModel;
    private view: CambiarCitaView;

    constructor() {
        this.model = new CambiarCitaModel();
        this.view = new CambiarCitaView();

        // Asignar el evento para buscar una cita
        document.addEventListener('buscarCita', async(event: any) => {
           await  this.buscarCita(event.detail);
        });

        // Asignar el evento para cambiar la cita
        document.addEventListener('cambiarCita', async(event: any) => {
            await this.cambiarCita(event.detail);
        });
    }

    public init(): void {
        this.view.render();
    }

    private async buscarCita(numeroCita: string): Promise<void> {
        const cita = await this.model.consultarCita(numeroCita) as CitaInterface | null;
        console.log(cita);
        if (cita) {
            console.log(cita);
            this.view.cargarDatosCita(cita); // Pasa el objeto completo de cita
            this.view.mostrarCita(cita); // Ahora también pasa el objeto completo para mostrar la cita
        } else {
            alert(`No se encontró la cita con el número ${numeroCita}`);
        }
    }
    
    
    private isValidCita(cita: any): cita is CitaInterface {
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

    private async cambiarCita(nuevosDatos: Record<string, string | undefined>): Promise<void> {
        const mensaje = await this.model.cambiarCita(1, nuevosDatos); // Aquí deberías agregar la lógica para obtener el ID adecuado
        alert(mensaje);
        await this.view.mostrarMensajeExito();
    }
}
