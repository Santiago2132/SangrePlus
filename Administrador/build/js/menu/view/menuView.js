export default class MenuView {
    constructor() { }
    init() {
        this.renderMain('ingreso'); // Siempre muestra la vista de ingreso al iniciar
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
        this.hideAllComponents();
        // Muestra solo el componente seleccionado
        this.showComponent(component);
    }
    hideAllComponents() {
        const components = ['ingreso', 'admin', 'agente'];
        components.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display = 'none'; // Oculta el componente
            }
        });
    }
    showComponent(component) {
        const selectedComponent = document.getElementById(component);
        if (selectedComponent) {
            selectedComponent.style.display = 'block'; // Muestra el componente seleccionado
        }
    }
}
