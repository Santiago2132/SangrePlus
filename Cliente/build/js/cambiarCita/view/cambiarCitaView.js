import CambiarCitaTemplate from "../template/cambiarCitaTemplate.js";
export default class CambiarCitaView {
    template;
    constructor() {
        this.template = new CambiarCitaTemplate();
    }
    render() {
        // Renderizamos el HTML del template
        document.getElementById('cambiar').innerHTML = this.template.getHTML();
        // Asignamos los manejadores de eventos al formulario
        this.asignarEventos();
    }
    asignarEventos() {
        const formBuscarCita = document.getElementById('cita-a-cambiar');
        const formNuevaCita = document.getElementById('nueva-cita-form');
        // Evento para buscar la cita
        formBuscarCita.addEventListener('submit', (e) => {
            e.preventDefault();
            const numeroCita = document.getElementById('numero-cita').value;
            this.buscarCita(numeroCita);
        });
        // Evento para cambiar la cita
        formNuevaCita.addEventListener('submit', (e) => {
            e.preventDefault();
            const nuevosDatos = this.obtenerDatosFormulario();
            this.enviarDatosParaCambio(nuevosDatos); // Cambiado para usar un método adecuado
        });
    }
    enviarDatosParaCambio(nuevosDatos) {
        const eventoCambio = new CustomEvent('cambiarCita', { detail: nuevosDatos });
        document.dispatchEvent(eventoCambio);
    }
    buscarCita(numeroCita) {
        const eventoBuscar = new CustomEvent('buscarCita', { detail: numeroCita });
        document.dispatchEvent(eventoBuscar);
    }
    obtenerDatosFormulario() {
        return {
            tipoCita: document.getElementById('tipo-cita').value,
            fecha: document.getElementById('fecha').value,
            hora: document.getElementById('hora').value,
            descripcion: document.getElementById('descripcion').value,
            lugar: document.getElementById('lugar').value,
            nombreCliente: document.getElementById('nombres').value,
            apellidoCliente: document.getElementById('apellidos').value,
            edadCliente: document.getElementById('edad').value,
        };
    }
    mostrarCita(cita) {
        console.log('Cita interface', cita);
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
        }
        else {
            console.error('No se encontró el elemento #mensaje-cambio en el DOM');
        }
    }
    mostrarMensajeExito() {
        const mensajeExito = document.getElementById('mensaje-cambio');
        mensajeExito.style.display = 'block';
    }
    cargarDatosCita(cita) {
        // Llenamos los campos del formulario con los datos de la cita
        document.getElementById('numero-cita').value = cita.id.toString(); // Asumiendo que el id es el número de cita
        document.getElementById('descripcion').value = cita.descripcion;
        document.getElementById('tipo-cita').value = cita.tipocita;
        document.getElementById('fecha').value = this.formatearFecha(cita.fecha);
        document.getElementById('hora').value = cita.hora;
        document.getElementById('lugar').value = cita.lugar;
        // Asumiendo que el cliente está relacionado con la cita
        const cliente = cita.cliente;
        document.getElementById('nombres').value = cliente.nombre;
        document.getElementById('apellidos').value = cliente.apellido;
        document.getElementById('edad').value = cliente.edad.toString();
        // Ahora se pasa el objeto completo de la cita al método mostrarCita
        this.mostrarCita(cita);
    }
    formatearFecha(fecha) {
        const opciones = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return fecha.toLocaleDateString('en-CA', opciones); // Formato YYYY-MM-DD
    }
}
