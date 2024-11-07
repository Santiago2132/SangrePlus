import YuliethController from "./Controller/YuliethController.js";
import YuliethView from "./View/YuliethView.js";
export default class Yulieth {
    controller;
    constructor() {
        const view = new YuliethView();
        this.controller = new YuliethController(view);
    }
    init() {
        this.controller.init();
    }
}
