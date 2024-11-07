import { Request, Response } from 'express'
import CitaControllerExpressPort from '../../../Domain/Port/Driver/CitaControllerExpressPort'

//import MovieUseCasePort from '../../../domain/port/driver/MovieUseCasePort'

export default class CitaControllerExpress
  implements CitaControllerExpressPort
{
  constructor(/*private readonly movieUseCase: MovieUseCasePort*/) {}
  obtenercitas(req: Request, res: Response): void {
    throw new Error('Method not implemented.')
  }
  agregarCita(req: Request, res: Response): void {
    throw new Error('Method not implemented.')
  }
  eliminarCita(req: Request, res: Response): void {
    throw new Error('Method not implemented.')
  }
  modificarCita(req: Request, res: Response): void {
    throw new Error('Method not implemented.')
  }
  obtenerCitaId(req: Request, res: Response): void {
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
