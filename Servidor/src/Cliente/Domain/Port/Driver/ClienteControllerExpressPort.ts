import { Request, Response } from "express";

export default interface ClienteControllerExpressPort {//Por ahora 
    getCliente(req: Request, res: Response):void
    agregarCliente(req: Request, res: Response):void
    editarCliente(req: Request, res: Response):void
    eliminarCliente(req: Request, res: Response):void
}