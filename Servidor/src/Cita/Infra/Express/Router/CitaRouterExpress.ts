import RouterExpress from "../../../../Express/Domain/RouterExpress"
import CitaControllerExpressPort from "../../../Domain/Port/Driver/CitaControllerExpressPort"
import CitaRouterExpressPort from "../../../Domain/Port/Driver/CitasRouterExpressPort"


export default class CitaRouterExpress extends RouterExpress implements CitaRouterExpressPort {

  constructor(private readonly citaController: CitaControllerExpressPort) {
    super()
    this.routes()
  }

  public routes = (): void => {
    this.obtenerCitas()
    this.obtenerCitaId()
    this.agregarCita()
    this.cancelarCita()
    this.modificarCita()
  }


  obtenerCitas(): void {
    this.router.get(
      '/parcial/citas/cita',
      this.citaController.obtenercitas.bind(this.citaController)
    )  
  }
  agregarCita(): void {
    this.router.post(
      '/parcial/citas/agregar',
      this.citaController.agregarCita.bind(this.citaController)
    )   
  }
  modificarCita(): void {
    this.router.post(
      '/parcial/citas/modificar',
      this.citaController.modificarCita.bind(this.citaController)
    ) 
  }
  cancelarCita(): void {
    this.router.post(
      '/parcial/citas/cancelar',
      this.citaController.eliminarCita.bind(this.citaController)
    ) 
  }
  obtenerCitaId(): void {
    this.router.get(
      '/parcial/citas/citaId/:id',
      this.citaController.obtenerCitaId.bind(this.citaController)
    ) 
  }

}
