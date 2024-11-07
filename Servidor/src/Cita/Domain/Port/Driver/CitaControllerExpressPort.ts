import { Request, Response } from "express";

export default interface CitaControllerExpressPort {//Por ahora 
    obtenercitas(req: Request, res: Response):void
    agregarCita(req: Request, res: Response):void
    eliminarCita(req: Request, res: Response):void
    modificarCita(req: Request, res: Response):void
    obtenerCitaId(req: Request, res: Response):void
}