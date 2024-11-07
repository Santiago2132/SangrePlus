import AgenteMenuTemplate from "../template/agenteMenuTemplate.js";
import AgenteMenuView from "../view/agenteMenuView.js";
import AgenteMenuModel from "../model/agenteMenuModel.js";

export default class AgenteMenuController {
    private agenteMenuView: AgenteMenuView;
    private agenteMenuModel: AgenteMenuModel;

    constructor() {
        this.agenteMenuView = new AgenteMenuView(new AgenteMenuTemplate());
        this.agenteMenuModel = new AgenteMenuModel();
    }

    public init() {
        console.log("Iniciando AgenteMenuController");
        this.agenteMenuView.init();
        this.render();
    }

    public render() {
        const turnosConCitas = this.agenteMenuModel.getTurnosConCitas();
        this.agenteMenuView.render(turnosConCitas);
    }
}
