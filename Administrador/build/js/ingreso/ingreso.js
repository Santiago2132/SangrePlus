import IngresoController from "./controller/ingresoController.js";
export default class Ingreso {
    constructor() {
        console.log('constructor');
    }
    static create = () => {
        const controller = new IngresoController();
        controller.init();
        return controller;
    };
}
