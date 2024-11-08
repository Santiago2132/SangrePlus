import CitaService from "../../../Cita/App/Service/CitaService"
import CitaUseCase from "../../../Cita/App/UseCase/CitaUseCase"
import CitaDB from "../../../Cita/Infra/db/citadb"
import DatabaseConexion from "../../../Cita/Infra/db/DBC"
import CitaControllerExpress from "../../../Cita/Infra/Express/Controller/CitaControllerExpress"
import CitaRouterExpress from "../../../Cita/Infra/Express/Router/CitaRouterExpress"
import CitaRepository from "../../../Cita/Infra/repo/CitaRepository"
import ClienteService from "../../../Cliente/App/Service/ClienteService"
import ClienteUseCase from "../../../Cliente/App/UseCase/ClienteUseCase"
import ClienteDB from "../../../Cliente/Infra/db/Clientedb"
import DatabaseConexion1 from "../../../Cliente/Infra/db/DBC"
import ClienteControllerExpress from "../../../Cliente/Infra/Express/Controller/ClienteControllerExpress"
import ClienteRouterExpress from "../../../Cliente/Infra/Express/Router/CitaRouterExpress"

import RepositoryCliente from "../../../Cliente/Infra/repo/RepositoryCliente"
import Server from "../Server/Server"

export default class ExpressFactory{
    public static readonly create=(): Server=>{
    
        const dbClient= new DatabaseConexion1()
        const dbCita= new DatabaseConexion()

        const datClient= new ClienteDB(dbClient)
        const clientrepo= new RepositoryCliente(datClient)
        const clientService= new ClienteService(clientrepo)
        const clientUse= new ClienteUseCase(clientService)
        const clientController = new ClienteControllerExpress(clientUse)
        const clienteRouter= new ClienteRouterExpress(clientController)


        const datCita= new CitaDB(dbCita)
        const citarepo= new CitaRepository(datCita)
        const citaService= new CitaService(citarepo,clientrepo)
        const CitaUse= new CitaUseCase(citaService)
        const CitaController = new CitaControllerExpress(CitaUse)
        const CitaRouter= new CitaRouterExpress(CitaController)



        const server= new Server([CitaRouter,clienteRouter,])
        return server
    }
}