import Cita from "./Cita"; 
import Cliente from "../../../../Cliente/Domain/Model/Cliente/Cliente";
import NullCliente from "../../../../Cliente/Domain/Model/Cliente/NullCliente";

export default class NullCita extends Cita {
    constructor() {
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

    public override isNull(): boolean {
        return true;
    }

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
