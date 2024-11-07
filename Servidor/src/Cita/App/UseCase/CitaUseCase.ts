import Cita from "../../Domain/Model/Cita/Cita"
import CitaServicePort from "../../Domain/Port/Driver/CitaServicePort"
import CitaUseCasePort from "../../Domain/Port/Driver/CitaUseCasePort"

export default class CitaUseCase implements CitaUseCasePort {
    constructor(
      private readonly citaService: CitaServicePort
    ) {}

    // Método para asegurar que los datos son tipo Cita
    private convertirACita(data: any): Cita {
      return data instanceof Cita ? data : new Cita(data);
    }

    // Obtener cita por ID
    public getCitaById = async (id: number): Promise<Cita> => {
      const citaData = await this.citaService.getCitaById(id);
      return this.convertirACita(citaData);
    };

    // Agregar una nueva cita
    public agregarCita = async (cita: any): Promise<Cita> => {
      const citaObj = this.convertirACita(cita);
      const nuevaCitaData = await this.citaService.agregarCita(citaObj);
      return this.convertirACita(nuevaCitaData);
    };

    // Eliminar una cita por ID
    public eliminarCita = async (id: number): Promise<void> => {
      await this.citaService.eliminarCita(id);
    };

    // Editar una cita existente
    public editarCita = async (cita: any): Promise<Cita> => {
      const citaObj = this.convertirACita(cita);
      const citaActualizadaData = await this.citaService.editarCita(citaObj);
      return this.convertirACita(citaActualizadaData);
    };

    // Buscar citas por cliente
    public buscarCitaPorCliente = async (clienteId: number): Promise<Cita> => {
      const citasData = await this.citaService.buscarCitaPorCliente(clienteId);
      return this.convertirACita(citasData);
    };

    // Buscar citas por fecha
    public getCitas = async (): Promise<Cita[]> => {
      const citasData = await this.citaService.getCitas();
      return citasData.map(data => this.convertirACita(data));
    };
}
