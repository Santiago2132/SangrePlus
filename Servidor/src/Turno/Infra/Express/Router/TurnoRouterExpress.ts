import RouterExpress from "../../../../Express/Domain/RouterExpress"
import TurnoControllerExpressPort from "../../../Domain/Port/Driver/TurnoControllerExpressPort"
import TurnoRouterExpressPort from "../../../Domain/Port/Driver/TurnoRouterExpressPort"


export default class TurnoRouterExpress extends RouterExpress implements TurnoRouterExpressPort {
  constructor(private readonly turnoController: TurnoControllerExpressPort) {
    super()
    this.routes()
  }
  

  public routes = (): void => {
    this.getTurnoByIdCita()
    this.getTurnoByIdTurno()
    this.getTurnos()
    this.agregarTurno()
    this.eliminarTurno()
    this.modificarTurnos()
    this.validarCredenciales()
  }

  

  getTurnoByIdCita(): void {
    this.router.get(
      '/parcial/turnos/turnoCita/',
      this.turnoController.getTurnoByIdCita.bind(this.turnoController)
    )  
  }
  getTurnoByIdTurno(): void {
    this.router.get(
      '/parcial/turnos/turnoId/',
      this.turnoController.getTurnoByIdTurno.bind(this.turnoController)
    )
  }
  getTurnos(): void {
    this.router.get(
      '/parcial/turnos/turno',
      this.turnoController.getTurnos.bind(this.turnoController)
    )
  }
  modificarTurnos(): void {
    this.router.post(
      '/parcial/turnos/modificar',
      this.turnoController.modificarTurnos.bind(this.turnoController)
    )
  }
  agregarTurno(): void {
    this.router.post(
      '/parcial/turnos/agregar',
      this.turnoController.agregarTurno.bind(this.turnoController)
    )
  }
  eliminarTurno(): void {
    this.router.post(
      '/parcial/turnos/eliminar',
      this.turnoController.eliminarTurno.bind(this.turnoController)
    )
  }

  validarCredenciales(): void {
    this.router.post(
      '/parcial/login',
      this.turnoController.validarCredenciales.bind(this.turnoController)
    )
  }

}
