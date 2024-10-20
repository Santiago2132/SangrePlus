export default class menuView {
    constructor() {
    }
    init() {
        // Configura los eventos de los botones al inicializar la vista
        this.onInicioClick(() => this.renderMain('inicio'));
        this.onAgendarClick(() => this.renderMain('agendar'));
        this.onModificarClick(() => this.renderMain('modificar'));
        this.onCancelarClick(() => this.renderMain('cancelar'));
    }
    getButtonById(buttonId) {
        return document.getElementById(buttonId);
    }
    onInicioClick(callback) {
        const button = this.getButtonById('inicio');
        if (button)
            button.addEventListener('click', callback);
    }
    onAgendarClick(callback) {
        const button = this.getButtonById('nueva-cita');
        if (button)
            button.addEventListener('click', callback);
    }
    onModificarClick(callback) {
        const button = this.getButtonById('cambiar-cita');
        if (button)
            button.addEventListener('click', callback);
    }
    onCancelarClick(callback) {
        const button = this.getButtonById('cancelar-cita');
        if (button)
            button.addEventListener('click', callback);
    }
    renderMain(component) {
        // Renderiza el componente principal basado en la selección
        console.log(component);
    }
}
