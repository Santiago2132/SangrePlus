
import Cliente from "../../Model/Cliente/Cliente";

    export default interface ClienteServicePort {
        getCliente: (id: number)=> Promise<Cliente>;
        agregarCliente: (cliente: Cliente)=> Promise<Cliente>;
        eliminarCliente: (id: number)=> Promise<boolean>;
        editarCliente: (cita: Cliente)=> Promise<Cliente>;
    }