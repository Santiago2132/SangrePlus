// Importamos las clases necesarias
import AdminMenuController from "../../adminMenu/controller/adminMenuController.js";
import { IngresoModel } from "../model/ingresoModel.js";
import IngresoTemplate from "../template/ingresoTemplate.js";
import IngresoView from "../view/ingresoView.js";
export default class IngresoController {
    ingresoView;
    ingresoModel;
    usuario = null;
    adminMenu = null;
    constructor() {
        this.ingresoView = new IngresoView(new IngresoTemplate());
        this.ingresoModel = new IngresoModel();
        this.adminMenu = new AdminMenuController();
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
    authenticateUser = (nombre, password) => {
        const usuario = this.ingresoModel.obtenerUsuario(nombre, password);
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
            ingresoContainer.remove();
        if (usuario.tipo === 'admin') {
            this.hideAllComponents();
            this.showComponent("admin");
            console.log('Cargando vista de administrador...');
            this.adminMenu?.init();
        }
        else {
            console.log('Cargando vista de agente...');
        }
    };
    hideAllComponents() {
        const components = ['ingreso', 'admin', 'agente'];
        components.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display = 'none'; // Oculta el componente
            }
        });
    }
    showComponent(component) {
        const selectedComponent = document.getElementById(component);
        if (selectedComponent) {
            selectedComponent.style.display = 'block'; // Muestra el componente seleccionado
        }
    }
}
