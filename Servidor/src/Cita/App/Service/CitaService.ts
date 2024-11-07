import CitaInterface from "../../Domain/Model/Cita/Cita";
import CitaRepositoryPort from "../../Domain/Port/Driven/CitaRepositoryPort";
import Repository from "../../Domain/Port/Driven/RepositoryInterface";
import CitaServicePort from "../../Domain/Port/Driver/CitaServicePort";

export default class CitaService implements CitaServicePort {
   
    constructor(private readonly  repositoryCita: CitaRepositoryPort){

    }
    
    getCitaById: (id: number) => Promise<CitaInterface>;
    agregarCita: (cita: CitaInterface) => Promise<CitaInterface>;
    eliminarCita: (id: number) => Promise<void>;
    editarCita: (cita: CitaInterface) => Promise<CitaInterface>;
    buscarCitaPorCliente: (clienteId: number) => Promise<CitaInterface[]>;

    
}