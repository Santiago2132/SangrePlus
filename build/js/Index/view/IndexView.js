export default class IndexView {
    elements;
    constructor() {
        this.elements = {
            searchForm: document.querySelector('#search') ??
                document.createElement('form'),
            main: document.querySelector('main') ?? document.createElement('main')
        };
        this.elements; //Por ahora xd
    }
    init = () => {
        console.log("init view");
    };
}
