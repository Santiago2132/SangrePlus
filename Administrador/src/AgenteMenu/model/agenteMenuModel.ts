export default class AgenteMenuModel {
    private turnosData: any[];
    private citasData: any[];
    private clientesData: any[];

    constructor() {
        this.turnosData = [
            { id_turno: 1, turno: "T123", modulo: "Módulo A", numero: 1, cita_id: 101 },
            { id_turno: 2, turno: "T124", modulo: "Módulo B", numero: 2, cita_id: 102 }
        ];

        this.citasData = [
            { id: 101, tipocita: "consulta", cliente_id: 1, fecha: "2024-11-10", hora: "09:00", descripcion: "Consulta general", lugar: "Sala 1", estado: "pendiente", observaciones: "Revisión inicial" },
            { id: 102, tipocita: "revisión", cliente_id: 2, fecha: "2024-11-11", hora: "10:30", descripcion: "Revisión mensual", lugar: "Sala 2", estado: "pendiente", observaciones: "Chequeo rutinario" }
        ];

        this.clientesData = [
            { id: 1, nombre: "Juan", apellido: "Pérez", edad: 30, tipo: "premium", historial: 5 },
            { id: 2, nombre: "Ana", apellido: "Gómez", edad: 40, tipo: "no premium", historial: 3 }
        ];
    }

    public getTurnosConCitas() {
        // Ordenar turnosData según el valor de `numero`
        const turnosOrdenados = [...this.turnosData].sort((a, b) => a.numero - b.numero);

        return turnosOrdenados.map(turno => {
            const cita = this.citasData.find(c => c.id === turno.cita_id);
            const cliente = cita ? this.clientesData.find(cl => cl.id === cita.cliente_id) : null;
            
            return {
                ...turno,
                cita: cita ? {
                    ...cita,
                    cliente: cliente ? { nombre: cliente.nombre, apellido: cliente.apellido } : null
                } : null
            };
        });
    }

    public setTurnosConCitas(nuevoOrden: any[]): void {
        // Actualizar `numero` de cada turno para reflejar el nuevo orden
        nuevoOrden.forEach((turno, index) => {
            const turnoOriginal = this.turnosData.find(t => t.id_turno === turno.id_turno);
            if (turnoOriginal) {
                turnoOriginal.numero = index + 1;  // Asignar el nuevo `numero` según el orden actual
            }
        });
        console.log("Turnos actualizados en el modelo:", this.turnosData);  // Log para confirmar los cambios en el modelo
    }
    public eliminarTurno(id_turno: number): void {
        console.log("ID del turno a eliminar:", id_turno);  // Confirmación del ID recibido
        this.turnosData = this.turnosData.filter(turno => turno.id_turno !== id_turno);
        console.log("Turnos después de la eliminación:", this.turnosData);  // Confirmación del estado de turnosData
    }
}
