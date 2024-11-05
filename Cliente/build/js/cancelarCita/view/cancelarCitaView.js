export default class cancelarCitaView {
    selector;
    selectorName = 'cancelar'; // Asegúrate que este ID exista en tu HTML
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
    showInfoPanel = (content) => {
        const infoCitaPanel = document.getElementById("info-cita-panel");
        if (infoCitaPanel) {
            infoCitaPanel.innerHTML = content;
            infoCitaPanel.classList.remove("hidden");
        }
        else {
            console.error('Info panel not found.');
        }
    };
    hideInfoPanel = () => {
        const infoCitaPanel = document.getElementById("info-cita-panel");
        if (infoCitaPanel) {
            infoCitaPanel.classList.add("hidden");
        }
    };
}
