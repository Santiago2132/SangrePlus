import cAsistidasModel from "../model/cAsistidasModel.js";
import cAsistidasView from "../view/cAsistidasView.js";
import cAsistidasTemplate from "../template/cAsistidasTemplate.js";
export default class cAsistidasController {
    model;
    view;
    constructor() {
        this.model = new cAsistidasModel();
        this.view = new cAsistidasView(new cAsistidasTemplate());
    }
    init() {
        console.log("Citas asistidas Controller iniciado");
        this.render();
    }
    render() {
        const citasAsistidas = this.model.getCitasAsistidas();
        this.view.render(citasAsistidas);
    }
}
