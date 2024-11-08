import Usuario from "./Usuario";

export default class NullUsuario extends Usuario {
    constructor() {
        super({
            id: 0,
            nombre: "Usuario no encontrado",
            contrasena: "",
            tipo: "agente" // o el tipo por defecto que prefieras
        });
    }

    // Sobrescribimos los métodos para reflejar que este usuario es "nulo"
    override getNombre(): string {
        return "Usuario no encontrado";
    }

    override esAdmin(): boolean {
        return false;
    }
}
