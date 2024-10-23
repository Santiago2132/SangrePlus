import CambiarCitaTemplate from "../template/cambiarCitaTemplate.js";
import CambiarCitaView from "../view/cambiarCitaView.js";

export default class cambiarCitaController { 
    private nuevaCitaView: CambiarCitaView
    constructor(){ 
        this.nuevaCitaView = new CambiarCitaView(new CambiarCitaTemplate());
    }
    public init = (): void => {
        this.render(); // Llamamos al método render cuando se inicializa el controlador
    }



    // Método para renderizar la vista principal
    public render = (): void => {
        // Asegurarse de que el DOM está completamente cargado
        document.addEventListener('DOMContentLoaded', () => {
            // Inicializar la vista para que se renderice en el div con el ID 'main'
            this.nuevaCitaView.init().then(() => {
                console.log('IndexView initialized and rendered.');
            }).catch((error) => {
                console.error('Error initializing IndexView:', error);
            });
        });
    }
}
