import cancelarCitaTemplate from "../template/cancelarCitaTemplate.js";

export default class cancelarCitaView {
    private selector: HTMLDivElement;
    private selectorName = 'cancelar';
    private template: cancelarCitaTemplate;

    constructor(template : cancelarCitaTemplate){
        this.selector = document.createElement('div');
        this.template = template;
    }

    public init = async (): Promise<void> => {
        this.selector = document.getElementById(this.selectorName) as HTMLDivElement;
        setTimeout(() => {
            this.render();
            this.addEventListeners();
        }, 100);
    }

    public render = (): void => {
        // Limpiar cualquier contenido previo
        this.selector.innerHTML = '';

        // Inyectar el HTML generado por el template directamente en el selector
        this.selector.innerHTML = this.template.getHTML();
    }

    // Agregar los eventos necesarios
    private addEventListeners = (): void => {
        const buscarCitaButton = document.getElementById("buscar-cita");
        const infoCitaPanel = document.getElementById("info-cita-panel");

        if (buscarCitaButton && infoCitaPanel) {
            buscarCitaButton.addEventListener("click", () => {
                // Mostrar el panel de información de la cita
                infoCitaPanel.classList.remove("hidden");
            });
        }
    }
}
