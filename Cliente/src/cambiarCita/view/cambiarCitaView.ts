import CambiarCitaTemplate from "../template/cambiarCitaTemplate.js";

export default class CambiarCitaView {

    private selector: HTMLDivElement;
    private selectorName = 'cambiar';
    private template: CambiarCitaTemplate;

    constructor(template : CambiarCitaTemplate){
        this.selector = document.createElement('div');
        this.template = template;
    }

    public init = async (): Promise<void> =>{
        this.selector = document.getElementById(this.selectorName) as HTMLDivElement;
        setTimeout(() =>{
            this.render();
        },100);
    }
    public render = (): void => {
        // Limpiar cualquier contenido previo
        this.selector.innerHTML = '';
        
        // Inyectar el HTML generado por el template directamente en el selector
        this.selector.innerHTML = this.template.getHTML();

    }
}
