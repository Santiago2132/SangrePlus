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

    public override setId = (_value: number): void => {};
    public override setNombre = (_value: string): void => {};
    public override setApellido = (_value: string): void => {};
    public override setEdad = (_value: number): void => {};
    public override setHistorial = (_value: number): void => {};
    public override setTipo = (_value: string): void => {};
}
