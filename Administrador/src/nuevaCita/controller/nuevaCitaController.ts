import nuevaCitaTemplate from "../template/nuevaCitaTemplate.js"
import NuevaCitaView from "../view/nuevaCitaView.js"

export default class nuevaCitaController { 
    private nuevaCitaView: NuevaCitaView
    constructor(){ 
        this.nuevaCitaView = new NuevaCitaView(new nuevaCitaTemplate());
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
