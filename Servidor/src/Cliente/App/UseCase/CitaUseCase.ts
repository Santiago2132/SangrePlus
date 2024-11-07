import Cita from "../../Domain/Model/Cita/Cita"
import CitaServicePort from "../../Domain/Port/Driver/ClienteServicePort"
import CitaUseCasePort from "../../Domain/Port/Driver/ClienteUseCasePort"


export default class CitaUseCase implements CitaUseCasePort {

  constructor(
    private readonly citaService: CitaServicePort
  ) {
    
  }

  public buscarCitaPorFecha = async (fecha: Date): Promise<Cita[]> => {
    const citas = await this.citaService.buscarCitaPorFecha(fecha);
    return citas;
  }
}
