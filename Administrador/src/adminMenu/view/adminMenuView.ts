import cAsistidasController from "../../cAsistidas/controller/cAsistidasController.js";
import AdminMenuTemplate from "../template/adminMenuTemplate.js";

export default class AdminMenuView {
    private selector: HTMLDivElement;
    private selectorName = 'admin';
    private template: AdminMenuTemplate;
    private asistidasController: cAsistidasController; 
    
    constructor(template: AdminMenuTemplate) {
        this.selector = document.createElement('div');
        this.template = template;
        this.asistidasController = new cAsistidasController();  
    }

    public init() {
        this.selector = document.getElementById(this.selectorName) as HTMLDivElement;
        this.render();
    }

    public render = (): void => {
        console.log("Formulario de ingreso renderizado");
        this.selector.innerHTML = '';
        this.selector.innerHTML = `${this.template.getHTML()}`;

        this.asistidasController.init();  
    }

    public destroy(): void {
        const existingMenu = document.getElementById('menu-admin');
        if (existingMenu) existingMenu.remove();
    }
}
