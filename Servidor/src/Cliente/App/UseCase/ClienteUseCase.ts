import Cliente from "../../Domain/Model/Cliente/Cliente";
import NullCliente from "../../Domain/Model/Cliente/NullCliente";
import ClienteUseCasePort from "../../Domain/Port/Driver/ClienteUseCasePort";
import ClienteService from "../Service/ClienteService";


export default class ClienteUseCase implements ClienteUseCasePort {
    private clienteService: ClienteService;

    constructor(clienteService: ClienteService) {
        this.clienteService = clienteService;
    }

    // Método para validar y convertir datos de entrada en una instancia de Cliente sin lanzar un error
    private mapToCliente(data: any): Cliente | null {
        try {
            return new Cliente({
                id: data.id,
                nombre: data.nombre,
                apellido: data.apellido,
                edad: data.edad,
                tipo: data.tipo,
                historial: data.historial,
            });
        } catch (error) {
            // Si ocurre un error durante el mapeo, devolvemos un cliente nulo
            return new NullCliente();
        }
    }

    async getCliente(id: number): Promise<Cliente> {
        try {
            return await this.clienteService.getCliente(id);
        } catch (error) {
            console.error(`Error al obtener cliente con ID ${id}:`, error);
            return new NullCliente();
        }
    }

    async agregarCliente(data: any): Promise<Cliente> {
        try {
            const cliente = this.mapToCliente(data);
            return cliente ? await this.clienteService.agregarCliente(cliente) : new NullCliente();
            ;
        } catch (error) {
            console.error("Error al agregar cliente:", error);
            return new NullCliente();
        }
    }

    async eliminarCliente(id: number): Promise<boolean> {
        try {
            return await this.clienteService.eliminarCliente(id);
        } catch (error) {
            console.error(`Error al eliminar cliente con ID ${id}:`, error);
            return false;
        }
    }

    async editarCliente(data: any): Promise<Cliente> {
        try {
            const cliente = this.mapToCliente(data);
            return cliente ? await this.clienteService.editarCliente(cliente) :  new NullCliente();
            ;
        } catch (error) {
            console.error("Error al editar cliente:", error);
            return new NullCliente();
        }
    }
}
