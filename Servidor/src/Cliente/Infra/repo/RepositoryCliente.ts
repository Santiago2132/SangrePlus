import Cliente from "../../Domain/Model/Cliente/Cliente";
import NullCliente from "../../Domain/Model/Cliente/NullCliente";

import DBClientePort from "../../Domain/Port/DB/DBClientePort";
import ClienteRepositoryPort from "../../Domain/Port/Driven/CitaRepositoryPort";
import ClienteDB from "../db/Clientedb";

export default class RepositoryCliente implements ClienteRepositoryPort {
    private clienteDB: ClienteDB;

    constructor(clienteDB: ClienteDB) {
        this.clienteDB = clienteDB;
    }

    // Método para obtener todos los clientes
    async findAll(): Promise<Cliente[]> {
        return []; 
    }

    // Método para obtener un cliente por ID
    async findById(id: number): Promise<Cliente> {
        const dbCliente = await this.clienteDB.getCliente(id);
        if (!dbCliente) throw new Error('Cliente no encontrado');
        return this.mapDBClienteToCliente(dbCliente);
    }

    // Método para guardar un nuevo cliente
    async save(item: Cliente): Promise<Cliente> {
        const dbCliente: DBClientePort = this.mapClienteToDBClientePort(item);
        const savedCliente = await this.clienteDB.agregarCliente(dbCliente);
        if(!savedCliente){
            return new NullCliente()
        }
        return this.mapDBClienteToCliente(savedCliente);

    }

    // Método para actualizar un cliente existente
    async update(id: number, item: Partial<Cliente>): Promise<Cliente> {
        const dbCliente: DBClientePort = this.mapClienteToDBClientePort({ id, ...item } as Cliente);
        const updatedCliente = await this.clienteDB.editarCliente(dbCliente);
        if(!updatedCliente){
            return new NullCliente()
        }
        return this.mapDBClienteToCliente(updatedCliente);
    }

    // Método para eliminar un cliente
    async delete(id: number): Promise<boolean> {
        return await this.clienteDB.eliminarCliente(id);
    }

    // Método para convertir DBClientePort a Cliente
    private mapDBClienteToCliente(dbCliente: DBClientePort): Cliente {
        const tipoValido: "" | "premium" | "no premium" = 
        dbCliente.tipo === "premium" || dbCliente.tipo === "no premium" ? dbCliente.tipo : "";

        return new Cliente({
            id: dbCliente.id,
            nombre: dbCliente.nombre,
            apellido: dbCliente.apellido,
            edad: dbCliente.edad,
            tipo: tipoValido,
            historial: dbCliente.historial
        });
    }

    // Método para convertir Cliente a DBClientePort
    private mapClienteToDBClientePort(cliente: Cliente): DBClientePort {
        return {
            id: cliente.id,
            nombre: cliente.nombre,
            apellido: cliente.apellido,
            edad: cliente.edad,
            tipo: cliente.tipo,
            historial: cliente.historial
        };
    }
}
