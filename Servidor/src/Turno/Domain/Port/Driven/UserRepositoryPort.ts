import Usuario from "../../Model/Usuario/Usuario";
import Repository from "./RepositoryInterface";

export default interface UserRepositoryPort extends Repository<number, Usuario> {
    validate: (usuario: string,contrasena: string, ) => Promise<Usuario>
}