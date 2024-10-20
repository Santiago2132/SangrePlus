import IndexController from './controller/IndexController.js';
export default class Index {
    static create = () => {
        const controller = new IndexController();
        controller.init();
        return controller;
    };
}
