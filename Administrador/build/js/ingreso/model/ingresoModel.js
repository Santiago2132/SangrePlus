// Cambia la exportación de la clase a exportación nombrada
export class IngresoModel {
    usuarios = [];
    constructor() {
        this.loadUsers();
    }
    // Método para cargar usuarios desde una lista predeterminada
    loadUsers() {
        // Lista predeterminada de usuarios
        this.usuarios = [
            {
                "nombre": "admin_user",
                "password": "admin123",
                "tipo": "admin"
            },
            {
                "nombre": "agent_user",
                "password": "agent456",
                "tipo": "agent"
            }
        ];
    }
    // Método para verificar credenciales
    verificarCredenciales(nombre, password) {
        return this.usuarios.some(user => user.nombre === nombre && user.password === password);
    }
    // Método para obtener un usuario
    obtenerUsuario(nombre, password) {
        return this.usuarios.find(user => user.nombre === nombre && user.password === password) || null;
    }
}
