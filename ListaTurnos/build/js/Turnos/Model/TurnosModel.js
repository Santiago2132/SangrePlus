export default class TurnosModel {
    turnos;
    constructor() {
        // Cargar los turnos desde un JSON fabricado
        this.turnos = this.cargarTurnos();
    }
    // Método que retorna un arreglo de turnos fabricados
    cargarTurnos() {
        return [
            { id: 1, titulo: "Turno 1", descripcion: "Información del turno 1", puesto: "Recepción" },
            { id: 2, titulo: "Turno 2", descripcion: "Información del turno 2", puesto: "Consultoría" },
            { id: 3, titulo: "Turno 3", descripcion: "Información del turno 3", puesto: "Administración" }
        ];
    }
    // Devuelve la lista de turnos
    getTurnos() {
        return this.turnos;
    }
    // Elimina un turno por ID
    eliminarTurno(id) {
        this.turnos = this.turnos.filter(turno => turno.id !== id);
    }
    // Agrega un nuevo turno
    agregarTurno(turno) {
        this.turnos.push(turno);
    }
    // Actualiza un turno existente
    actualizarTurno(updatedTurno) {
        const index = this.turnos.findIndex(turno => turno.id === updatedTurno.id);
        if (index !== -1) {
            this.turnos[index] = updatedTurno;
        }
    }
}
