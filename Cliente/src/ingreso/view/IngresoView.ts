import IngresoTemplate from '../template/IngresoTemplate';

export default class IngresoView {
    private selector: HTMLDivElement;
    private selectorName = 'main'; // El contenedor principal para la vista

    constructor() {
        this.selector = document.createElement('div');
    }

    // Renderizar la vista de ingreso
    public render = (): void => {
        this.selector = document.getElementById(this.selectorName) as HTMLDivElement;
        this.selector.innerHTML = ''; // Limpiar contenido anterior
        this.selector.appendChild(IngresoTemplate.render()); // Renderizar el template
    }

    // Asignar el evento de submit al formulario (con controlador externo)
    public bindSubmitEvent = (handleSubmit: (cedula: string) => void): void => {
        const form = this.selector.querySelector('form') as HTMLFormElement;
        form.addEventListener('submit', (e: Event) => {
            e.preventDefault();
            const cedulaInput = form.querySelector('#cedula') as HTMLInputElement;
            const cedula = cedulaInput.value;
            handleSubmit(cedula); // Pasar el valor al controlador
        });
    }
}
