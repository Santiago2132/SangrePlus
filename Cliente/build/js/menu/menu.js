import MenuController from "./controller/menuController.js";
export default class menu {
    constructor() {
        console.log('constructor');
    }
    static create = () => {
        const controller = new MenuController();
        controller.init();
        return controller;
    };
}
