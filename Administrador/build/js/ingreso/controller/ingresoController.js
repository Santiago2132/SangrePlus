// Importamos las clases necesarias
import AdminMenuController from "../../adminMenu/controller/adminMenuController.js";
import AgenteMenuController from "../../AgenteMenu/controller/agenteMenuController.js";
import { IngresoModel } from "../model/ingresoModel.js";
import IngresoTemplate from "../template/ingresoTemplate.js";
import IngresoView from "../view/ingresoView.js";
export default class IngresoController {
    ingresoView;
    ingresoModel;
    usuario = null;
    adminMenu = null;
    agenteMenu = null;
    constructor() {
        this.ingresoView = new IngresoView(new IngresoTemplate());
        this.ingresoModel = new IngresoModel();
        this.adminMenu = new AdminMenuController();
        this.agenteMenu = new AgenteMenuController();
    }
    init = () => {
        this.render();
    };
    render = () => {
        document.addEventListener('DOMContentLoaded', () => {
            this.ingresoView.init();
            this.attachFormListener();
        });
    };
    attachFormListener = () => {
        const form = document.getElementById('ingreso-form');
        if (form) {
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                const nombre = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                this.authenticateUser(nombre, password);
            });
        }
    };
    authenticateUser = async (nombre, password) => {
        const usuario = await this.ingresoModel.obtenerUsuario(nombre, password);
        if (usuario) {
            this.usuario = usuario; // Guarda el usuario autenticado
            console.log(`Bienvenido ${usuario.tipo === 'admin' ? 'administrador' : 'agente'}: ${usuario.nombre}`);
            this.renderUserView(usuario);
        }
        else {
            alert('Credenciales incorrectas. Inténtelo de nuevo.');
        }
    };
    // Método para obtener el usuario autenticado
    getUsuario() {
        return this.usuario;
    }
    renderUserView = (usuario) => {
        const ingresoContainer = document.getElementById(this.ingresoView.selectorName);
        if (ingresoContainer)
            ingresoContainer.style.display = 'none'; // Oculta el contenedor sin eliminarlo
        if (usuario.tipo === 'admin') {
            this.showComponent("admin");
            console.log('Cargando vista de administrador...');
            this.adminMenu?.init();
        }
        else {
            console.log('Cargando vista de agente...');
            this.agenteMenu?.init();
        }
    };
    showComponent(component) {
        const selectedComponent = document.getElementById(component);
        if (selectedComponent) {
            selectedComponent.style.display = 'block'; // Muestra el componente seleccionado
        }
    }
    // Nuevo método para limpiar el formulario
    clearForm = () => {
        this.ingresoView.clearInputs();
    };
}
