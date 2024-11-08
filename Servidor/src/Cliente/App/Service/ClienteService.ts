import Cliente from "../../Domain/Model/Cliente/Cliente";
import ClienteServicePort from "../../Domain/Port/Driver/ClienteServicePort"; 
import NullCliente from "../../Domain/Model/Cliente/NullCliente"; // Si utilizamos NullCliente
import ClienteRepositoryPort from "../../Domain/Port/Driven/CitaRepositoryPort";

export default class ClienteService implements ClienteServicePort {
    private clienteRepository: ClienteRepositoryPort;

    constructor(clienteRepository: ClienteRepositoryPort) {
        this.clienteRepository = clienteRepository;
    }

    // Obtener un cliente por ID
    async getCliente(id: number): Promise<Cliente> {
        try {
            const cliente = await this.clienteRepository.findById(id);
            return cliente; // Si lo encuentra, lo retorna
        } catch (error) {
            // Si hay un error (por ejemplo, cliente no encontrado), devuelve NullCliente
            return new NullCliente();
        }
    }

    // Agregar un nuevo cliente
    async agregarCliente(cliente: Cliente): Promise<Cliente> {
        try {
            return await this.clienteRepository.save(cliente); // Llamamos al repositorio para guardar el cliente
        } catch (error) {
            // En caso de error, devolvemos un cliente nulo o manejamos el error de acuerdo a la lógica de negocio
            return new NullCliente();
        }
    }

    // Eliminar un cliente por ID
    async eliminarCliente(id: number): Promise<boolean> {
        try {
            return await this.clienteRepository.delete(id); // Llamamos al repositorio para eliminar el cliente
        } catch (error) {
            // Si algo falla, simplemente devolvemos false
            return false;
        }
    }

    // Editar un cliente existente
    async editarCliente(cliente: Cliente): Promise<Cliente> {
        try {
            return await this.clienteRepository.update(cliente.id, cliente); // Llamamos al repositorio para actualizar el cliente
        } catch (error) {
            // Si hay algún error, devolvemos un cliente nulo
            return new NullCliente();
        }
    }
}
