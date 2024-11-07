export default class YuliethView {
    constructor() {
        // No se requiere inicialización en el constructor
    }
    init() {
        this.onIngresoClick(() => this.renderMain('ingreso'));
        this.onCerrarClick(() => this.renderMain('ingreso'));
        this.renderMain('ingreso');
    }
    getButtonById(buttonId) {
        return document.getElementById(buttonId);
    }
    onIngresoClick(callback) {
        const button = this.getButtonById('ingreso-btn');
        if (button)
            button.addEventListener('click', callback);
    }
    onCerrarClick(callback) {
        const button = this.getButtonById('cerrar-btn');
        if (button)
            button.addEventListener('click', callback);
    }
    renderMain(component) {
        // Oculta todos los componentes
        const sections = document.querySelectorAll('ingreso, admin, agente, div#nueva');
        sections.forEach((section) => {
            section.style.display = 'none';
        });
        // Muestra solo el componente seleccionado
        const selectedComponent = document.getElementById(component);
        if (selectedComponent) {
            selectedComponent.style.display = 'block';
        }
    }
}
