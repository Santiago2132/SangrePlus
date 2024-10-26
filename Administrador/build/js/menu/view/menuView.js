export default class MenuView {
    constructor() { }
    init() {
        this.onIngresoClick(() => this.renderMain('ingreso'));
        this.onCancelarClick(() => this.renderMain('cancelar'));
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
    onCancelarClick(callback) {
        const button = this.getButtonById('cerrar-btn');
        if (button)
            button.addEventListener('click', callback);
    }
    renderMain(component) {
        // Oculta todas las secciones
        const sections = document.querySelectorAll('main > div, main > ingreso, main > cancelar');
        sections.forEach((section) => {
            section.style.display = 'none';
        });
        // Muestra solo el componente seleccionado
        const selectedComponent = document.querySelector(`#${component}`);
        if (selectedComponent) {
            selectedComponent.style.display = 'block';
        }
    }
}
