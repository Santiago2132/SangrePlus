export default class MenuView {
    constructor() {}

    public init(): void {
        this.renderMain('ingreso'); // Siempre muestra la vista de ingreso al iniciar
    }

    private getButtonById(buttonId: string): HTMLButtonElement | null {
        return document.getElementById(buttonId) as HTMLButtonElement;
    }

    public onIngresoClick(callback: () => void): void {
        const button = this.getButtonById('ingreso-btn');
        if (button) button.addEventListener('click', callback);
    }

    public onCancelarClick(callback: () => void): void {
        const button = this.getButtonById('cerrar-btn');
        if (button) button.addEventListener('click', callback);
    }

    public renderMain(component: string): void {
        // Oculta todas las secciones
        this.hideAllComponents();

        // Muestra solo el componente seleccionado
        this.showComponent(component);
    }

    private hideAllComponents(): void {
        const components = ['ingreso', 'admin', 'agente'];
        components.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display = 'none'; // Oculta el componente
            }
        });
    }

    private showComponent(component: string): void {
        const selectedComponent = document.getElementById(component);
        if (selectedComponent) {
            selectedComponent.style.display = 'block'; // Muestra el componente seleccionado
        }
    }

    // Renderiza el menú específico del administrador
    public renderAdminMenu(): void {
        const adminSection = document.querySelector('#admin-menu');
        if (adminSection) {
            (adminSection as HTMLElement).style.display = 'block';
        }
        console.log("Menú de administrador renderizado");
    }
}