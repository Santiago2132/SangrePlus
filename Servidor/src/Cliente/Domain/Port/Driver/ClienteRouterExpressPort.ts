import RouterExpress from "../../../../Express/Domain/RouterExpress";

export default interface ClienteRouterExpressPort extends RouterExpress{
    getCliente():void;
    agregarCliente():void;
    editarCliente():void;
    eliminarCliente():void;
}