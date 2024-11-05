import cancelarCitaTemplate from "../template/cancelarCitaTemplate.js";

export default class cancelarCitaView {
    private selector: HTMLDivElement;
    private selectorName = 'cancelar'; // Asegúrate que este ID exista en tu HTML
    private template: cancelarCitaTemplate;

    constructor(template: cancelarCitaTemplate) {
        this.selector = document.createElement("div");
        this.template = template;
    }

    public init = async (): Promise<void> => {
        this.selector = document.getElementById(this.selectorName) as HTMLDivElement;
        if (this.selector) {
            this.render(); // Renderiza al inicializar
        } else {
            console.error(`Element with id "${this.selectorName}" not found.`);
        }
    }

    public render = (): void => {
        this.selector.innerHTML = this.template.getHTML();
    }

    public showInfoPanel = (content: string): void => {
        const infoCitaPanel = document.getElementById("info-cita-panel");
        if (infoCitaPanel) {
            infoCitaPanel.innerHTML = content;
            infoCitaPanel.classList.remove("hidden");
        } else {
            console.error('Info panel not found.');
        }
    }

    public hideInfoPanel = (): void => {
        const infoCitaPanel = document.getElementById("info-cita-panel");
        if (infoCitaPanel) {
            infoCitaPanel.classList.add("hidden");
        }
    }
}