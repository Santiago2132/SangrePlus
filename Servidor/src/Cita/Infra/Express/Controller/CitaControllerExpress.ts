import { Request, Response } from 'express';
import CitaControllerExpressPort from '../../../Domain/Port/Driver/CitaControllerExpressPort';
import CitaUseCasePort from '../../../../Cita/Domain/Port/Driver/CitaUseCasePort';

export default class CitaControllerExpress implements CitaControllerExpressPort {
  
  constructor(private readonly useCita: CitaUseCasePort) { }

  // Obtener todas las citas
  async obtenercitas(_req: Request, res: Response): Promise<void> {
    try {
      const citas = await this.useCita.getCitas(); // Método que retorna todas las citas
      console.log(citas);
      res.status(200).json({ message: 'Lista de citas', data: citas });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener citas', error: error });
    }
  }

  // Agregar una nueva cita
  async agregarCita(req: Request, res: Response): Promise<void> {
    try {
      const citaData = req.body;
      const citas = await this.useCita.agregarCita(citaData); // Método que agrega una nueva cita
      res.status(201).json({ message: 'Cita agregada exitosamente', data: citas });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al agregar cita', error: error });
    }
  }

  // Eliminar una cita
  async eliminarCita(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.body;
      if (id) {
        const citas = await this.useCita.eliminarCita(parseInt(id));
        res.status(200).json({ message: `Cita con ID ${id} eliminada exitosamente`, data: citas });
      } else {
        res.status(400).json({ message: 'ID de cita no proporcionado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar cita', error: error });
    }
  }

  // Modificar una cita
  async modificarCita(req: Request, res: Response): Promise<void> {
    try {
      const updatedCitaData = req.body;
      const citas = await this.useCita.editarCita(updatedCitaData);
      res.status(200).json({ message: `Cita modificada exitosamente`, data: citas });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al modificar cita', error: error });
    }
  }

  // Obtener una cita específica por ID
  async obtenerCitaId(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.query ; // Usar req.query para obtener el parámetro de consulta
      if (id) {
        const citas = await this.useCita.getCitaById(parseInt(id as string));
        if (citas) {
          res.status(200).json({ message: `Detalles de la cita con ID ${id}`, data: citas });
        } else {
          res.status(404).json({ message: `Cita con ID ${id} no encontrada` });
        }
      } else {
        // Si no se pasa un ID en la URL, responde con un error 400 (bad request)
        res.status(400).json({ message: 'ID de cita no proporcionado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener cita por ID', error: error });
    }
  }


  
}
