import TurnosTemplate from "../Template/TurnosTemplate.js";
import TurnosView from "../View/TurnosView.js";
import TurnosModel from "../Model/TurnosModel.js";
export default class TurnosController {
    turnosView;
    turnosModel;
    constructor() {
        this.turnosModel = new TurnosModel();
        this.turnosView = new TurnosView(new TurnosTemplate());
    }
    init = async () => {
        // Obtener los turnos del modelo
        this.turnosModel.cargarTurnos(); // Cargar los turnos desde el modelo
        const turnos = this.turnosModel.getTurnos();
        // Pasar los turnos a la vista
        this.turnosView.setTurnos(turnos);
        this.render();
    };
    render = () => {
        document.addEventListener('DOMContentLoaded', () => {
            this.turnosView.init().then(() => {
                console.log('TurnosView initialized and rendered.');
            }).catch((error) => {
                console.error('Error initializing TurnosView:', error);
            });
        });
    };
}
