import RouterExpress from "../../../../Express/Domain/RouterExpress";

export default interface CitaRouterExpressPort extends RouterExpress{
    obtenerCitas():void;
    agregarCitas():void;
}