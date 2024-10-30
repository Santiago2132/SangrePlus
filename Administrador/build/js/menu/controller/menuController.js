import IngresoController from "../../ingreso/controller/ingresoController.js";
import MenuView from "../view/menuView.js";
export default class MenuController {
    view;
    ingresoController;
    constructor() {
        this.view = new MenuView();
        this.ingresoController = new IngresoController();
    }
    init() {
        this.view.init();
        // Configura los eventos de los botones al inicializar el menú
        this.view.onIngresoClick(() => this.loadMain('ingreso'));
        this.view.onCancelarClick(() => this.loadMain('ingreso'));
        // Inicializa IngresoController y obtiene el usuario autenticado
        this.ingresoController.init();
        const usuario = this.ingresoController.getUsuario();
        // Cargar el componente adecuado según el tipo de usuario
        if (usuario?.tipo === 'admin') {
            this.view.renderAdminMenu();
        }
        else {
            this.loadMain('ingreso');
        }
    }
    loadMain(component) {
        this.view.renderMain(component);
        switch (component) {
            case 'ingreso':
                this.ingresoController.init();
                this.ingresoController.render();
                break;
            case 'cancelar':
                break;
            default:
                console.error("Componente no encontrado:", component);
        }
    }
}
