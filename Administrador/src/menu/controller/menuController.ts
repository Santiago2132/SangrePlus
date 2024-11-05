import IngresoController from "../../ingreso/controller/ingresoController.js";
import MenuView from "../view/menuView.js";

export default class MenuController {
    private view: MenuView;
    private readonly ingresoController: IngresoController;

    constructor() {
        this.view = new MenuView();
        this.ingresoController = new IngresoController();
    }

    public init(): void {
        this.view.init();

        // Configura los eventos de los botones al inicializar el menú
        this.view.onIngresoClick(() => this.loadMain('ingreso'));
        this.view.onCancelarClick(() => this.loadMain('ingreso'));

        // Inicializa IngresoController y obtiene el usuario autenticado
        this.ingresoController.init();

    }

    private loadMain(_component: string): void {
        // Limpiar el contenido de todos los componentes
        this.clearAllComponents();

        // Cargar ingreso y ocultar otros componentes
        this.hideAllComponents();
        this.showComponent("ingreso");
        this.ingresoController.init();
        this.ingresoController.render();
    }

    private clearAllComponents(): void {
        // Borra el contenido de cada componente
        const components = ['ingreso', 'admin', 'agente', 'nueva'];
        components.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = ''; // Limpia el contenido
            }
        });
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
}
