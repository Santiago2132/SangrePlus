import IndexController from './controller/IndexController.js';
import IndexTemplate from './template/IndexTemplate.js';
import IndexView from './view/IndexView.js';

export default class Index {
    public static create =(): IndexController => {   
       const controller= new IndexController()
       controller.init()
       return controller
        
    }
}


