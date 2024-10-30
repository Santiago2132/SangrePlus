import AdminMenuTemplate from "../template/adminMenuTemplate";

export default class AdminMenuView {
    private selector: HTMLDivElement;
    private selectorName = 'admin';
    private template: AdminMenuTemplate;

    constructor(template: AdminMenuTemplate) {
        this.selector = document.createElement('div');
        this.template = template;
    }

    public init() {
        this.selector = document.getElementById(this.selectorName) as HTMLDivElement;
        this.render();
    }

    public render = (): void => {
        console.log("Formulario de ingreso renderizado");
        this.selector.innerHTML = '';
        this.selector.innerHTML = `${this.template.getHTML()}`;

    }
    public destroy(): void {
        const existingMenu = document.getElementById('menu-admin');
        if (existingMenu) existingMenu.remove();
    }
}