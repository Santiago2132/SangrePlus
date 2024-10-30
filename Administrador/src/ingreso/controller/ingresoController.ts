// Importamos las clases necesarias

import AdminMenuController from "../../adminMenu/controller/adminMenuController.js";
import { IngresoModel, User } from "../model/ingresoModel.js";
import IngresoTemplate from "../template/ingresoTemplate.js";
import IngresoView from "../view/ingresoView.js";

export default class IngresoController {
    private ingresoView: IngresoView;
    private ingresoModel: IngresoModel;
    private usuario: User | null = null;
    private adminMenu: AdminMenuController | null = null;
    constructor() {
        this.ingresoView = new IngresoView(new IngresoTemplate());
        this.ingresoModel = new IngresoModel();
        this.adminMenu = new AdminMenuController();
    }

    public init = (): void => {
        this.render();
    }

    public render = (): void => {
        document.addEventListener('DOMContentLoaded', () => {
            this.ingresoView.init();
            this.attachFormListener();
        });
    }

    private attachFormListener = (): void => {
        const form = document.getElementById('ingreso-form') as HTMLFormElement;
        if (form) {
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                const nombre = (document.getElementById('username') as HTMLInputElement).value;
                const password = (document.getElementById('password') as HTMLInputElement).value;
                this.authenticateUser(nombre, password);
            });
        }
    }

    private authenticateUser = (nombre: string, password: string): void => {
        const usuario = this.ingresoModel.obtenerUsuario(nombre, password);
        if (usuario) {
            this.usuario = usuario; // Guarda el usuario autenticado
            console.log(`Bienvenido ${usuario.tipo === 'admin' ? 'administrador' : 'agente'}: ${usuario.nombre}`);
            this.renderUserView(usuario);
        } else {
            alert('Credenciales incorrectas. Inténtelo de nuevo.');
        }
    }

    // Método para obtener el usuario autenticado
    public getUsuario(): User | null {
        return this.usuario;
    }

    private renderUserView = (usuario: User): void => {
        const ingresoContainer = document.getElementById(this.ingresoView.selectorName);
        if (ingresoContainer) ingresoContainer.remove();
        
        if (usuario.tipo === 'admin') {
            this.hideAllComponents()
            this.showComponent("admin")
            console.log('Cargando vista de administrador...');
            this.adminMenu?.init()
        } else {
            console.log('Cargando vista de agente...');
        }
    }
    private hideAllComponents(): void {
        const components = ['ingreso', 'admin', 'agente'];
        components.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display = 'none'; // Oculta el componente
            }
        });
    }
    private showComponent(component: string): void {
        const selectedComponent = document.getElementById(component);
        if (selectedComponent) {
            selectedComponent.style.display = 'block'; // Muestra el componente seleccionado
        }
    }
}
