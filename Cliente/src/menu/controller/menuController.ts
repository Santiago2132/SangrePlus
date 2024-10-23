import nuevaController from "../../nuevaCita/controller/nuevaCitaController.js";
import cambiarController from "../../cambiarCita/controller/cambiarCitaController.js";
import cancelarCita from "../../cancelarCita/cancelarCita.js";
import nuevaCita from "../../nuevaCita/nuevaCita.js";
import cambiarCita from "../../cambiarCita/cambiarCita.js";
import menuView from "../view/menuView.js";
import indexController from "../../index/controller/IndexController.js";
import Index from "../../index/Index.js";
import cancelarCitaController from "../../cancelarCita/controller/cancelarCitaController.js";

export default class MenuController {

private view: menuView
  private readonly nueva: nuevaController
  private readonly cancelar: cancelarCitaController
  private readonly cambiar: cambiarController
  private readonly index: indexController

  constructor() 
  {
    this.view= new menuView()
    this.nueva = nuevaCita.create()
    this.cancelar = cancelarCita.create()
    this.cambiar = cambiarCita.create()
    this.index= Index.create()
  }
  
  public init(): void {
    this.view.init()
    this.index.init()

    // Vincula los eventos para cargar cada componente en función del botón seleccionado
    this.view.onAgendarClick(() => this.loadMain('nueva'));
    this.view.onInicioClick(() => this.loadMain('inicio'));
    this.view.onModificarClick(() => this.loadMain('cambiar'));
    this.view.onCancelarClick(() => this.loadMain('cancelar'));
  }

  public loadMain = async (component: string): Promise<void> => {
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
  }

  
  private async loadIndex(): Promise<void> {
    this.index.init()
    // Aquí va la lógica para cargar el componente Agendar
  }

  private async loadNueva(): Promise<void> {
    this.nueva.init()
    // Aquí va la lógica para cargar el componente Agendar
  }

  private async loadCambiar(): Promise<void> {
    this.cambiar.init()
    // Aquí va la lógica para cargar el componente Modificar
  }

  private async loadCancelar(): Promise<void> {
    this.cancelar.init()
    // Aquí va la lógica para cargar el componente Cancelar
  }

  public showMenu(): void {
    this.init()
  }


 
 
}
