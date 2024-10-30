import AdminMenuTemplate from "../template/adminMenuTemplate.js";
import AdminMenuView from "../view/adminMenuView.js";
export default class AdminMenuController {
    adminMenuView;
    constructor() {
        this.adminMenuView = new AdminMenuView(new AdminMenuTemplate());
    }
    init() {
        this.adminMenuView.init();
        this.render();
    }
    render() {
        this.adminMenuView.render();
    }
}
