import nuevaCitaController from "./controller/nuevaCitaController.js";
export default class nuevaCita {
    constructor() {
        console.log('constructor');
    }
    static create = () => {
        const controller = new nuevaCitaController();
        controller.init();
        return controller;
    };
}
