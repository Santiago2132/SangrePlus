import { Request, Response } from "express";

export default interface CitaControllerExpressPort {//Por ahora 
    obtenerCliente(req: Request, res: Response):void
}