import Cliente from "./Cliente";

export default class NullCliente extends Cliente {
    constructor() {
        super({
            id: 0,
            nombre: "No Disponible",
            apellido: "No Disponible",
            tipo: "no premium",
            historial: 0,
            edad: 0
        });
    }

    public isNull(): boolean {
        return true; // Método para verificar si es un cliente nulo
    }

    // Sobreescribimos los métodos "get"
    getid(): number { return this.id; }
    getnombre(): string { return this.nombre; }
    getapellido(): string { return this.apellido; }
    getTipo(): "premium" | "no premium" { return this.tipo; }
    getHistorial(): number { return this.historial; }
    getEdad(): number { return this.edad; }

    // Sobreescribimos los métodos "set"
    setId(value: number): void {}
    setNombre(value: string): void {}
    setApellido(value: string): void {}
    setTipo(value: "premium" | "no premium"): void {}
    setHistorial(value: number): void {}
    setEdad(value: number): void {}

    // Sobreescribimos el método calcularDescuento
    calcularDescuento(): number {
        return 0; // No hay descuento para el cliente nulo
    }
}