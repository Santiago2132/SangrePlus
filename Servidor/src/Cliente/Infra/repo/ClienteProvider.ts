import Cliente from "../../Domain/Model/Cliente/Cliente";
import NullCliente from "../../Domain/Model/Cliente/NullCliente";
import Clientedb from "../db/Clientedb";
import DatabaseConexion from "../db/DBC";
import RepositoryCliente from "./RepositoryCliente";


export default class ClienteProvider {
    public static get = async (idCliente: number): Promise<Cliente | NullCliente> => {
        const repoCliente = new RepositoryCliente(new Clientedb(new DatabaseConexion()));

        const clienteData = await repoCliente.findById(idCliente); 
        
        if (!clienteData) {
            return new NullCliente();
        }

        return new Cliente({
            id: clienteData.id,
            nombre: clienteData.nombre,
            apellido: clienteData.apellido,
            tipo: clienteData.tipo,
            edad: clienteData.edad,
            historial: clienteData.historial || 0
        });
    }


}