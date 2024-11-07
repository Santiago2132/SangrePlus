import AgenteMenuTemplate from "../template/agenteMenuTemplate.js";
import AgenteMenuView from "../view/agenteMenuView.js";
import AgenteMenuModel from "../model/agenteMenuModel.js";
export default class AgenteMenuController {
    agenteMenuView;
    agenteMenuModel;
    constructor() {
        this.agenteMenuModel = new AgenteMenuModel();
        this.agenteMenuView = new AgenteMenuView(new AgenteMenuTemplate(), this.onOrdenChange);
    }
    init() {
        console.log("Iniciando AgenteMenuController");
        this.agenteMenuView.init();
        this.render();
    }
    render() {
        // Obtener datos del modelo
        const turnosConCitas = this.agenteMenuModel.getTurnosConCitas();
        this.agenteMenuView.render(turnosConCitas);
    }
    onOrdenChange = (nuevoOrden) => {
        // Actualizar el modelo con el nuevo orden
        console.log("Orden cambiado:", nuevoOrden); // Log para confirmar el nuevo orden recibido
        this.agenteMenuModel.setTurnosConCitas(nuevoOrden);
        this.render(); // Renderizar con los datos actualizados
    };
}
