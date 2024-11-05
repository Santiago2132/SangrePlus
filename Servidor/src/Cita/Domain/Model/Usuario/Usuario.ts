export default interface UsuarioInterface {
    id: number;
    nombre: string;
    contrasena: string;
    tipo: "admin" | "agente";
}

export default class Usuario implements UsuarioInterface {
    id: number;
    nombre: string;
    contrasena: string;
    tipo: "admin" | "agente";

    constructor(id: number, nombre: string, contrasena: string, tipo: "admin" | "agente") {
        this.id = id;
        this.nombre = nombre;
        this.contrasena = contrasena;
        this.tipo = tipo;
    }

    // Puedes añadir métodos adicionales según sea necesario
    esAdmin(): boolean {
        return this.tipo === "admin";
    }
}
