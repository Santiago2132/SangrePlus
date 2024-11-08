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
    fecha: Date | null;
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
        document.getElementById('cambiar')!.innerHTML = this.template.getHTML();
        this.asignarEventos();
    }

    private asignarEventos(): void {
        const formBuscarCita = document.getElementById('cita-a-cambiar') as HTMLFormElement;
        const formNuevaCita = document.getElementById('nueva-cita-form') as HTMLFormElement;
    
        formBuscarCita.addEventListener('submit', (e) => {
            e.preventDefault();
            const numeroCita = (document.getElementById('numero-cita') as HTMLInputElement).value;
            this.buscarCita(numeroCita);
        });
    
        formNuevaCita.addEventListener('submit', (e) => {
            e.preventDefault();
            const nuevosDatos = this.obtenerDatosFormulario();
            this.enviarDatosParaCambio(nuevosDatos);
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
        console.log('Cita encontrada', cita);

        const mensaje = `
            Cita encontrada:
            <br>Descripción: ${cita.observaciones}
            <br>Número de cita: ${cita.id}
            <br>Cliente: ${cita.cliente.nombre} ${cita.cliente.apellido}
        `;
        
        const mensajeCambioElement = document.getElementById('mensaje-cambio');
        if (mensajeCambioElement) {
            mensajeCambioElement.innerHTML = mensaje;
            mensajeCambioElement.style.display = 'block';
        }
    }

    public mostrarMensajeExito(): void {
        const mensajeExito = document.getElementById('mensaje-cambio')!;
        mensajeExito.style.display = 'block';
    }

    public cargarDatosCita(cita: CitaInterface): void {
        console.log('cargarDatosCita', cita);
    
        // Comprobamos si hay campos nulos y asignamos datos predeterminados si es necesario
        if (this.tieneCamposNulos(cita)) {
            console.log('Algunos campos están vacíos. Cargando datos predeterminados...');
            cita = this.obtenerDatosPredeterminados();
        }
    
        // Llenamos los campos del formulario con los datos de la cita
    
        // Verificar si el elemento existe antes de asignar un valor
        const numeroCitaElem = document.getElementById('numero-cita') as HTMLInputElement;
        if (numeroCitaElem) {
            const numeroCita = cita.id ? cita.id.toString() : cita.id.toString(); // Asignamos un valor por defecto si id es nulo o indefinido
            numeroCitaElem.value = numeroCita;
        } else {
            console.error("Elemento 'numero-cita' no encontrado");
        }
    
        const descripcionElem = document.getElementById('descripcion') as HTMLTextAreaElement;
        if (descripcionElem) {
            const descripcion = cita.descripcion || 'Sin descripción'; // Valor predeterminado si falta la descripción
            descripcionElem.value = descripcion;
        } else {
            console.error("Elemento 'descripcion' no encontrado");
        }
    
        const tipoCitaElem = document.getElementById('tipocita') as HTMLSelectElement;
        if (tipoCitaElem) {
            const tipoCita = cita.tipocita || 'General'; // Valor predeterminado si falta el tipo de cita
            tipoCitaElem.value = tipoCita;
        } else {
            console.error("Elemento 'tipocita' no encontrado");
        }
    
        const fechaElem = document.getElementById('fecha') as HTMLInputElement;
        if (fechaElem) {
            const fecha = cita.fecha ? cita.fecha.toDateString() : '2024-01-01'; // Valor por defecto si la fecha está vacía
            fechaElem.value = fecha;
        } else {
            console.error("Elemento 'fecha' no encontrado");
        }
    
        const horaElem = document.getElementById('hora') as HTMLInputElement;
        if (horaElem) {
            const hora = cita.hora || '09:00'; // Valor por defecto si la hora está vacía
            horaElem.value = hora;
        } else {
            console.error("Elemento 'hora' no encontrado");
        }
    
        const lugarElem = document.getElementById('lugar') as HTMLSelectElement;
        if (lugarElem) {
            const lugar = cita.lugar || 'Consultorio A'; // Valor por defecto si el lugar está vacío
            lugarElem.value = lugar;
        } else {
            console.error("Elemento 'lugar' no encontrado");
        }


    
        const estadoElem = document.getElementById('estado') as HTMLInputElement;
        if (estadoElem) {
            const estado = cita.estado || 'Pendiente'; // Valor por defecto si el estado está vacío
            estadoElem.value = estado;
        } else {
            console.error("Elemento 'estado' no encontrado");
        }
    
        // Comprobamos que los datos del cliente estén completos
        const cliente = cita.cliente; // Datos predeterminados si falta cliente
        const nombreClienteElem = document.getElementById('nombre') as HTMLInputElement;
        if (nombreClienteElem) {
            nombreClienteElem.value = cliente.nombre || 'Juan';
        } else {
            console.error("Elemento 'nombre' no encontrado");
        }
        console.log(nombreClienteElem)
    
        const apellidoClienteElem = document.getElementById('apellido') as HTMLInputElement;
        if (apellidoClienteElem) {
            apellidoClienteElem.value = cliente.apellido || 'Pérez';
        } else {
            console.error("Elemento 'apellido' no encontrado");
        }
    
        const edadClienteElem = document.getElementById('edad') as HTMLSelectElement;
        if (edadClienteElem) {
            edadClienteElem.value = cliente.edad ? cliente.edad.toString() : '30'; // Valor predeterminado si la edad no está disponible
        } else {
            console.error("Elemento 'edad' no encontrado");
        }
    }

    public cargarDatosCita1(cita: CitaInterface): void {

        console.log('cargarDatosCita', cita);

        // Comprobamos si hay campos nulos y asignamos datos predeterminados si es necesario
        if (this.tieneCamposNulos(cita)) {
            console.log('Algunos campos están vacíos. Cargando datos predeterminados...');
            cita = this.obtenerDatosPredeterminados();
        }

        // Llenamos los campos del formulario con los datos de la cita
        (document.getElementById('numero-cita') as HTMLInputElement).value = cita.id.toString();
        (document.getElementById('descripcion') as HTMLTextAreaElement).value = cita.descripcion;
        (document.getElementById('tipocita') as HTMLSelectElement).value = cita.tipocita;
        (document.getElementById('fecha') as HTMLInputElement).value = this.formatearFecha(cita.fecha);
        (document.getElementById('hora') as HTMLInputElement).value = cita.hora;
        (document.getElementById('lugar') as HTMLSelectElement).value = cita.lugar;
        (document.getElementById('estado') as HTMLInputElement).value = cita.estado;

        const cliente = cita.cliente;
        (document.getElementById('nombre') as HTMLInputElement).value = cliente.nombre;
        (document.getElementById('apellido') as HTMLInputElement).value = cliente.apellido;
        (document.getElementById('edad') as HTMLSelectElement).value = cliente.edad.toString();
    }
    

    private tieneCamposNulos(cita: CitaInterface): boolean {
        // Verificamos si alguna propiedad relevante de la cita está vacía o nula
        return !cita.descripcion || !cita.hora || !cita.fecha || !cita.lugar || !cita.estado;
    }

    private obtenerDatosPredeterminados(): CitaInterface {
        return {
            id: 1234,
            tipocita: 'Consulta General',
            fecha: new Date(),
            hora: '09:00',
            descripcion: 'Cita de ejemplo para pruebas',
            lugar: 'Consultorio 1',
            estado: 'Pendiente',
            observaciones: 'No tiene observaciones adicionales.',
            cliente: {
                id: 5678,
                nombre: 'Juan',
                apellido: 'Pérez',
                edad: 30,
                historial: 2,
                tipo: 'Regular'
            }
        };
    }

    private formatearFecha(fecha: Date | null): string {
        if (fecha === null) return '';
        const opciones: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return fecha.toLocaleDateString('en-CA', opciones);
    }
}
