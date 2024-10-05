import ErrorController from "../../error/controller/ErrorController.js";
import Error404 from "../../error/Error404.js";

export default class IndexController {
    private error: ErrorController
    constructor() {
        this.error = Error404.create()
    }
    public init = async (): Promise<void> => {
        this.error.init()
    }
}