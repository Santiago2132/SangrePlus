import cAsistidasController from "../../cAsistidas/controller/cAsistidasController.js";
import cNoAsistidasController from "../../cNoAsistidas/controller/cNoAsistidasController.js";
import AdminMenuView from "../view/adminMenuView.js";

export default class AdminMenuController {
    private adminMenuView: AdminMenuView;
    private asistidasController: cAsistidasController;
    private noasistidasController: cNoAsistidasController;

    constructor() {
        this.asistidasController = new cAsistidasController();
        this.noasistidasController = new cNoAsistidasController();
        this.adminMenuView = new AdminMenuView(
            this.handleCitasAsistidasClick.bind(this),
            this.handleCitasNoAsistidasClick.bind(this)
        );
    }

    public init() {
        console.log("AdminMenuController iniciado");
        this.adminMenuView.init();
    }

    private handleCitasAsistidasClick(): void {
        this.asistidasController.init(); // Inicializa el controlador de asistidas
    }

    private handleCitasNoAsistidasClick(): void {
        this.noasistidasController.init(); // Inicializa el controlador de no asistidas
    }
}
