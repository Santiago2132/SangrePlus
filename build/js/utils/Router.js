import { IndexController } from "../Index/IndexController.js";
export class Router {
    routes;
    constructor() {
        this.routes = {
            'home': IndexController,
        };
    }
    loadRoute(route) {
        const controllerClass = this.routes[route];
        if (controllerClass) {
            const controller = new controllerClass();
            controller.init();
        }
        else {
            console.error(`Route ${route} not found`);
        }
    }
}
