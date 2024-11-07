import cAsistidasController from "../../cAsistidas/controller/cAsistidasController.js";
import AdminMenuTemplate from "../template/adminMenuTemplate.js";

export default class AdminMenuView {
    private selector: HTMLDivElement;
    private selectorName = 'admin';
    private template: AdminMenuTemplate;
    private asistidasController: cAsistidasController;  // Instanciar el controlador de asistidas
    
    constructor(template: AdminMenuTemplate) {
        this.selector = document.createElement('div');
        this.template = template;
        this.asistidasController = new cAsistidasController();  // Instanciar el controlador
    }

    public init() {
        this.selector = document.getElementById(this.selectorName) as HTMLDivElement;
        this.render();
    }

    public render = (): void => {
        console.log("Formulario de ingreso renderizado");
        this.selector.innerHTML = '';
        this.selector.innerHTML = `${this.template.getHTML()}`;

        // Aquí llamamos al controlador de citas asistidas para renderizar las citas
        this.asistidasController.init();  // Inicia el controlador y renderiza las citas asistidas
    }

    public destroy(): void {
        const existingMenu = document.getElementById('menu-admin');
        if (existingMenu) existingMenu.remove();
    }
}
