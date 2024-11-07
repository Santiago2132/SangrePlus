import { Request, Response } from 'express'
import CitaControllerExpressPort from '../../../Domain/Port/Driver/CitaControllerExpressPort'

//import MovieUseCasePort from '../../../domain/port/driver/MovieUseCasePort'

export default class CitaControllerExpress
  implements CitaControllerExpressPort
{
  constructor(/*private readonly movieUseCase: MovieUseCasePort*/) {}
    citas(req: Request, res: Response): void {
        throw new Error('Method not implemented.')
    }

  public movies(_req: Request, res: Response): void {
 //   const movies = this.movieUseCase.getMovies()
    // TODO: validate ALL
    res.status(200).json({ message: 'Hello Movies',/* data: movies */})
  }
}
