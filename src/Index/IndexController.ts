
import { IndexModel } from './IndexModel';
import { IndexView } from './IndexView';

export class IndexController {
    private model: IndexModel;
    private view: IndexView;

    constructor() {
        this.model = new IndexModel();
        this.view = new IndexView();
    }

    public init(): void {
        const message = this.model.getMessage();
        this.view.render(`<h1>${message}</h1>`);
    }
}
