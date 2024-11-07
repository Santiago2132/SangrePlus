import IngresoController from "../../ingreso/controller/ingresoController.js";
export default class YuliethController {
    view;
    ingresoController;
    constructor(view) {
        this.view = view;
        this.ingresoController = new IngresoController(); // Se crea una instancia de IngresoController
    }
    init() {
        console.log('Initializing Yulieth Controller');
        this.view.init();
        // Iniciar la vista de ingreso por defecto
        this.renderIngreso();
        // Configurar los manejadores de eventos
        this.setupIngresoHandler();
        this.setupCerrarHandler();
    }
    // Configura el botón de ingreso para siempre renderizar la vista de ingreso
    setupIngresoHandler() {
        this.view.onIngresoClick(() => {
            console.log('Ingreso button clicked');
            this.renderIngreso();
            this.ingresoController.clearForm(); // Limpia el formulario al volver a renderizar
        });
    }
    // Configura el botón de cerrar para también renderizar la vista de ingreso
    setupCerrarHandler() {
        this.view.onCerrarClick(() => {
            console.log('Cerrar button clicked');
            this.renderIngreso();
            this.ingresoController.clearForm(); // Limpia el formulario al volver a renderizar
        });
    }
    // Renderiza la vista de ingreso utilizando el IngresoController
    renderIngreso() {
        this.ingresoController.init(); // Renderiza el formulario de ingreso
        console.log('Rendering Ingreso View...');
    }
}
