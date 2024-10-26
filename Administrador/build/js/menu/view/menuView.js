export default class menuView {
    constructor() {
    }
    init() {
        // Configura los eventos de los botones al inicializar la vista
        this.onIngresoClick(() => this.renderMain('ingreso'));
        this.onCancelarClick(() => this.renderMain('cancelar'));
        this.renderMain('ingreso');
    }
    getButtonById(buttonId) {
        return document.getElementById(buttonId);
    }
    onIngresoClick(callback) {
        console.log("Se hizo un boton Inicio");
        const button = this.getButtonById('ingreso-btn');
        if (button)
            button.addEventListener('click', callback);
    }
    onCancelarClick(callback) {
        console.log("Se hizo un boton Cancelar");
        const button = this.getButtonById('cerrar-btn');
        if (button)
            button.addEventListener('click', callback);
    }
    renderMain(component) {
        // Selecciona todos los elementos hijos de main
        const sections = document.querySelectorAll('main > div');
        sections.forEach((section) => {
            section.style.display = 'none';
        });
        // Muestra solo el componente seleccionado
        const selectedComponent = document.getElementById(component);
        if (selectedComponent) {
            selectedComponent.style.display = 'block';
        }
        else {
            console.error("Elemento no encontrado:", component);
        }
    }
}
