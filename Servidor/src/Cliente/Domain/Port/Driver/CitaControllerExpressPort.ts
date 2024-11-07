import { Request, Response } from "express";

export default interface CitaControllerExpressPort {//Por ahora 
    citas(req: Request, res: Response):void
}