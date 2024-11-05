import TurnosController from "./Controller/TurnosController.js"


export default class Turnos { 
    constructor(){ 
    console.log('constructor')
    }

    public static create =(): TurnosController => {   
        const controller= new TurnosController()
        controller.init()
        return controller

     }
    
}
