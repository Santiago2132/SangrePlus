import cNoAsistidasModel from "../model/cNoAsistidasModel.js";
import cNoAsistidasTemplate from "../template/cNoAsistidasTemplate.js";
import cNoAsistidasView from "../view/cNoAsistidasView.js";


export default class cNoAsistidasController {
    private model: cNoAsistidasModel;
    private view: cNoAsistidasView;

    constructor() {
        this.model = new cNoAsistidasModel();
        this.view = new cNoAsistidasView(new cNoAsistidasTemplate());
    }

    public init() {
        console.log("Citas asistidas Controller iniciado");
        this.render();
    }

    private async render() {
        const citasAsistidas = await this.model.getCitasNoAsistidas();
        this.view.render(citasAsistidas);
    }
}
