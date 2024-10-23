import CambiarCitaTemplate from "../template/cambiarCitaTemplate.js";
import CambiarCitaView from "../view/cambiarCitaView.js";
export default class cambiarCitaController {
    nuevaCitaView;
    constructor() {
        this.nuevaCitaView = new CambiarCitaView(new CambiarCitaTemplate());
    }
    init = () => {
        this.render(); // Llamamos al método render cuando se inicializa el controlador
    };
    // Método para renderizar la vista principal
    render = () => {
        // Asegurarse de que el DOM está completamente cargado
        document.addEventListener('DOMContentLoaded', () => {
            // Inicializar la vista para que se renderice en el div con el ID 'main'
            this.nuevaCitaView.init().then(() => {
                console.log('IndexView initialized and rendered.');
            }).catch((error) => {
                console.error('Error initializing IndexView:', error);
            });
        });
    };
}
