export class IndexView {
    pagina;
    constructor() {
        this.pagina = document.querySelector('pagina');
    }
    render(content) {
        this.pagina.innerHTML = content;
    }
}
