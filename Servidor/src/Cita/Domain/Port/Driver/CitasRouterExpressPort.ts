import RouterExpress from "../../../../Express/Domain/RouterExpress";

export default interface CitaRouterExpressPort extends RouterExpress{
    obtenerCitas():void;
    agregarCita():void;
    modificarCita():void;
    cancelarCita():void;
    obtenerCitaId():void;

}