export default class IngresoView {
    selector;
    selectorName = 'iingreso';
    template;
    constructor(template) {
        this.selector = document.createElement('div');
        this.template = template;
    }
    init = async () => {
        this.selector = document.getElementById(this.selectorName);
        setTimeout(() => {
            this.render();
        }, 100);
    };
    render = () => {
        console.log("se renderizo");
        this.selector.innerHTML = '';
        this.selector.innerHTML = this.template.getHTML();
    };
}
