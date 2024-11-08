// AgenteMenuController.ts
import AgenteMenuTemplate from "../template/agenteMenuTemplate.js";
import AgenteMenuView from "../view/agenteMenuView.js";
import AgenteMenuModel from "../model/agenteMenuModel.js";

export default class AgenteMenuController {
    private agenteMenuView: AgenteMenuView;
    private agenteMenuModel: AgenteMenuModel;

    constructor() {
        this.agenteMenuModel = new AgenteMenuModel();
        this.agenteMenuView = new AgenteMenuView(new AgenteMenuTemplate(), this.onOrdenChange, this.onEliminarTurno);
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

    private onOrdenChange = (nuevoOrden: any[]): void => {
        this.agenteMenuModel.setTurnosConCitas(nuevoOrden);
        this.render();
    }

    private onEliminarTurno = (id_turno: number): void => {
        console.log("Eliminando turno con ID:", id_turno);
        this.agenteMenuModel.eliminarTurno(id_turno);  // Llamar al método de eliminación en el modelo
        this.render();  // Actualizar la vista después de la eliminación
    }
}
