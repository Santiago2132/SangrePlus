import IngresoTemplate from "../template/ingresoTemplate.js";
import IngresoView from "../view/ingresoView.js";

export default class IngresoController { 
    private ingresoView: IngresoView
    constructor(){ 
        this.ingresoView = new IngresoView(new IngresoTemplate);
    }
    public init = (): void => {
        this.render(); // Llamamos al método render cuando se inicializa el controlador
    }



    // Método para renderizar la vista principal
    public render = (): void => {
        // Asegurarse de que el DOM está completamente cargado
        document.addEventListener('DOMContentLoaded', () => {
            // Inicializar la vista para que se renderice en el div con el ID 'main'
            this.ingresoView.init().then(() => {
                console.log('IndexView initialized and rendered.');
            }).catch((error) => {
                console.error('Error initializing IndexView:', error);
            });
        });
    }
}