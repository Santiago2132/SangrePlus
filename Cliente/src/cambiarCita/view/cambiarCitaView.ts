import CambiarCitaTemplate from "../template/cambiarCitaTemplate.js";
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

    public mostrarCita(cita: CitaInterface): void {
        console.log('Cita interface',cita);
        // Mostrar mensaje con los detalles de la cita
        const mensaje = `
            Cita encontrada:
            <br>Descripción: ${cita.descripcion}
            <br>Número de cita: ${cita.id}
            <br>Cliente: ${cita.cliente.nombre} ${cita.cliente.apellido}
        `;
        
        // Obtener el contenedor de mensaje
        const mensajeCambioElement = document.getElementById('mensaje-cambio');
        
        if (mensajeCambioElement) {
            mensajeCambioElement.innerHTML = mensaje; // Aquí manipulamos el innerHTML
            mensajeCambioElement.style.display = 'block'; // Mostrar el mensaje
        } else {
            console.error('No se encontró el elemento #mensaje-cambio en el DOM');
        }
    }
    

    public mostrarMensajeExito(): void {
        const mensajeExito = document.getElementById('mensaje-cambio')!;
        mensajeExito.style.display = 'block';
    }

    public cargarDatosCita(cita: CitaInterface): void {
        // Llenamos los campos del formulario con los datos de la cita
        (document.getElementById('numero-cita') as HTMLInputElement).value = cita.id.toString(); // Asumiendo que el id es el número de cita
        (document.getElementById('descripcion') as HTMLTextAreaElement).value = cita.descripcion;
        (document.getElementById('tipo-cita') as HTMLSelectElement).value = cita.tipocita;
        (document.getElementById('fecha') as HTMLInputElement).value = this.formatearFecha(cita.fecha);
        (document.getElementById('hora') as HTMLInputElement).value = cita.hora;
        (document.getElementById('lugar') as HTMLSelectElement).value = cita.lugar;
        
        // Asumiendo que el cliente está relacionado con la cita
        const cliente = cita.cliente;
        (document.getElementById('nombres') as HTMLInputElement).value = cliente.nombre;
        (document.getElementById('apellidos') as HTMLInputElement).value = cliente.apellido;
        (document.getElementById('edad') as HTMLSelectElement).value = cliente.edad.toString();
        
        // Ahora se pasa el objeto completo de la cita al método mostrarCita
        this.mostrarCita(cita);
    }
    

    private formatearFecha(fecha: Date): string {
        const opciones: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return fecha.toLocaleDateString('en-CA', opciones); // Formato YYYY-MM-DD
    }
}
