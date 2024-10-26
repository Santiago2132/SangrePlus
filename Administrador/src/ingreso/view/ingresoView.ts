import IngresoTemplate from "../template/ingresoTemplate.js";

export default class IngresoView {
    private selector: HTMLDivElement;
    private selectorName = 'ingreso';
    private template: IngresoTemplate;

    constructor(template : IngresoTemplate){
        this.selector = document.createElement('div');
        this.template = template;
    }

    public init (){
        this.selector = document.querySelector(this.selectorName) as HTMLDivElement;
        this.render()
    }

    public render = (): void => {
        console.log("se renderizo")
        this.selector.innerHTML = '';
        
        this.selector.innerHTML = `${this.template.getHTML()}`;

        console.log(this.selector + 't')
    }
}