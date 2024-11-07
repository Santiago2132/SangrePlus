import cAsistidasController from "../../cAsistidas/controller/cAsistidasController.js";
import cNoAsistidasController from "../../cNoAsistidas/controller/cNoAsistidasController.js";
import AdminMenuView from "../view/adminMenuView.js";
export default class AdminMenuController {
    adminMenuView;
    asistidasController;
    noasistidasController;
    constructor() {
        this.asistidasController = new cAsistidasController();
        this.noasistidasController = new cNoAsistidasController();
        this.adminMenuView = new AdminMenuView(this.handleCitasAsistidasClick.bind(this), this.handleCitasNoAsistidasClick.bind(this));
    }
    init() {
        console.log("AdminMenuController iniciado");
        this.adminMenuView.init();
    }
    handleCitasAsistidasClick() {
        this.asistidasController.init(); // Inicializa el controlador de asistidas
    }
    handleCitasNoAsistidasClick() {
        this.noasistidasController.init(); // Inicializa el controlador de no asistidas
    }
}
