import MenuController from "./controller/menuController.js"

export default class Menu { constructor(){ 
    console.log('constructor')
    }

    public static create =(): MenuController => {   
        const controller= new MenuController()
        controller.init()
        return controller

    }
}
