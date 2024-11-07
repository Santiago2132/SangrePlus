import RouterExpress from "../../../../Express/Domain/RouterExpress"
import CitaControllerExpressPort from "../../../Domain/Port/Driver/CitaControllerExpressPort"
import CitaRouterExpressPort from "../../../Domain/Port/Driver/CitasRouterExpressPort"


export default class CitaRouterExpress extends RouterExpress implements CitaRouterExpressPort {

  constructor(private readonly citaController: CitaControllerExpressPort) {
    super()
    this.routes()
  }

  public routes = (): void => {
    this.getCitas()
  }

  public getCitas = (): void => {
    this.router.get(
      '/parcial/citas/cita',
      this.citaController.obtenercitas.bind(this.citaController)
    )
  }

  obtenerCitas(): void {
    this.router.get(
      '/parcial/citas/cita',
      this.citaController.obtenercitas.bind(this.citaController)
    )  
  }
  agregarCita(): void {
    this.router.get(
      '/parcial/citas/agregar',
      this.citaController.obtenercitas.bind(this.citaController)
    )   
  }
  modificarCita(): void {
    this.router.get(
      '/parcial/citas/modificar',
      this.citaController.obtenercitas.bind(this.citaController)
    ) 
  }
  cancelarCita(): void {
    this.router.get(
      '/parcial/citas/cancelar',
      this.citaController.obtenercitas.bind(this.citaController)
    ) 
  }
  obtenerCitaId(): void {
    this.router.get(
      '/parcial/citas/citaId',
      this.citaController.obtenercitas.bind(this.citaController)
    ) 
  }

}
