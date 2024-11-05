import TurnosController from "./Controller/TurnosController.js";
export default class Turnos {
    constructor() {
        console.log('constructor');
    }
    static create = () => {
        const controller = new TurnosController();
        controller.init();
        return controller;
    };
}
