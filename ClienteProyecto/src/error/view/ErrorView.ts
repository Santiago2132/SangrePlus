import ErrorTemplate from "../template/ErrorTemplate";

export default class ErrorView {
    private selector: HTMLDivElement;
    private readonly selectorName = 'error'
    constructor(){
        this.selector = document.createElement('div');
    }
    public init = () => {
        this.selector = document.querySelector(this.selectorName) as HTMLDivElement;
        console.log('ErrorView initialized')
    }

    public render = () => {
        this.selector.innerHTML = ''
        const div = document.createElement('div')
        div.className = 'error'
        div.innerHTML = ErrorTemplate.create()
        this.selector.appendChild(div)
    }
}