import YuliethController from "./Controller/YuliethController.js";
import YuliethView from "./View/YuliethView.js";


export default class Yulieth {
    private controller: YuliethController;

    constructor() {
        const view = new YuliethView();
        this.controller = new YuliethController(view);
    }

    public init(): void {
        this.controller.init();
    }
}

