
import IngresoController from "./controller/ingresoController.js"

export default class Ingreso {
    constructor(){
        console.log('constructor')
    }
    public static create =(): IngresoController => {
        const controller = new IngresoController()
        return controller
    }
}

