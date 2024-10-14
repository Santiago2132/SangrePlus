import IndexTemplate from "../template/IndexTemplate.js";
import IndexView from "../view/IndexView.js";

export default class IndexController {

    private indexView: IndexView;

    constructor() {
        this.indexView = new IndexView(IndexTemplate); // Se instancia IndexView con IndexTemplate
    }

    // Método init para inicializar la vista principal
    public init = (): void => {
        this.render(); // Llamamos al método render cuando se inicializa el controlador
    }

    // Método para renderizar la vista principal
    public render = (): void => {
        // Asegurarse de que el DOM está completamente cargado
        document.addEventListener('DOMContentLoaded', () => {
            // Inicializar la vista para que se renderice en el div con el ID 'main'
            this.indexView.init().then(() => {
                console.log('IndexView initialized and rendered.');
            }).catch((error) => {
                console.error('Error initializing IndexView:', error);
            });
        });
    }
}
