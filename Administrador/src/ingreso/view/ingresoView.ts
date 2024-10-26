import IngresoTemplate from "../template/ingresoTemplate.js";

export default class IngresoView {
    private selector: HTMLDivElement;
    private selectorName = 'ingreso';
    private template: IngresoTemplate;

    constructor(template: IngresoTemplate) {
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

        // Inicia la funcionalidad del toggle de contraseña
        this.template.initPasswordToggle();
    }
}
