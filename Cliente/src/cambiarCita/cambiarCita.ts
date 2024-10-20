import cambiarCitaController from "./controller/cambiarCitaController.js"

export default class cambiarCita { 
    constructor(){ }

    public static create =(): cambiarCitaController => {   
        const controller= new cambiarCitaController()
        controller.init()
        return controller
         
     }
}

