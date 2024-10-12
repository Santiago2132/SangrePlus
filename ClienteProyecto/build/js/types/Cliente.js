export default class Cliente {
    id_cliente;
    identificacion;
    nombres;
    apellidos;
    direccion;
    fecha_nacimiento;
    cliente_tipo;
    constructor(id_cliente, identificacion, nombres, apellidos, direccion, fecha_nacimiento, cliente_tipo) {
        this.id_cliente = id_cliente;
        this.identificacion = identificacion;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.fecha_nacimiento = fecha_nacimiento;
        this.cliente_tipo = cliente_tipo;
    }
}
