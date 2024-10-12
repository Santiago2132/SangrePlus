import Error404 from "../../error/Error404.js";
export default class IndexController {
    error;
    constructor() {
        this.error = Error404.create();
    }
    init = async () => {
        this.error.init();
    };
}
