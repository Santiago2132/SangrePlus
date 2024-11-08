import cancelarCitaTemplate from "../template/cancelarCitaTemplate.js";

export default class cancelarCitaView {
    private selector: HTMLDivElement;
    private selectorName = 'cancelar'; // Asegúrate de que este ID exista en tu HTML
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

    public showConfirmPanel = (): void => {
        const confirmPanel = document.getElementById("confirm-cancel-panel");
        if (confirmPanel) {
            confirmPanel.classList.remove("hidden");
        }
    }

    public hideConfirmPanel = (): void => {
        const confirmPanel = document.getElementById("confirm-cancel-panel");
        if (confirmPanel) {
            confirmPanel.classList.add("hidden");
        }
    }

    // Nueva función para enviar el número de cita al controlador
    public getNumeroCitaCancelar = (): string => {
        return (document.getElementById("numero-cita-cancelar") as HTMLInputElement).value.trim();
    }
}
