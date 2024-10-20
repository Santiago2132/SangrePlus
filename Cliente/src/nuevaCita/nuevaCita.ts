import nuevaCitaController from "./controller/nuevaCitaController.js"

export default class nuevaCita { 
    constructor(){ 
    console.log('constructor')
    }

    public static create =(): nuevaCitaController => {   
        const controller= new nuevaCitaController()
        controller.init()
        return controller

     }
    
}
