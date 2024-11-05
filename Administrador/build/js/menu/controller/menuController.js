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
    }
    loadMain(_component) {
        // Limpiar el contenido de todos los componentes
        this.clearAllComponents();
        // Cargar ingreso y ocultar otros componentes
        this.hideAllComponents();
        this.showComponent("ingreso");
        this.ingresoController.init();
        this.ingresoController.render();
    }
    clearAllComponents() {
        // Borra el contenido de cada componente
        const components = ['ingreso', 'admin', 'agente', 'nueva'];
        components.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = ''; // Limpia el contenido
            }
        });
    }
    hideAllComponents() {
        const components = ['ingreso', 'admin', 'agente'];
        components.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display = 'none'; // Oculta el componente
            }
        });
    }
    showComponent(component) {
        const selectedComponent = document.getElementById(component);
        if (selectedComponent) {
            selectedComponent.style.display = 'block'; // Muestra el componente seleccionado
        }
    }
}
