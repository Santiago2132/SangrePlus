export default class AgenteMenuModel {
    private turnosData: any[];
    private citasData: any[];
    private clientesData: any[];

    constructor() {
        // Datos simulados de la tabla "cliente"
        this.clientesData = [
            {
                id: 1,
                nombre: "Juan",
                apellido: "Pérez",
                edad: 30,
                tipo: "premium",
                historial: 5
            },
            {
                id: 2,
                nombre: "Ana",
                apellido: "Gómez",
                edad: 40,
                tipo: "no premium",
                historial: 3
            }
        ];

        // Datos simulados de la tabla "cita"
        this.citasData = [
            {
                id: 101,
                tipocita: "consulta",
                cliente_id: 1,
                fecha: "2024-11-10",
                hora: "09:00",
                descripcion: "Consulta general",
                lugar: "Sala 1",
                estado: "pendiente",
                observaciones: "Revisión inicial"
            },
            {
                id: 102,
                tipocita: "revisión",
                cliente_id: 2,
                fecha: "2024-11-11",
                hora: "10:30",
                descripcion: "Revisión mensual",
                lugar: "Sala 2",
                estado: "pendiente",
                observaciones: "Chequeo rutinario"
            }
        ];

        // Datos simulados de la tabla "turno", que incluye referencia a una "cita"
        this.turnosData = [
            {
                id_turno: 1,
                turno: "T123",
                modulo: "Módulo A",
                numero: 1,
                cita_id: 101 // Referencia a la cita con id 101
            },
            {
                id_turno: 2,
                turno: "T124",
                modulo: "Módulo B",
                numero: 2,
                cita_id: 102 // Referencia a la cita con id 102
            }
        ];
    }

    // Método para obtener los datos de turnos con sus citas asociadas
    public getTurnosConCitas() {
        return this.turnosData.map(turno => {
            const cita = this.citasData.find(c => c.id === turno.cita_id);
            const cliente = cita ? this.clientesData.find(cl => cl.id === cita.cliente_id) : null;
            
            return {
                ...turno,
                cita: cita ? {
                    ...cita,
                    cliente: cliente ? {
                        nombre: cliente.nombre,
                        apellido: cliente.apellido
                    } : null
                } : null
            };
        });
    }
}
