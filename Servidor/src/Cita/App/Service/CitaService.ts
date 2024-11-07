import Cita from "../../Domain/Model/Cita/Cita";
import CitaInterface from "../../Domain/Model/Cita/Cita";
import NullCita from "../../Domain/Model/Cita/NullCita";
import CitaRepositoryPort from "../../Domain/Port/Driven/CitaRepositoryPort";
import CitaServicePort from "../../Domain/Port/Driver/CitaServicePort";


export default class CitaService implements CitaServicePort {
    
    constructor(private readonly repositoryCita: CitaRepositoryPort) {}

  // Obtener una cita por ID
    public getCitaById = async (id: number): Promise<Cita> => {
        try {
        const cita = await this.repositoryCita.findById(id); // Usando el repositorio para buscar por ID
        return cita;
        } catch (error) {
        throw new Error(`Error al obtener la cita con ID ${id}: ${error}`);
        }
    };

  // Agregar una nueva cita
    public agregarCita = async (cita: Cita): Promise<Cita> => {
        try {
            const nuevaCita = await this.repositoryCita.save(cita); // Usando el repositorio para guardar la cita
            return nuevaCita;
        } catch (error) {
            console.log(`Error al agregar la cita: ${error}`);
            return new NullCita()
        }
    };

    // Eliminar una cita por ID
    public eliminarCita = async (id: number): Promise<boolean> => {
        try {
            const result = await this.repositoryCita.delete(id); // Usando el repositorio para eliminar la cita
            if (!result) {
                console.log(`No se pudo eliminar la cita con ID ${id}`);
                return false
            }else{
                return true
            }
        } catch (error) {
            console.log(`Error al eliminar la cita con ID ${id}: ${error}`);
            return false
        }
    };

    // Editar una cita existente
    public editarCita = async (cita: Cita): Promise<Cita> => {
        try {
        const updatedCita = await this.repositoryCita.update(cita.id, cita); // Usando el repositorio para actualizar la cita
        if (!updatedCita) {
            throw new Error(`No se pudo actualizar la cita con ID ${cita.id}`);
        }
        return updatedCita;
        } catch (error) {
        throw new Error(`Error al editar la cita: ${error}`);
        }
    };

    // Buscar citas por cliente
    public buscarCitaPorCliente = async (clienteId: number): Promise<Cita> => {
        try {
        const cita = await this.repositoryCita.findCita(clienteId); // Supongo que se debe filtrar las citas por cliente
        return cita; // Filtrando por clienteId
        } catch (error) {
        throw new Error(`Error al buscar citas para el cliente con ID ${clienteId}: ${error}`);
        }
    };

    // Obtener todas las citas (si es necesario)
    public getCitas = async (): Promise<CitaInterface[]> => {
        try {
        const citas = await this.repositoryCita.findAll(); // Usando el repositorio para obtener todas las citas
        return citas;
        } catch (error) {
        throw new Error(`Error al obtener todas las citas: ${error}`);
        }
    };
}
