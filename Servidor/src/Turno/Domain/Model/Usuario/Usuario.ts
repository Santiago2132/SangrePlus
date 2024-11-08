export interface UsuarioInterface {
    id: number;
    nombre: string;
    contrasena: string;
    tipo: "admin" | "agente";
}

export default class Usuario {
    private _id: number;
    private _nombre: string;
    private _contrasena: string;
    private _tipo: "admin" | "agente";

    constructor(user: UsuarioInterface) {
        this._id = user.id;
        this._nombre = user.nombre;
        this._contrasena = user.contrasena;
        this._tipo = user.tipo;
    }

    // Métodos getter y setter para id
    getId(): number {
        return this._id;
    }

    setId(id: number): void {
        this._id = id;
    }

    // Métodos getter y setter para nombre
    getNombre(): string {
        return this._nombre;
    }

    setNombre(nombre: string): void {
        this._nombre = nombre;
    }

    // Métodos getter y setter para contraseña
    getContrasena(): string {
        return this._contrasena;
    }

    setContrasena(contrasena: string): void {
        this._contrasena = contrasena;
    }

    // Métodos getter y setter para tipo
    getTipo(): "admin" | "agente" {
        return this._tipo;
    }

    setTipo(tipo: "admin" | "agente"): void {
        if (tipo === "admin" || tipo === "agente") {
            this._tipo = tipo;
        } else {
           this._tipo="agente"
        }
    }

    // Método para verificar si el usuario es admin
    esAdmin(): boolean {
        return this._tipo === "admin";
    }
}
