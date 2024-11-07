import IngresoController from "../../ingreso/controller/ingresoController.js";
import YuliethView from "../View/YuliethView.js";



export default class YuliethController {
    private view: YuliethView;
    private ingresoController: IngresoController;

    constructor(view: YuliethView) {
        this.view = view;
        this.ingresoController = new IngresoController(); // Se crea una instancia de IngresoController
    }

    public init(): void {
        console.log('Initializing Yulieth Controller');
        this.view.init();

        // Iniciar la vista de ingreso por defecto
        this.renderIngreso();

        // Configurar los manejadores de eventos
        this.setupIngresoHandler();
        this.setupCerrarHandler();
    }

    // Configura el botón de ingreso para siempre renderizar la vista de ingreso
    private setupIngresoHandler(): void {
        this.view.onIngresoClick(() => {
            console.log('Ingreso button clicked');
            this.renderIngreso();
            this.ingresoController.clearForm(); // Limpia el formulario al volver a renderizar
        });
    }

    // Configura el botón de cerrar para también renderizar la vista de ingreso
    private setupCerrarHandler(): void {
        this.view.onCerrarClick(() => {
            console.log('Cerrar button clicked');
            this.renderIngreso();
            this.ingresoController.clearForm(); // Limpia el formulario al volver a renderizar
        });
    }

    // Renderiza la vista de ingreso utilizando el IngresoController
    private renderIngreso(): void {
        this.ingresoController.init(); // Renderiza el formulario de ingreso
        console.log('Rendering Ingreso View...');
    }
}
