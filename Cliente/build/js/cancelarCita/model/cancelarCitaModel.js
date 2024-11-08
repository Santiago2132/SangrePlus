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
    async buscarCita(numeroCita) {
        const cita = await this.getCitaByNumero(parseInt(numeroCita));
        return cita;
    }
    // Método para obtener una cita por su número
    async getCitaByNumero(id) {
        console.log(id);
        const response = await fetch(`http://localhost:3000/parcial/citas/citaId/?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(await response.json);
        if (!response.ok) {
            console.log('error en el server');
        }
        const mensaje = await response.json();
        console.log(mensaje.data);
        return mensaje.data;
    }
    // Método para cancelar una cita por número
    async cancelarCita(numeroCita) {
        console.log(numeroCita + ' para cancelar');
        return await this.cancelarCitaFetch(numeroCita);
    }
    async cancelarCitaFetch(numerocita) {
        const response = await fetch(`http://localhost:3000/parcial/citas/cancelar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: parseInt(numerocita) }),
        });
        if (!response.ok) {
            console.log('error en el server');
            return false;
        }
        else {
            return true;
        }
    }
}
