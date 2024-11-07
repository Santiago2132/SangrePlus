import cAsistidasController from "../../cAsistidas/controller/cAsistidasController.js";
export default class AdminMenuView {
    selector;
    selectorName = 'admin';
    template;
    asistidasController;
    constructor(template) {
        this.selector = document.createElement('div');
        this.template = template;
        this.asistidasController = new cAsistidasController();
    }
    init() {
        this.selector = document.getElementById(this.selectorName);
        this.render();
    }
    render = () => {
        console.log("Formulario de ingreso renderizado");
        this.selector.innerHTML = '';
        this.selector.innerHTML = `${this.template.getHTML()}`;
        this.asistidasController.init();
    };
    destroy() {
        const existingMenu = document.getElementById('menu-admin');
        if (existingMenu)
            existingMenu.remove();
    }
}
