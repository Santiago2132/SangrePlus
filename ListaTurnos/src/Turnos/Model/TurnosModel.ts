interface Turno {
    id: number;
    titulo: string;
    descripcion: string;
    puesto: string;
}

export default class TurnosModel {
    private turnos: Turno[];

    constructor() {
        // Cargar los turnos desde un JSON fabricado
        this.turnos = this.cargarTurnos();
    }

    // Método que retorna un arreglo de turnos fabricados
    public cargarTurnos(): Turno[] {
        return [
            { id: 1, titulo: "Turno 1", descripcion: "Información del turno 1", puesto: "Recepción" },
            { id: 2, titulo: "Turno 2", descripcion: "Información del turno 2", puesto: "Consultoría" },
            { id: 3, titulo: "Turno 3", descripcion: "Información del turno 3", puesto: "Administración" }
        ];
    }

    // Devuelve la lista de turnos
    public getTurnos(): Turno[] {
        return this.turnos;
    }

    // Elimina un turno por ID
    public eliminarTurno(id: number): void {
        this.turnos = this.turnos.filter(turno => turno.id !== id);
    }

    // Agrega un nuevo turno
    public agregarTurno(turno: Turno): void {
        this.turnos.push(turno);
    }

    // Actualiza un turno existente
    public actualizarTurno(updatedTurno: Turno): void {
        const index = this.turnos.findIndex(turno => turno.id === updatedTurno.id);
        if (index !== -1) {
            this.turnos[index] = updatedTurno;
        }
    }
}
