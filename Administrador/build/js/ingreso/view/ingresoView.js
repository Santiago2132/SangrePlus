export default class IngresoView {
    selector;
    selectorName = 'ingreso';
    template;
    constructor(template) {
        this.selector = document.createElement('div');
        this.template = template;
    }
    init() {
        this.selector = document.querySelector(this.selectorName);
        this.render();
    }
    render = () => {
        console.log("se renderizo");
        this.selector.innerHTML = '';
        this.selector.innerHTML = `${this.template.getHTML()}`;
        console.log(this.selector + 't');
    };
}
