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
// Simulamos una base de datos de citas creadas
let baseDeCitas: CitaInterface[] = [
    {
        id: 1,
        tipocita: 'Consulta General',
        fecha: new Date('2024-11-10'),
        hora: '10:00',
        descripcion: 'Chequeo de rutina',
        cliente: {
            id: 101,
            nombre: 'Juan',
            apellido: 'Pérez',
            edad: 30,
            historial: 123456,
            tipo: 'Regular'
        },
        lugar: 'Clinica',
        estado: 'Programada',
        observaciones: 'Sin observaciones'
    },
    {
        id: 2,
        tipocita: 'Examen',
        fecha: new Date('2024-11-12'),
        hora: '15:30',
        descripcion: 'Examen de sangre',
        cliente: {
            id: 102,
            nombre: 'María',
            apellido: 'González',
            edad: 40,
            historial: 654321,
            tipo: 'Urgente'
        },
        lugar: 'Clinica',
        estado: 'Programada',
        observaciones: 'Paciente con antecedentes familiares'
    }
];

export default class CambiarCitaModel {

    constructor() {
        console.log('Constructor de CambiarCitaModel');
    }

    // Método para cambiar los datos de una cita
    public async cambiarCita(idCita: number, nuevosDatos: Record<string, string | undefined>): Promise<string> {
        const cita = await this.getCitaByNumero(idCita) 
        
        if (!cita) {
            return `Cita con ID ${idCita} no encontrada.`;
        }

        cita.tipocita = nuevosDatos['tipoCita'] ?? cita.tipocita;
        cita.fecha = nuevosDatos['fecha'] ? new Date(nuevosDatos['fecha']) : cita.fecha;
        cita.hora = nuevosDatos['hora'] ?? cita.hora;
        cita.descripcion = nuevosDatos['descripcion'] ?? cita.descripcion;
        cita.lugar = nuevosDatos['lugar'] ?? cita.lugar;
        cita.estado = nuevosDatos['estado'] ?? cita.estado;
        cita.observaciones = nuevosDatos['observaciones'] ?? cita.observaciones;

        if (nuevosDatos['nombreCliente'] || nuevosDatos['apellidoCliente'] || nuevosDatos['edadCliente']) {
            cita.cliente.nombre = nuevosDatos['nombreCliente'] ?? cita.cliente.nombre;
            cita.cliente.apellido = nuevosDatos['apellidoCliente'] ?? cita.cliente.apellido;
            cita.cliente.edad = nuevosDatos['edadCliente'] ? parseInt(nuevosDatos['edadCliente'] as string) : cita.cliente.edad;
        }

        console.log('Cita actualizada:', JSON.stringify(cita, null, 2));
        const citaMod=await this.modificarCita(cita)
        console.log(citaMod)
        return `Cita con ID ${idCita} actualizada correctamente.`;
    }


    // Método para actualizar una cita 
    public async modificarCita(updatedCita: CitaInterface):Promise<boolean> {
        const response = await fetch(`http://localhost:3000/parcial/citas/modificar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCita),
        })
        if (!response.ok) {
            console.log('error en el server')
        }
        const mensaje= await response.json()
        console.log(mensaje.data)
    
        return mensaje.data
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
        console.log(response.json)
        if (!response.ok) {
            console.log('error en el server')
        }
        const mensaje= await response.json()
        console.log(mensaje.data)
    
        return mensaje.data

    }



    // Método para imprimir una cita por ID
    public async imprimirCita(idCita: number): Promise<string> {
        const cita=  await this.getCitaByNumero((idCita)) 

        if (!cita) {
            return `Cita con ID ${idCita} no encontrada.`;
        }

        return JSON.stringify(cita, null, 2);
    }
    
    
    // Método para consultar una cita en la lista privada `citas`
    // Método para consultar una cita en `baseDeCitas` y devolver el objeto completo de tipo `CitaInterface`
    public async consultarCita(numeroCita: string): Promise<CitaInterface | null> {
        return  await this.getCitaByNumero(parseInt(numeroCita)) 

    }

    
    
}
