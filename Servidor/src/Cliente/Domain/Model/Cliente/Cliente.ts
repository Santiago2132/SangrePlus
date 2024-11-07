export interface ClienteInterface {
    id: number;
    nombre: string;
    apellido: string;
    tipo: 'premium' | 'no premium' | '';
    historial: number;
    edad: number;
}


export default class Cliente  {
    id: number;
    nombre: string;
    apellido: string;
    tipo: 'premium' | 'no premium' | '';
    historial: number;
    edad: number;

    constructor(cliente: ClienteInterface) {
        this.id = cliente.id;
        this.nombre = cliente.nombre;
        this.apellido = cliente.apellido;
        this.tipo = cliente.tipo;
        this.historial = cliente.historial;
        this.edad = cliente.edad;
    }

    public  isNull(): boolean {
        return false; // Método para verificar si es un cliente nulo
    }


    // Métodos "get"
    getid(): number { return this.id; }
    getnombre(): string { return this.nombre; }
    getapellido(): string { return this.apellido; }
    getTipo(): "premium" | "no premium" | '' { return this.tipo; }
    getHistorial(): number { return this.historial; }
    getEdad(): number { return this.edad; }

    // Métodos "set"
    setId(value: number): void { this.id = value; }
    setNombre(value: string): void { this.nombre = value; }
    setApellido(value: string): void { this.apellido = value; }
    setTipo(value: "premium" | "no premium"): void { this.tipo = value; }
    setHistorial(value: number): void { this.historial = value; }
    setEdad(value: number): void { this.edad = value; }
}