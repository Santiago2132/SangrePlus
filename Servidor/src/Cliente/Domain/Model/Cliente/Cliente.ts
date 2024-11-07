export default interface ClienteInterface {
    id: number;
    nombre: string;
    apellido: string;
    tipo: "premium" | "no premium";
    historial: number;
    edad: number;
}

export default class Cliente implements ClienteInterface {
    id: number;
    nombre: string;
    apellido: string;
    tipo: "premium" | "no premium";
    historial: number;
    edad: number;

    constructor(id: number, nombre: string, apellido: string, tipo: "premium" | "no premium", historial: number, edad: number) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo = tipo;
        this.historial = historial;
        this.edad = edad;
    }

    // Método adicional para calcular el descuento
    public calcularDescuento(): number {
        if (this.tipo === "premium") {
            return this.historial * 0.1; // Aplica un descuento del 10% basado en el historial
        } else {
            return 0; // No hay descuento para clientes no premium
        }
    }
}
