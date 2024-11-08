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
    public async verificarCredenciales(nombre: string, password: string): Promise<boolean> {
        if(await this.obtenerUsuario(nombre,password)){
            return true
        }else{
            return false
        }
    }

    // Método para obtener un usuario
    public async obtenerUsuario(nombre: string, password: string): Promise<User | null> {
        return await this.validarLogin(nombre,password)
    }


    public async validarLogin(usuario: string, contrasena:string): Promise<User> {
        const response = await fetch(`http://localhost:3000/parcial/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre: usuario,contrasena:contrasena  }),
        })
            if (!response.ok) {
                console.log('error en el server')
            }
            const mensaje= await response.json()
            console.log(mensaje.data)
            return this.getInterface(mensaje.data)

    }

    public getInterface(data:any): User{
        const dataa = {
            nombre: data._nombre,
            password: data._contrasena,
            tipo: data._tipo,
        };
        return dataa
    }
}
