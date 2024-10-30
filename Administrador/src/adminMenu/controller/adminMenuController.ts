import AdminMenuTemplate from "../template/adminMenuTemplate.js";
import AdminMenuView from "../view/adminMenuView.js";

export default class AdminMenuController {
    private adminMenuView: AdminMenuView;
    constructor() {
        this.adminMenuView = new AdminMenuView(new AdminMenuTemplate());
    }
    public init() {
        console.log("AdminMenuController")
        this.adminMenuView.init();
        this.render();
    }
    public render() {
        this.adminMenuView.render();
    }
}