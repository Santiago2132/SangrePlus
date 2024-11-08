import DatabaseConexion from "../../../Turno/Infra/db/DBC";
import DBUsuarioPort from "../../Domain/Port/DB/DBUserPort";

export default class UserDB {
    private dbController: DatabaseConexion;

    constructor(dbController: DatabaseConexion) {
        this.dbController = dbController;
    }

    // Método para validar usuario y contraseña
    async validarUsuario(nombre: string, contrasena: string): Promise<DBUsuarioPort | null> {
        try {
            const query = 'SELECT * FROM usuario WHERE nombre = $1 AND contrasena = $2';
            const result = await this.dbController.query<DBUsuarioPort>(query, [nombre, contrasena]);

            if (result.rowCount === 0 || !result.rows[0]) {
                console.warn(`Usuario con nombre "${nombre}" no encontrado o contraseña incorrecta`);
                return null; // No se encontró el usuario o contraseña es incorrecta
            }
            
            return result.rows[0]; // Retorna el usuario encontrado si coincide nombre y contraseña
        } catch (error) {
            console.error('Error al validar usuario:', error);
            return null; // Si ocurre un error, retorna null
        }
    }
}
