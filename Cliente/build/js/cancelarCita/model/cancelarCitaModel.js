export default class cancelarCitaModel {
    citas = [
        { numeroCita: '1234', fecha: '25 de octubre de 2024', hora: '15:00', lugar: 'Hospital' },
        { numeroCita: '5678', fecha: '26 de octubre de 2024', hora: '12:00', lugar: 'Clínica' }
    ];
    buscarCita(numeroCita) {
        return this.citas.find(cita => cita.numeroCita === numeroCita);
    }
    cancelarCita(numeroCita) {
        const citaIndex = this.citas.findIndex(cita => cita.numeroCita === numeroCita);
        if (citaIndex >= 0) {
            this.citas.splice(citaIndex, 1);
            return true;
        }
        return false;
    }
}
