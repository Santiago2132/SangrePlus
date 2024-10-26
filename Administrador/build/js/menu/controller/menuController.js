import Ingreso from "../../ingreso/ingreso.js";
import menuView from "../view/menuView.js";
export default class MenuController {
    view;
    ingreso;
    constructor() {
        this.view = new menuView();
        this.ingreso = Ingreso.create();
    }
    init() {
        this.view.init();
        // Configura los eventos de los botones al inicializar el menú
        this.view.onIngresoClick(() => this.loadMain('ingreso'));
        this.view.onCancelarClick(() => this.loadMain('cancelar'));
        // Cargar el componente 'ingreso' por defecto
        this.loadMain('ingreso');
    }
    loadMain(component) {
        this.view.renderMain(component);
        switch (component) {
            case 'ingreso':
                this.ingreso.init();
                this.ingreso.render();
                break;
            case 'cancelar':
                // Lógica adicional para el componente 'cancelar' si es necesario
                break;
            default:
                console.error("Componente no encontrado:", component);
        }
    }
}
