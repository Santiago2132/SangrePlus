// Interfaz TurnoInterface que define la estructura de los datos
export interface TurnoInterface {
    id_turno: number;
    turno: string;
    modulo?: string;
    numero: number;
    cita_id: number;
}

export default class Turno  {
    private id_turno: number;
    private turno: string;
    private modulo?: string;
    private numero: number;
    private cita_id: number;

    // Constructor para inicializar la clase Turno con los atributos de la interfaz
    constructor(turno: TurnoInterface) {
        this.id_turno = turno.id_turno;
        this.turno = turno.turno;
        this.modulo = turno.modulo || '';
        this.numero = turno.numero;
        this.cita_id = turno.cita_id;
    }

    // Método para verificar si es un turno nulo
    public isNull(): boolean {
        return false;
    }

    // Getter para id_turno
     getIdTurno(): number {
        return this.id_turno;
    }

    // Setter para id_turno
     setIdTurno(id_turno: number) {
        this.id_turno = id_turno;
    }

    // Getter para turno
    getTurno(): string {
        return this.turno;
    }

    // Setter para turno
     setTurno(turno: string) {
        this.turno = turno;
    }

    // Getter para modulo (puede ser undefined)
     getModulo(): string | undefined {
        return this.modulo;
    }

    // Setter para modulo
     setModulo(modulo: string | undefined) {
        this.modulo = modulo || '';
    }

    // Getter para numero
     getNumero(): number {
        return this.numero;
    }

    // Setter para numero
     setNumero(numero: number) {
        this.numero = numero;
    }

    // Getter para cita_id
     getCitaId(): number {
        return this.cita_id;
    }

    // Setter para cita_id
     setCitaId(cita_id: number) {
        this.cita_id = cita_id;
    }
}
