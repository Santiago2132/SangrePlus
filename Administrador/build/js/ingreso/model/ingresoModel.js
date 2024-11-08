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
    async verificarCredenciales(nombre, password) {
        if (await this.obtenerUsuario(nombre, password)) {
            return true;
        }
        else {
            return false;
        }
    }
    // Método para obtener un usuario
    async obtenerUsuario(nombre, password) {
        return await this.validarLogin(nombre, password);
    }
    async validarLogin(usuario, contrasena) {
        const response = await fetch(`http://localhost:3000/parcial/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre: usuario, contrasena: contrasena }),
        });
        if (!response.ok) {
            console.log('error en el server');
        }
        const mensaje = await response.json();
        console.log(mensaje.data);
        return this.getInterface(mensaje.data);
    }
    getInterface(data) {
        const dataa = {
            nombre: data._nombre,
            password: data._contrasena,
            tipo: data._tipo,
        };
        return dataa;
    }
}
