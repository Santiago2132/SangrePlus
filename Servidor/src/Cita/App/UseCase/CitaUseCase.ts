import Cita from "../../Domain/Model/Cita/Cita"
import CitaServicePort from "../../Domain/Port/Driver/CitaServicePort"
import CitaUseCasePort from "../../Domain/Port/Driver/CitaUseCasePort"


export default class CitaUseCase implements CitaUseCasePort {

  constructor(
    private readonly citaService: CitaServicePort
  ) {
    
  }
  getCitaById: (id: number) => Promise<Cita>;
  agregarCita: (cita: Cita) => Promise<Cita>;
  eliminarCita: (id: number) => Promise<void>;
  editarCita: (cita: Cita) => Promise<Cita>;
  buscarCitaPorCliente: (clienteId: number) => Promise<Cita[]>;

  public buscarCitaPorFecha = async (fecha: Date): Promise<Cita[]> => {
    const citas = await this.citaService.buscarCitaPorFecha(fecha);
    return citas;
  }
}
