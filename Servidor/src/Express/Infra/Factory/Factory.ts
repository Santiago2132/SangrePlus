import CitaService from "../../../Cita/App/Service/CitaService"
import CitaUseCase from "../../../Cita/App/UseCase/CitaUseCase"
import CitaDB from "../../../Cita/Infra/db/citadb"
import DatabaseConexion from "../../../Cita/Infra/db/DBC"
import DatabaseConexion2 from "../../../Turno/Infra/db/DBC"
import CitaControllerExpress from "../../../Cita/Infra/Express/Controller/CitaControllerExpress"
import CitaRouterExpress from "../../../Cita/Infra/Express/Router/CitaRouterExpress"
import CitaRepository from "../../../Cita/Infra/repo/CitaRepository"
import ClienteService from "../../../Cliente/App/Service/ClienteService"
import ClienteUseCase from "../../../Cliente/App/UseCase/ClienteUseCase"
import ClienteDB from "../../../Cliente/Infra/db/Clientedb"
import DatabaseConexion1 from "../../../Cliente/Infra/db/DBC"
import ClienteControllerExpress from "../../../Cliente/Infra/Express/Controller/ClienteControllerExpress"
import ClienteRouterExpress from "../../../Cliente/Infra/Express/Router/ClienteRouterExpress"

import RepositoryCliente from "../../../Cliente/Infra/repo/RepositoryCliente"
import TurnoDB from "../../../Turno/Infra/db/TurnoDB"
import Server from "../Server/Server"
import TurnoRepository from "../../../Turno/Infra/repo/TurnoRepository"
import TurnoService from "../../../Turno/App/service/TurnoService"
import TurnoUseCase from "../../../Turno/App/UseCase/TurnoUseCase"
import TurnoControllerExpress from "../../../Turno/Infra/Express/Controller/TurnoControllerExpress"
import TurnoRouterExpress from "../../../Turno/Infra/Express/Router/TurnoRouterExpress"
import UserRepository from "../../../Turno/Infra/repo/UserRepository"
import UserDB from "../../../Turno/Infra/db/UserDB"

export default class ExpressFactory{
    public static readonly create=(): Server=>{
    
        const dbClient= new DatabaseConexion1()
        const dbCita= new DatabaseConexion()
        const db= new DatabaseConexion2()

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


        const turno= new TurnoDB(db)
        const user= new UserDB(db)
        const turnorepo= new TurnoRepository(turno)
        const userrepo= new UserRepository(user)
        const turnoService= new TurnoService(turnorepo,userrepo)
        const turnoUse= new TurnoUseCase(turnoService,citaService)
        const turnoController = new TurnoControllerExpress(turnoUse)
        const turnoRouter= new TurnoRouterExpress(turnoController)



        const server= new Server([CitaRouter,clienteRouter,turnoRouter])
        return server
    }
}