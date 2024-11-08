import RouterExpress from "../../../../Express/Domain/RouterExpress";

export default interface TurnoRouterExpressPort extends RouterExpress{
        getTurnoByIdCita ():void,
        getTurnoByIdTurno():void;
        getTurnos():void;
        modificarTurnos():void;
        agregarTurno():void;
        eliminarTurno():void;


        validarCredenciales():void;

}