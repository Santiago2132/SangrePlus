export default class IngresoView {
    selector;
    selectorName = 'ingreso';
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
        // Inicia la funcionalidad del toggle de contraseña
        this.template.initPasswordToggle();
    };
}
