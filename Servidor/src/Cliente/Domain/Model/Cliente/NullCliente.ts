import Cliente from "./Cliente";

export default class NullCliente extends Cliente {
    
    constructor() {
        // Llamamos al constructor de la clase base con valores por defecto
        super({
            id: 0,
            nombre: 'No Disponible',
            apellido: 'No Disponible',
            edad: 0,
            historial: 0,
            tipo: ''
        });
    }

    // Método para verificar si es un cliente nulo
    public override isNull(): boolean {
        return true;
    }

    // Sobreescribimos los métodos "set" para no hacer nada
    setId(value: number): void {
        // No hace nada, ya que es un cliente nulo
    }

    setNombre(value: string): void {
        // No hace nada, ya que es un cliente nulo
    }

    setApellido(value: string): void {
        // No hace nada, ya que es un cliente nulo
    }

    setTipo(value: string): void {
        // No hace nada, ya que es un cliente nulo
    }

    setHistorial(value: number): void {
        // No hace nada, ya que es un cliente nulo
    }

    setEdad(value: number): void {
        // No hace nada, ya que es un cliente nulo
    }
}
