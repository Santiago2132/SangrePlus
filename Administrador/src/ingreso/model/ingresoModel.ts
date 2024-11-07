// Cambia la exportación de la interfaz a una exportación nombrada
export interface User {
    nombre: string;
    password: string;
    tipo: "admin" | "agent";
}

// Cambia la exportación de la clase a exportación nombrada
export class IngresoModel {
    private usuarios: User[] = [];

    constructor() {
        this.loadUsers();
    }

    // Método para cargar usuarios desde una lista predeterminada
    private loadUsers(): void {
        // Lista predeterminada de usuarios
        this.usuarios = [
            {
                "nombre": "admin_user",
                "password": "123",
                "tipo": "admin"
            },
            {
                "nombre": "agent_user",
                "password": "123",
                "tipo": "agent"
            }
        ];
    }

    // Método para verificar credenciales
    public verificarCredenciales(nombre: string, password: string): boolean {
        return this.usuarios.some(user => user.nombre === nombre && user.password === password);
    }

    // Método para obtener un usuario
    public obtenerUsuario(nombre: string, password: string): User | null {
        return this.usuarios.find(user => user.nombre === nombre && user.password === password) || null;
    }
}
