import { Request, Response } from 'express';
import TurnoControllerExpressPort from '../../../Domain/Port/Driver/TurnoControllerExpressPort';
import TurnoUseCasePort from '../../../Domain/Port/Driver/TurnoUseCasePort';

export default class TurnoControllerExpress implements TurnoControllerExpressPort {
  
  // Constructor con inyección de dependencia del servicio de Turno
  constructor( private readonly turnoUso: TurnoUseCasePort) {
  }

  // Obtener Turno por ID de Cita
  async getTurnoByIdCita(req: Request, res: Response): Promise<void> {
    try {
      const {id}= req.query
      const turno = await this.turnoUso.getTurnoByIdCita(parseInt(id as string));
      res.status(200).json({ message: 'Turno obtenido por ID de Cita', data: turno });
    } catch (error) {
      console.error('Error al obtener turno por ID de cita:', error);
      res.status(500).json({ message: 'Error al obtener turno por ID de cita' });
    }
  }

  // Obtener Turno por ID de Turno
  async getTurnoByIdTurno(req: Request, res: Response): Promise<void> {
    try {
      const {id}= req.query
      const turno = await this.turnoUso.getTurnoByIdTurno(parseInt(id as string));
      res.status(200).json({ message: 'Turno obtenido por ID de Turno', data: turno });
    } catch (error) {
      console.error('Error al obtener turno por ID de turno:', error);
      res.status(500).json({ message: 'Error al obtener turno por ID de turno' });
    }
  }

  // Obtener todos los turnos
  async getTurnos(_req: Request, res: Response): Promise<void> {
    try {
      const turnos = await this.turnoUso.getTurnos();
      res.status(200).json({ message: 'Lista de turnos', data: turnos });
    } catch (error) {
      console.error('Error al obtener los turnos:', error);
      res.status(500).json({ message: 'Error al obtener los turnos' });
    }
  }

  // Agregar un turno
  async agregarTurno(req: Request, res: Response): Promise<void> {
    try {
      const turno = req.body; // Suponiendo que el cuerpo contiene los datos del turno
      const result = await this.turnoUso.agregarTurno(turno);
      if (result) {
        res.status(201).json({ message: 'Turno agregado con éxito' , data: result});
      } else {
        res.status(400).json({ message: 'Error al agregar el turno' });
      }
    } catch (error) {
      console.error('Error al agregar el turno:', error);
      res.status(500).json({ message: 'Error al agregar el turno' });
    }
  }

  // Modificar los turnos
  async modificarTurnos(req: Request, res: Response): Promise<void> {
    try {
      const {turnos} = req.body; // Suponiendo que el cuerpo contiene los turnos a modificar
      const result = await this.turnoUso.modificarTurnos(turnos);
      if (result) {
        res.status(200).json({ message: 'Turnos modificados con éxito' , data: result});
      } else {
        res.status(400).json({ message: 'Error al modificar los turnos' });
      }
    } catch (error) {
      console.error('Error al modificar los turnos:', error);
      res.status(500).json({ message: 'Error al modificar los turnos' });
    }
  }

  // Eliminar un turno
  async eliminarTurno(req: Request, res: Response): Promise<void> {
    try {
      const {id} = req.body; // Suponiendo que el cuerpo contiene los turnos a modificar
      const result = await this.turnoUso.eliminarTurno(parseInt(id));
      if (result) {
        res.status(200).json({ message: 'Turno eliminado con éxito' , data: result});
      } else {
        res.status(400).json({ message: 'Error al eliminar el turno' });
      }
    } catch (error) {
      console.error('Error al eliminar el turno:', error);
      res.status(500).json({ message: 'Error al eliminar el turno' });
    }
  }

  // Validar credenciales
  async validarCredenciales(req: Request, res: Response): Promise<void> {
    try {
      const { nombre, contrasena } = req.body;
      const usuario = await this.turnoUso.validarCredenciales(nombre, contrasena);
      if (usuario) {
        res.status(200).json({ message: 'Credenciales válidas', data: usuario });
      } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
      }
    } catch (error) {
      console.error('Error al validar las credenciales:', error);
      res.status(500).json({ message: 'Error al validar las credenciales' });
    }
  }


}
