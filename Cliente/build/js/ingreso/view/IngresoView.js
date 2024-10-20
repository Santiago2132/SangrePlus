import IngresoTemplate from '../template/IngresoTemplate.js';
export default class IngresoView {
    selector;
    selectorName = 'main'; // El contenedor principal para la vista
    constructor() {
        this.selector = document.createElement('div');
    }
    // Renderizar la vista de ingreso
    render = () => {
        this.selector = document.getElementById(this.selectorName);
        this.selector.innerHTML = ''; // Limpiar contenido anterior
        this.selector.appendChild(IngresoTemplate.render()); // Renderizar el template
    };
    // Asignar el evento de submit al formulario (con controlador externo)
    bindSubmitEvent = (handleSubmit) => {
        const form = this.selector.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const cedulaInput = form.querySelector('#cedula');
            const cedula = cedulaInput.value;
            handleSubmit(cedula); // Pasar el valor al controlador
        });
    };
}
