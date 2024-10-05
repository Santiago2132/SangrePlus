export default class Cliente {
    id_cliente: number;
    identificacion: string;
    nombres: string;
    apellidos: string;
    direccion: string;
    fecha_nacimiento: Date;
    cliente_tipo: 'regular' | 'premium' | 'mayor';

    constructor(id_cliente: number, identificacion: string, nombres: string, apellidos: string, direccion: string, fecha_nacimiento: Date, cliente_tipo: 'regular' | 'premium' | 'mayor') {
        this.id_cliente = id_cliente;
        this.identificacion = identificacion;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.fecha_nacimiento = fecha_nacimiento;
        this.cliente_tipo = cliente_tipo;
    }
}
