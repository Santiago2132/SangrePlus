import cancelarCita from "../../cancelarCita/cancelarCita.js";
import nuevaCita from "../../nuevaCita/nuevaCita.js";
import cambiarCita from "../../cambiarCita/cambiarCita.js";
import menuView from "../view/menuView.js";
import Index from "../../index/Index.js";
export default class MenuController {
    view;
    nueva;
    cancelar;
    cambiar;
    index;
    constructor() {
        this.view = new menuView();
        this.nueva = nuevaCita.create();
        this.cancelar = cancelarCita.create();
        this.cambiar = cambiarCita.create();
        this.index = Index.create();
    }
    init() {
        this.view.init();
        this.index.init();
        // Vincula los eventos para cargar cada componente en función del botón seleccionado
        this.view.onAgendarClick(() => this.loadMain('nueva'));
        this.view.onInicioClick(() => this.loadMain('inicio'));
        this.view.onModificarClick(() => this.loadMain('cambiar'));
        this.view.onCancelarClick(() => this.loadMain('cancelar'));
    }
    loadMain = async (component) => {
        this.view.renderMain(component);
        switch (component) {
            case 'inicio':
                await this.loadIndex();
                break;
            case 'nueva':
                await this.loadNueva();
                break;
            case 'cambiar':
                await this.loadCambiar();
                break;
            case 'cancelar':
                await this.loadCancelar();
                break;
            default:
                console.error("Componente no encontrado:", component);
        }
    };
    async loadIndex() {
        this.index.init();
        // Aquí va la lógica para cargar el componente Agendar
    }
    async loadNueva() {
        this.nueva.init();
        // Aquí va la lógica para cargar el componente Agendar
    }
    async loadCambiar() {
        this.cambiar.init();
        // Aquí va la lógica para cargar el componente Modificar
    }
    async loadCancelar() {
        this.cancelar.init();
        // Aquí va la lógica para cargar el componente Cancelar
    }
    showMenu() {
        this.init();
    }
}
