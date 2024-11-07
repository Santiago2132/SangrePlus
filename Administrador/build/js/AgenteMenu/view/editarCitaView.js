export default class EditarCitaView {
    selector;
    selectorName = 'editar';
    template;
    constructor(template) {
        this.selector = document.createElement('div');
        this.template = template;
    }
    init() {
        this.selector = document.getElementById(this.selectorName);
        if (this.selector) {
            this.selector.style.display = 'block';
        }
        this.render();
    }
    render = () => {
        console.log("Editar Cita Rendering");
        this.selector.innerHTML = '';
        this.selector.innerHTML = `${this.template.getHTML()}`;
    };
}
