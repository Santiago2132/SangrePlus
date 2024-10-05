export default class IndexView {
    private elements: { [name: string]: HTMLElement };

    constructor() {
        this.elements = {
            searchForm:
                (document.querySelector('#search') as unknown as HTMLInputElement) ??
                document.createElement('form'),
            main: document.querySelector('main') ?? document.createElement('main')
        };
        this.elements//Por ahora xd
    }

    public init = (): void => {
        console.log("init view");
    }
}
