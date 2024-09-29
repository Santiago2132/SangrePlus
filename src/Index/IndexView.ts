export class IndexView {
    private pagina: HTMLElement;

    constructor() {
        this.pagina = document.querySelector('pagina') as HTMLElement;
    }

    public render(content: string): void {
        this.pagina.innerHTML = content;
    }
}
