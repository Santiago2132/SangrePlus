import cancelarControllerCita from './controller/cancelarCitaController.js'

export default class cancelarCita { 
    constructor(){ 
    console.log('constructor')
    }

    public static create =(): cancelarControllerCita => {   
        const controller= new cancelarControllerCita()
        controller.init()
        return controller

     }
}
