import IngresoTemplate from "../template/ingresoTemplate.js";

export default class IngresoView {
    private selector: HTMLDivElement;
    private selectorName = 'iingreso';
    private template: IngresoTemplate;

    constructor(template : IngresoTemplate){
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
        console.log("se renderizo")
        this.selector.innerHTML = '';
        
        this.selector.innerHTML = this.template.getHTML();

    }
}