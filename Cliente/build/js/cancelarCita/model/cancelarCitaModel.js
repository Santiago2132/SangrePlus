export default class CancelarCitaModel {
    citas = [
        {
            id: 1234,
            tipocita: 'Consulta general',
            fecha: new Date('2024-10-25T15:00:00'),
            hora: '15:00',
            descripcion: 'Chequeo rutinario',
            cliente: {
                id: 101,
                nombre: 'Juan',
                apellido: 'Pérez',
                edad: 30,
                historial: 123456,
                tipo: 'C.I.'
            },
            lugar: 'Hospital',
            estado: 'Programada',
            observaciones: 'Sin observaciones'
        },
        {
            id: 5678,
            tipocita: 'Emergencia',
            fecha: new Date('2024-10-26T12:00:00'),
            hora: '12:00',
            descripcion: 'Accidente de tráfico',
            cliente: {
                id: 102,
                nombre: 'María',
                apellido: 'González',
                edad: 28,
                historial: 789101,
                tipo: 'T.I.'
            },
            lugar: 'Clínica',
            estado: 'Programada',
            observaciones: 'Requiere intervención quirúrgica'
        }
    ];
    // Método para buscar una cita por número
    buscarCita(numeroCita) {
        console.log(numeroCita);
        return this.citas.find(cita => cita.id.toString() === numeroCita);
    }
    // Método para cancelar una cita por número
    cancelarCita(numeroCita) {
        const citaIndex = this.citas.findIndex(cita => cita.id.toString() === numeroCita);
        if (citaIndex >= 0) {
            this.citas.splice(citaIndex, 1); // Simulamos la eliminación eliminando de la lista interna
            return true;
        }
        return false;
    }
}
