export default class cancelarCitaView {
    selector;
    selectorName = 'cancelar'; // Asegúrate de que este ID exista en tu HTML
    template;
    constructor(template) {
        this.selector = document.createElement("div");
        this.template = template;
    }
    init = async () => {
        this.selector = document.getElementById(this.selectorName);
        if (this.selector) {
            this.render(); // Renderiza al inicializar
        }
        else {
            console.error(`Element with id "${this.selectorName}" not found.`);
        }
    };
    render = () => {
        this.selector.innerHTML = this.template.getHTML();
    };
    showConfirmPanel = () => {
        const confirmPanel = document.getElementById("confirm-cancel-panel");
        if (confirmPanel) {
            confirmPanel.classList.remove("hidden");
        }
    };
    hideConfirmPanel = () => {
        const confirmPanel = document.getElementById("confirm-cancel-panel");
        if (confirmPanel) {
            confirmPanel.classList.add("hidden");
        }
    };
    // Nueva función para enviar el número de cita al controlador
    getNumeroCitaCancelar = () => {
        return document.getElementById("numero-cita-cancelar").value.trim();
    };
}
