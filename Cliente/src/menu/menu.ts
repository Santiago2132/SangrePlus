import MenuController from "./controller/menuController.js"

export default class menu { constructor(){ 
    console.log('constructor')
    }

    public static create =(): MenuController => {   
        const controller= new MenuController()
        controller.init()
        return controller

     }
    


}
