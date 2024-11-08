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
        const mensaje = `Cita encontrada: ${cita.descripcion} (Número de cita: ${cita.numeroCita})`;
        alert(mensaje);
    }
    mostrarMensajeExito() {
        const mensajeExito = document.getElementById('mensaje-cambio');
        mensajeExito.style.display = 'block';
    }
}
