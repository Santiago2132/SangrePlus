import CambiarCitaTemplate from "../template/cambiarCitaTemplate.js";


export default class CambiarCitaView {
    private template: CambiarCitaTemplate;

    constructor() {
        this.template = new CambiarCitaTemplate();
    }

    public render(): void {
        // Renderizamos el HTML del template
        document.getElementById('cambiar')!.innerHTML = this.template.getHTML();
        
        // Asignamos los manejadores de eventos al formulario
        this.asignarEventos();
    }

    private asignarEventos(): void {
        const formBuscarCita = document.getElementById('cita-a-cambiar') as HTMLFormElement;
        const formNuevaCita = document.getElementById('nueva-cita-form') as HTMLFormElement;
    
        // Evento para buscar la cita
        formBuscarCita.addEventListener('submit', (e) => {
            e.preventDefault();
            const numeroCita = (document.getElementById('numero-cita') as HTMLInputElement).value;
            this.buscarCita(numeroCita);
        });
    
        // Evento para cambiar la cita
        formNuevaCita.addEventListener('submit', (e) => {
            e.preventDefault();
            const nuevosDatos = this.obtenerDatosFormulario();
            this.enviarDatosParaCambio(nuevosDatos); // Cambiado para usar un método adecuado
        });
    }
    
    private enviarDatosParaCambio(nuevosDatos: Record<string, string | undefined>): void {
        const eventoCambio = new CustomEvent('cambiarCita', { detail: nuevosDatos });
        document.dispatchEvent(eventoCambio);
    }
    

    private buscarCita(numeroCita: string): void {
        const eventoBuscar = new CustomEvent('buscarCita', { detail: numeroCita });
        document.dispatchEvent(eventoBuscar);
    }

    private obtenerDatosFormulario(): Record<string, string | undefined> {
        return {
            tipoCita: (document.getElementById('tipo-cita') as HTMLSelectElement).value,
            fecha: (document.getElementById('fecha') as HTMLInputElement).value,
            hora: (document.getElementById('hora') as HTMLInputElement).value,
            descripcion: (document.getElementById('descripcion') as HTMLTextAreaElement).value,
            lugar: (document.getElementById('lugar') as HTMLSelectElement).value,
            nombreCliente: (document.getElementById('nombres') as HTMLInputElement).value,
            apellidoCliente: (document.getElementById('apellidos') as HTMLInputElement).value,
            edadCliente: (document.getElementById('edad') as HTMLSelectElement).value,
        };
    }

    public mostrarCita(cita: { numeroCita: string, descripcion: string }): void {
        const mensaje = `Cita encontrada: ${cita.descripcion} (Número de cita: ${cita.numeroCita})`;
        alert(mensaje);
    }

    public mostrarMensajeExito(): void {
        const mensajeExito = document.getElementById('mensaje-cambio')!;
        mensajeExito.style.display = 'block';
    }
}
