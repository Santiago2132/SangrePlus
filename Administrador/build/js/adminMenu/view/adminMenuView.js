export default class AdminMenuView {
    selector;
    selectorName = 'admin';
    template;
    constructor(template) {
        this.selector = document.createElement('div');
        this.template = template;
    }
    init() {
        this.selector = document.getElementById(this.selectorName);
        this.render();
    }
    render = () => {
        console.log("Formulario de ingreso renderizado");
        this.selector.innerHTML = '';
        this.selector.innerHTML = `${this.template.getHTML()}`;
    };
    destroy() {
        const existingMenu = document.getElementById('menu-admin');
        if (existingMenu)
            existingMenu.remove();
    }
}
