import RouterExpress from "../../../../Express/Domain/RouterExpress"
import CitaControllerExpressPort from "../../../Domain/Port/Driver/CitaControllerExpressPort"
import CitaRouterExpressPort from "../../../Domain/Port/Driver/CitasRouterExpressPort"


export default class CitaRouterExpress extends RouterExpress implements CitaRouterExpressPort {
  constructor(private readonly citaController: CitaControllerExpressPort) {
    super()
    this.routes()
  }
    carruselDeCitas(): void {
        throw new Error("Method not implemented.")
    }

  public routes = (): void => {
    this.getMovies()
  }

  public getMovies = (): void => {
    this.router.get(
      '/v1/citas/cita',
      this.citaController.citas.bind(this.citaController)
    )
  }
}
