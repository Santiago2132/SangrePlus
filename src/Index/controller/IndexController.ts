import ErrorController from "../../error/controller/ErrorController";
import Error404 from "../../error/Error404";

export default class IndexController {
    private error: ErrorController
    constructor() {
        this.error = Error404.create()
    }
    public init = async (): Promise<void> => {
        this.error.init()
    }
}