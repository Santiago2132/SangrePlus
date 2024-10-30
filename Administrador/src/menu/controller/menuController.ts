// En MenuController.ts
import { User } from "../../ingreso/model/ingresoModel.js";
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
        const usuario: User | null = this.ingresoController.getUsuario();

        // Cargar el componente adecuado según el tipo de usuario
        if (usuario?.tipo === 'admin') {
            this.view.renderAdminMenu();
        } else {
            this.loadMain('ingreso');
        }
    }

    private loadMain(component: string): void {
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
