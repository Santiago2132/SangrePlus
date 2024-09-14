import { IndexModel } from './IndexModel';
import { IndexView } from './IndexView';
export class IndexController {
    model;
    view;
    constructor() {
        this.model = new IndexModel();
        this.view = new IndexView();
    }
    init() {
        const message = this.model.getMessage();
        this.view.render(`<h1>${message}</h1>`);
    }
}
