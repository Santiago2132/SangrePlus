import editarCitaTemplate from "../template/editarCitaTemplate.js";

export default class EditarCitaView {
    private selector: HTMLDivElement;
    private selectorName = 'editar';
    private template: editarCitaTemplate;
    
    constructor(template: editarCitaTemplate) {
        this.selector = document.createElement('div'); 
        this.template = template;
    }
    public init() {
        this.selector = document.getElementById(this.selectorName) as HTMLDivElement;
        if (this.selector) {
            this.selector.style.display = 'block'; 
        }
        this.render();
    }

    public render = (): void => {
        console.log("Editar Cita Rendering");
        this.selector.innerHTML = '';
        this.selector.innerHTML = `${this.template.getHTML()}`;

    }
}