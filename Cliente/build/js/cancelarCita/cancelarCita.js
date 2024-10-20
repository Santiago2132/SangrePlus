import cancelarControllerCita from './controller/cancelarCitaController.js';
export default class cancelarCita {
    constructor() {
        console.log('constructor');
    }
    static create = () => {
        const controller = new cancelarControllerCita();
        controller.init();
        return controller;
    };
}
