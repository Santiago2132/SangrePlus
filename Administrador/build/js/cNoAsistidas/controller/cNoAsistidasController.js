import cNoAsistidasModel from "../model/cNoAsistidasModel.js";
import cNoAsistidasTemplate from "../template/cNoAsistidasTemplate.js";
import cNoAsistidasView from "../view/cNoAsistidasView.js";
export default class cNoAsistidasController {
    model;
    view;
    constructor() {
        this.model = new cNoAsistidasModel();
        this.view = new cNoAsistidasView(new cNoAsistidasTemplate());
    }
    init() {
        console.log("Citas asistidas Controller iniciado");
        this.render();
    }
    render() {
        const citasAsistidas = this.model.getCitasNoAsistidas();
        this.view.render(citasAsistidas);
    }
}
