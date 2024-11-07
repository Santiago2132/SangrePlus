import CitaInterface from "./Cita"; 
import Cliente from "../../../../Cliente/Domain/Model/Cliente/Cliente";
import NullCliente from "../../../../Cliente/Domain/Model/Cliente/NullCliente";
import Cita from "./Cita";

// Extiende la clase Cita para cumplir con la interfaz CitaInterface
export default class NullCita extends Cita {
    constructor() {
        // Llamar al constructor de la clase base CitaInterface asegurando que el objeto tiene todos los métodos necesarios
        super({
            id: 0,
            tipocita: 'No Disponible',
            fecha: new Date('0000-00-00'),
            hora: '00:00',
            descripcion: 'No Disponible',
            cliente: new NullCliente(),
            lugar: 'No Disponible',
            estado: 'No Disponible',
            observaciones: 'No Disponible'
        });
    }

    // Implementar los métodos de la interfaz CitaInterface con valores por defecto o vacíos
    public override isNull(): boolean {
        return true; // Indica que esta es una cita "nula"
    }

    public override getId(): number {
        return 0; // Devuelve un ID vacío
    }

    public override getTipocita(): string {
        return 'No Disponible'; // Valor por defecto
    }

    public override getFecha(): Date {
        return new Date('0000-00-00'); // Fecha inválida
    }

    public override getHora(): string {
        return '00:00'; // Hora por defecto
    }

    public override getDescripcion(): string {
        return 'No Disponible'; // Descripción por defecto
    }

    public override getLugar(): string {
        return 'No Disponible'; // Lugar por defecto
    }

    public override getEstado(): string {
        return 'No Disponible'; // Estado por defecto
    }

    public override getObservaciones(): string {
        return 'No Disponible'; // Observaciones por defecto
    }

    public override getCliente(): Cliente {
        return new NullCliente(); // Cliente nulo
    }
    
    // Métodos para setear propiedades vacías, ya que esta es una "cita nula"
    public override setId(_value: number): void {}
    public override setTipocita(_value: string): void {}
    public override setFecha(_value: Date): void {}
    public override setHora(_value: string): void {}
    public override setDescripcion(_value: string): void {}
    public override setLugar(_value: string): void {}
    public override setEstado(_value: string): void {}
    public override setObservaciones(_value: string): void {}
    public override setCliente(_value: Cliente): void {}
}
