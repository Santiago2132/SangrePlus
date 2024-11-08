export interface Cliente {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    historial: number;
    tipo: string;
}

export interface CitaInterface {
    id: number;
    tipocita: string;
    fecha: Date;
    hora: string;
    descripcion: string;
    cliente: Cliente;
    lugar: string;
    estado: string;
    observaciones: string;
}

export default class CancelarCitaModel {
    private citas: CitaInterface[] = [
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
    public async buscarCita(numeroCita: string): Promise<CitaInterface | undefined> {
        const cita = await this.getCitaByNumero(parseInt(numeroCita)) 
        return cita
    }

    
      // Método para obtener una cita por su número
    public async getCitaByNumero(id: number): Promise<CitaInterface> {
        console.log(id)
        const response = await fetch(`http://localhost:3000/parcial/citas/citaId/?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        console.log(await response.json)
        if (!response.ok) {
            console.log('error en el server')
        }
        const mensaje= await response.json()
        console.log(mensaje.data)
    
        return mensaje.data

    }

    // Método para cancelar una cita por número
    public async cancelarCita(numeroCita: string): Promise<boolean> {/*
        const citaIndex = this.citas.findIndex(cita => cita.id.toString() === numeroCita);
        if (citaIndex >= 0) {
            this.citas.splice(citaIndex, 1);  // Simulamos la eliminación eliminando de la lista interna
            return true;
        }
        return false;*/
        console.log(numeroCita +' para cancelar')
        return await this.cancelarCitaFetch(numeroCita)
    }



    public async cancelarCitaFetch(numerocita: string): Promise<boolean> {
        const response = await fetch(`http://localhost:3000/parcial/citas/cancelar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: parseInt(numerocita) }),
        })
            if (!response.ok) {
                console.log('error en el server')
                return false
            }
            else{
                return true
            }

    }
}
