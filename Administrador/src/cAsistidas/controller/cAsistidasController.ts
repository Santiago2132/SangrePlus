import cAsistidasModel from "../model/cAsistidasModel.js";
import cAsistidasView from "../view/cAsistidasView.js";
import cAsistidasTemplate from "../template/cAsistidasTemplate.js";

export default class cAsistidasController {
    private model: cAsistidasModel;
    private view: cAsistidasView;

    constructor() {
        this.model = new cAsistidasModel();
        this.view = new cAsistidasView(new cAsistidasTemplate());
    }

    public init() {
        console.log("Citas asistidas Controller iniciado");
        this.render();
    }

    private render() {
        const citasAsistidas = this.model.getCitasAsistidas();
        this.view.render(citasAsistidas);
    }
}
