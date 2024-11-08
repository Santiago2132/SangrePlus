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

    public override get getIdTurno(): number {
        return 0;  // Devuelve un valor por defecto
    }

    public override set setIdTurno(id_turno: number) {
        // No hace nada
    }

    public override get getTurno(): string {
        return 'No Disponible';  // Valor por defecto
    }

    public override set setTurno(turno: string) {
        // No hace nada
    }

    public override get getModulo(): string | undefined {
        return '';  // Valor por defecto
    }

    public override set setModulo(modulo: string | undefined) {
        // No hace nada
    }

    public override get getNumero(): number {
        return 0;  // Valor por defecto
    }

    public override set setNumero(numero: number) {
        // No hace nada
    }

    public override get getCitaId(): number {
        return 0;  // Valor por defecto
    }

    public override set setCitaId(cita_id: number) {
        // No hace nada
    }
}
