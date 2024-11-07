import cAsistidasController from "../../cAsistidas/controller/cAsistidasController.js";
export default class AdminMenuView {
    selector;
    selectorName = 'admin';
    template;
    asistidasController; // Instanciar el controlador de asistidas
    constructor(template) {
        this.selector = document.createElement('div');
        this.template = template;
        this.asistidasController = new cAsistidasController(); // Instanciar el controlador
    }
    init() {
        this.selector = document.getElementById(this.selectorName);
        this.render();
    }
    render = () => {
        console.log("Formulario de ingreso renderizado");
        this.selector.innerHTML = '';
        this.selector.innerHTML = `${this.template.getHTML()}`;
        // Aquí llamamos al controlador de citas asistidas para renderizar las citas
        this.asistidasController.init(); // Inicia el controlador y renderiza las citas asistidas
    };
    destroy() {
        const existingMenu = document.getElementById('menu-admin');
        if (existingMenu)
            existingMenu.remove();
    }
}
