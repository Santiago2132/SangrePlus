export default class cancelarCitaView {
    selector;
    selectorName = 'cancelar';
    template;
    constructor(template) {
        this.selector = document.createElement('div');
        this.template = template;
    }
    init = async () => {
        this.selector = document.getElementById(this.selectorName);
        setTimeout(() => {
            this.render();
            this.addEventListeners();
        }, 100);
    };
    render = () => {
        // Limpiar cualquier contenido previo
        this.selector.innerHTML = '';
        // Inyectar el HTML generado por el template directamente en el selector
        this.selector.innerHTML = this.template.getHTML();
    };
    // Agregar los eventos necesarios
    addEventListeners = () => {
        const buscarCitaButton = document.getElementById("buscar-cita");
        const infoCitaPanel = document.getElementById("info-cita-panel");
        if (buscarCitaButton && infoCitaPanel) {
            buscarCitaButton.addEventListener("click", () => {
                // Mostrar el panel de información de la cita
                infoCitaPanel.classList.remove("hidden");
            });
        }
    };
}
