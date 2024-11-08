import { Request, Response } from 'express'
import TurnoControllerExpressPort from '../../../Domain/Port/Driver/TurnoControllerExpressPort'

//import MovieUseCasePort from '../../../domain/port/driver/MovieUseCasePort'

export default class TurnoControllerExpress
  implements TurnoControllerExpressPort
{
  constructor(/*private readonly movieUseCase: MovieUseCasePort*/) {}
  getTurnoByIdCita(req: Request, res: Response): void {
    throw new Error('Method not implemented.')
  }
  getTurnoByIdTurno(req: Request, res: Response): void {
    throw new Error('Method not implemented.')
  }
  getTurnos(req: Request, res: Response): void {
    throw new Error('Method not implemented.')
  }
  agregarTurno(req: Request, res: Response): void {
    throw new Error('Method not implemented.')
  }
  modificarTurnos(req: Request, res: Response): void {
    throw new Error('Method not implemented.')
  }
  eliminarTurno(req: Request, res: Response): void {
    throw new Error('Method not implemented.')
  }
  validarCredenciales(req: Request, res: Response): void {
    throw new Error('Method not implemented.')
  }
    citas(req: Request, res: Response): void {
        throw new Error('Method not implemented.')
    }

  public movies(_req: Request, res: Response): void {
 //   const movies = this.movieUseCase.getMovies()
    // TODO: validate ALL
    res.status(200).json({ message: 'Hello Movies',/* data: movies */})
  }
}
