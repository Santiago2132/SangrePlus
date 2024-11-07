import { Request, Response } from 'express'
import CitaControllerExpressPort from '../../../Domain/Port/Driver/CitaControllerExpressPort'
import CitaUseCasePort from '../../../../Cita/Domain/Port/Driver/CitaUseCasePort';


export default class CitaControllerExpress implements CitaControllerExpressPort {
  
  constructor(private readonly useCita: CitaUseCasePort) { }

  async obtenercitas(_req: Request, res: Response): Promise<void> {
    try {
      const citas = await this.useCita.getCitas(); // Método que retorna todas las citas
      res.status(200).json({ message: 'Lista de citas', data: citas });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener citas', error: error });
    }
  }


  // Agregar una nueva cita
  async agregarCita(req: Request, res: Response): Promise<void> {
    const citaData = req.body;
    const citas = await this.useCita.agregarCita(citaData); // Método que retorna todas las citas
    res.status(201).json({ message: 'Cita agregada exitosamente', data: citas });
  }

  // Eliminar una cita
  async  eliminarCita(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const citas = await this.useCita.eliminarCita(parseInt(id));
    res.status(200).json({ message: `Cita con ID ${id} eliminada exitosamente`, data: citas });
  }

  // Modificar una cita
  async modificarCita(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const updatedCitaData = req.body;
    const citas = await this.useCita.editarCita(updatedCitaData);
    res.status(200).json({ message: `Cita con ID ${id} modificada exitosamente`, data: citas });
  }

  // Obtener una cita específica por ID
  async obtenerCitaId(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const citas = await this.useCita.getCitaById(parseInt(id));
    res.status(200).json({ message: `Detalles de la cita con ID ${id}`, data: citas });
  }

  // Obtener citas (otro posible método, renombrado o específico)
  async citas(req: Request, res: Response): Promise<void> {
    const citas = await this.useCita.getCitas();
    res.status(200).json({ message: 'Obteniendo citas especiales', data: citas });
  }


}
