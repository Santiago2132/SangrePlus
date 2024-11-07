export default class YuliethView {
    constructor() {
        // No se requiere inicialización en el constructor
    }

    public init(): void {
        this.onIngresoClick(() => this.renderMain('ingreso'));
        this.onCerrarClick(() => this.renderMain('ingreso'));
        this.renderMain('ingreso');
    }

    private getButtonById(buttonId: string): HTMLButtonElement | null {
        return document.getElementById(buttonId) as HTMLButtonElement;
    }

    public onIngresoClick(callback: () => void): void {
        const button = this.getButtonById('ingreso-btn');
        if (button) button.addEventListener('click', callback);
    }

    public onCerrarClick(callback: () => void): void {
        const button = this.getButtonById('cerrar-btn');
        if (button) button.addEventListener('click', callback);
    }

    public renderMain(component: string): void {
        // Oculta todos los componentes
        const sections = document.querySelectorAll('ingreso, admin, agente, div#nueva');
        sections.forEach((section) => {
            (section as HTMLElement).style.display = 'none';
        });

        // Muestra solo el componente seleccionado
        const selectedComponent = document.getElementById(component);
        if (selectedComponent) {
            (selectedComponent as HTMLElement).style.display = 'block';
        }
    }
}
