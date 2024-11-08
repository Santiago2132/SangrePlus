import NullUsuario from "../../Domain/Model/Usuario/NullUsuario";
import Usuario from "../../Domain/Model/Usuario/Usuario";
import DBUsuarioPort from "../../Domain/Port/DB/DBUserPort";
import UserRepositoryPort from "../../Domain/Port/Driven/UserRepositoryPort";
import UserDB from "../db/UserDB";

export default class UserRepository implements UserRepositoryPort{
    private usuarioDB: UserDB;

    constructor(usuarioDB: UserDB) {
        this.usuarioDB = usuarioDB;
    }

    // Método para validar usuario y contraseña
    async validate(usuario: string, contrasena: string): Promise<Usuario> {
        const dbUsuario = await this.usuarioDB.validarUsuario(usuario, contrasena);
        if (!dbUsuario) {
           console.log("Usuario o contraseña incorrectos");
           return new NullUsuario()
        }

        return this.fromDBUsuarioPort(dbUsuario);
    }

    // Método para convertir un DBUsuarioPort a Usuario
    private fromDBUsuarioPort(dbUsuario: DBUsuarioPort): Usuario {
        const tipoValido = dbUsuario.tipo === "admin" || dbUsuario.tipo === "agente" ? dbUsuario.tipo : "agente"; 
    
        return new Usuario(
            dbUsuario.id,
            dbUsuario.nombre,
            dbUsuario.contrasena,
            tipoValido
        );
    }
    




    // Métodos sin implementación
    findAll: () => Promise<Usuario[]> = async () => {
        throw new Error("Método no implementado");
    };

    findById: (id: number) => Promise<Usuario> = async (id) => {
        throw new Error("Método no implementado");
    };

    save: (item: Usuario) => Promise<Boolean> = async (item) => {
        throw new Error("Método no implementado");
    };

    update: (id: number, item: Partial<Usuario>) => Promise<Boolean> = async (id, item) => {
        throw new Error("Método no implementado");
    };

    delete: (id: number) => Promise<boolean> = async (id) => {
        throw new Error("Método no implementado");
    };

}
