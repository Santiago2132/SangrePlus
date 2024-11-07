import Cita from "../../Domain/Model/Cita/Cita"
import CitaServicePort from "../../Domain/Port/Driver/CitaServicePort"
import CitaUseCasePort from "../../Domain/Port/Driver/CitaUseCasePort"


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
