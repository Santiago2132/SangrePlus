import Turno from "./Turno";

// Clase NullTurno que extiende de Turno
export default class NullTurno extends Turno {
    constructor() {
        // Llamamos al constructor de la clase base con valores por defecto
        super(
            {id_turno:0, turno:'No Disponible', modulo:'', numero:0, cita_id:0}
        );
    }

    // Sobreescribimos el método isNull() para indicar que este es un Turno nulo
    public override isNull(): boolean {
        return true;
    }

    // Sobreescribir los getters y setters para que no modifiquen ni devuelvan valores reales

    public override  getIdTurno(): number {
        return 0;  // Devuelve un valor por defecto
    }

    public override getTurno(): string {
        return 'No Disponible';  // Valor por defecto
    }



    public override  getModulo(): string | undefined {
        return '';  // Valor por defecto
    }
   
    public override  getNumero(): number {
        return 0;  // Valor por defecto
    }



    
    public override setNumero = (_value: number): void => {};
    public override setCitaId = (_value: number): void => {};
    public override setModulo = (_value: string): void => {};
    public override setIdTurno = (_value: number): void => {};
    
}
