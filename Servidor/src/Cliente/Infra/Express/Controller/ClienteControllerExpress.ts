import { Request, Response } from 'express';
import NullCliente from '../../../Domain/Model/Cliente/NullCliente'; // Importa el modelo NullCliente
import ClienteUseCase from '../../../App/UseCase/ClienteUseCase';


export default class ClienteControllerExpress {
  private clienteUseCase: ClienteUseCase;

  constructor(clienteUseCase: ClienteUseCase) {
    this.clienteUseCase = clienteUseCase;
  }

  // Obtener cliente por ID
  async getCliente(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params['id']; // Usar notación de corchetes
      if (!id) {
        res.status(400).json({ message: 'ID inválido' });
      }else{
          const cliente = await this.clienteUseCase.getCliente(parseInt(id));
          if (cliente instanceof NullCliente) {
            res.status(404).json({ message: 'Cliente no encontrado' });
          } else {
            res.status(200).json(cliente);
          }
      }

    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el cliente', error: error });
    }
  }

  // Agregar un cliente
  async agregarCliente(req: Request, res: Response): Promise<void> {
    try {
      const cliente = await this.clienteUseCase.agregarCliente(req.body);
      if (cliente instanceof NullCliente) {
        res.status(500).json({ message: 'Error al agregar el cliente' });
      } else {
        res.status(200).json(cliente);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al agregar el cliente', error: error });
    }
  }

  // Editar cliente
  async editarCliente(req: Request, res: Response): Promise<void> {
    try {
      const cliente = await this.clienteUseCase.editarCliente(req.body);
      if (cliente instanceof NullCliente) {
        res.status(404).json({ message: 'Cliente no encontrado' });
      } else {
        res.status(200).json(cliente);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al editar el cliente', error: error });
    }
  }

  // Eliminar cliente
  async eliminarCliente(req: Request, res: Response): Promise<void> {
    try {
      const {id}= req.body;
      if (isNaN(id)) {
        res.status(400).json({ message: 'ID inválido' });
      }

      const isDeleted = await this.clienteUseCase.eliminarCliente(parseInt(id));
      if (isDeleted) {
        res.status(200).json({ message: 'Cliente eliminado con éxito', data: isDeleted });
      } else {
        res.status(404).json({ message: 'Cliente no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el cliente', error: error });
    }
  }

}
