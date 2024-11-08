import RouterExpress from "../../../../Express/Domain/RouterExpress"
import ClienteControllerExpressPort from "../../../Domain/Port/Driver/ClienteControllerExpressPort"
import ClienteRouterExpressPort from "../../../Domain/Port/Driver/ClienteRouterExpressPort"


export default class ClienteRouterExpress extends RouterExpress implements ClienteRouterExpressPort {

  constructor(private readonly clienteController: ClienteControllerExpressPort) {
    super()
    this.routes()
  }

  

  public routes = (): void => {
    this.getCliente()
    this.agregarCliente()
    this.editarCliente()
    this.eliminarCliente()
  }

 

  getCliente(): void {
    this.router.get(
      '/parcial/cliente/obtener/:id',
      this.clienteController.getCliente.bind(this.clienteController)
    )
  }
  agregarCliente(): void {
    this.router.post(
      '/parcial/cliente/agregar',
      this.clienteController.agregarCliente.bind(this.clienteController)
    )
  }
  editarCliente(): void {
    this.router.post(
      '/parcial/cliente/editar',
      this.clienteController.editarCliente.bind(this.clienteController)
    )
  }
  eliminarCliente(): void {
    this.router.post(
      '/parcial/cliente/eliminar',
      this.clienteController.eliminarCliente.bind(this.clienteController)
    )
  }
}
