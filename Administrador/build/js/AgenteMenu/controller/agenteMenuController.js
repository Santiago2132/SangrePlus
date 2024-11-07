import AgenteMenuTemplate from "../template/agenteMenuTemplate.js";
import AgenteMenuView from "../view/agenteMenuView.js";
import AgenteMenuModel from "../model/agenteMenuModel.js";
export default class AgenteMenuController {
    agenteMenuView;
    agenteMenuModel;
    constructor() {
        this.agenteMenuView = new AgenteMenuView(new AgenteMenuTemplate());
        this.agenteMenuModel = new AgenteMenuModel();
    }
    init() {
        console.log("Iniciando AgenteMenuController");
        this.agenteMenuView.init();
        this.render();
    }
    render() {
        const turnosConCitas = this.agenteMenuModel.getTurnosConCitas();
        this.agenteMenuView.render(turnosConCitas);
    }
}
