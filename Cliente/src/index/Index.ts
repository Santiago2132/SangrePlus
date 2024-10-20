import IndexController from './controller/IndexController.js';

export default class Index {
    public static create =(): IndexController => {   
       const controller= new IndexController()
       controller.init()
       return controller
        
    }
}


