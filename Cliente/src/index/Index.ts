import IndexController from './controller/IndexController';

export default class Index {
    private indexController: IndexController;

    constructor() {
        this.indexController = new IndexController(); // Instanciar el controlador
    }

    // Método para inicializar la aplicación cuando el DOM esté cargado
    public init = (): void => {
        document.addEventListener('DOMContentLoaded', () => {
            this.indexController.init(); // Llamar al método init del controlador
        });
    }
}