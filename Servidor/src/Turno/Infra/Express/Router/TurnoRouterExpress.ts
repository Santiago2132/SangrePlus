import RouterExpress from "../../../../Express/Domain/RouterExpress"
import TurnoControllerExpressPort from "../../../Domain/Port/Driver/TurnoControllerExpressPort"
import TurnoRouterExpressPort from "../../../Domain/Port/Driver/TurnoRouterExpressPort"


export default class TurnoRouterExpress extends RouterExpress implements TurnoRouterExpressPort {
  constructor(private readonly turnoController: TurnoControllerExpressPort) {
    super()
    this.routes()
  }
  getTurnoByIdCita(): void {
    throw new Error("Method not implemented.")
  }
  getTurnoByIdTurno(): void {
    throw new Error("Method not implemented.")
  }
  getTurnos(): void {
    throw new Error("Method not implemented.")
  }
  modificarTurnos(): void {
    throw new Error("Method not implemented.")
  }
  agregarTurno(): void {
    throw new Error("Method not implemented.")
  }
  eliminarTurno(): void {
    throw new Error("Method not implemented.")
  }
  validarCredenciales(): void {
    throw new Error("Method not implemented.")
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
