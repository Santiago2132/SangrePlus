import IngresoController from "../../ingreso/controller/ingresoController.js";
import Ingreso from "../../ingreso/ingreso.js";
import menuView from "../view/menuView.js";

export default class MenuController {
    private view: menuView;
    private readonly ingreso: IngresoController;

    constructor() {
        this.view = new menuView();
        this.ingreso = Ingreso.create();
    }

    public init(): void {
        this.view.init();

        // Configura los eventos de los botones al inicializar el menú
        this.view.onIngresoClick(() => this.loadMain('ingreso'));
        this.view.onCancelarClick(() => this.loadMain('cancelar'));

        // Cargar el componente 'ingreso' por defecto
        this.loadMain('ingreso');
    }

    private loadMain(component: string): void {
        this.view.renderMain(component);
        switch (component) {
            case 'ingreso':
                this.ingreso.init();
                this.ingreso.render()
                break;
            case 'cancelar':
                // Lógica adicional para el componente 'cancelar' si es necesario
                break;
            default:
                console.error("Componente no encontrado:", component);
        }
    }
}
