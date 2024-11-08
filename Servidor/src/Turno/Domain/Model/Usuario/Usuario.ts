export  interface UsuarioInterface {
    id: number;
    nombre: string;
    contrasena: string;
    tipo: "admin" | "agente";
}

export default class Usuario {
    id: number;
    nombre: string;
    contrasena: string;
    tipo: "admin" | "agente";

    constructor(user: UsuarioInterface) {
        this.id = user.id;
        this.nombre = user.nombre;
        this.contrasena = user.contrasena;
        this.tipo = user.tipo;
    }

    // Puedes añadir métodos adicionales según sea necesario
    esAdmin(): boolean {
        return this.tipo === "admin";
    }
}
