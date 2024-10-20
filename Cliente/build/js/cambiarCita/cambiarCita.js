import cambiarCitaController from "./controller/cambiarCitaController.js";
export default class cambiarCita {
    constructor() { }
    static create = () => {
        const controller = new cambiarCitaController();
        controller.init();
        return controller;
    };
}
