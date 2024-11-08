import { Request, Response } from "express";

export default interface TurnoControllerExpressPort {//Por ahora 
    getTurnoByIdCita(req: Request, res: Response):void
    getTurnoByIdTurno(req: Request, res: Response):void
    getTurnos(req: Request, res: Response):void
    agregarTurno(req: Request, res: Response):void
    modificarTurnos(req: Request, res: Response):void
    eliminarTurno(req: Request, res: Response):void

    
    validarCredenciales(req: Request, res: Response):void
}