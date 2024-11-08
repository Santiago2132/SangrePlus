// Interfaz TurnoInterface que define la estructura de los datos
export interface TurnoInterface {
    id_turno: number;
    turno: string;
    modulo?: string;
    numero: number;
    cita_id: number;
}

export default class Turno  {
    private _id_turno: number;
    private _turno: string;
    private _modulo?: string;
    private _numero: number;
    private _cita_id: number;

    // Constructor para inicializar la clase Turno con los atributos de la interfaz
    constructor(turno: TurnoInterface) {
        this._id_turno = turno.id_turno;
        this._turno = turno.turno;
        this._modulo = turno.modulo || '';
        this._numero = turno.numero;
        this._cita_id = turno.cita_id;
    }

    // Método para verificar si es un turno nulo
    public isNull(): boolean {
        return false;
    }

    // Getter para id_turno
     getIdTurno(): number {
        return this._id_turno;
    }

    // Setter para id_turno
     setIdTurno(id_turno: number) {
        this._id_turno = id_turno;
    }

    // Getter para turno
    getTurno(): string {
        return this._turno;
    }

    // Setter para turno
     setTurno(turno: string) {
        this._turno = turno;
    }

    // Getter para modulo (puede ser undefined)
     getModulo(): string | undefined {
        return this._modulo;
    }

    // Setter para modulo
     setModulo(modulo: string | undefined) {
        this._modulo = modulo || '';
    }

    // Getter para numero
     getNumero(): number {
        return this._numero;
    }

    // Setter para numero
     setNumero(numero: number) {
        this._numero = numero;
    }

    // Getter para cita_id
     getCitaId(): number {
        return this._cita_id;
    }

    // Setter para cita_id
     setCitaId(cita_id: number) {
        this._cita_id = cita_id;
    }
}
