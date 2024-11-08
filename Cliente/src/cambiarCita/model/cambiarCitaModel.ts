// src/nuevaCita/model/cambiarCitaModel.ts
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
        lugar: 'Clínica A',
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
        lugar: 'Clínica B',
        estado: 'Programada',
        observaciones: 'Paciente con antecedentes familiares'
    }
];

export default class CambiarCitaModel {
    private citas: { numeroCita: string, descripcion: string }[] = [
        { numeroCita: "123", descripcion: "Consulta general" },
        { numeroCita: "456", descripcion: "Seguimiento de tratamiento" }
    ];
    constructor() {
        console.log('Constructor de CambiarCitaModel');
    }

    // Método para cambiar los datos de una cita
    public cambiarCita(idCita: number, nuevosDatos: Record<string, string | undefined>): string {
        // Buscamos la cita por su ID
        const cita = baseDeCitas.find(c => c.id === idCita);
        
        if (!cita) {
            return `Cita con ID ${idCita} no encontrada.`;
        }

        // Actualizamos los datos de la cita con la información proporcionada
        cita.tipocita = nuevosDatos['tipoCita'] ?? cita.tipocita;
        cita.fecha = nuevosDatos['fecha'] ? new Date(nuevosDatos['fecha']) : cita.fecha;
        cita.hora = nuevosDatos['hora'] ?? cita.hora;
        cita.descripcion = nuevosDatos['descripcion'] ?? cita.descripcion;
        cita.lugar = nuevosDatos['lugar'] ?? cita.lugar;
        cita.estado = nuevosDatos['estado'] ?? cita.estado;
        cita.observaciones = nuevosDatos['observaciones'] ?? cita.observaciones;

        // Si se proporciona un nuevo cliente, lo actualizamos
        if (nuevosDatos['nombreCliente'] || nuevosDatos['apellidoCliente'] || nuevosDatos['edadCliente']) {
            cita.cliente.nombre = nuevosDatos['nombreCliente'] ?? cita.cliente.nombre;
            cita.cliente.apellido = nuevosDatos['apellidoCliente'] ?? cita.cliente.apellido;
            cita.cliente.edad = nuevosDatos['edadCliente'] ? parseInt(nuevosDatos['edadCliente'] as string) : cita.cliente.edad;
        }

        // Imprimimos la cita actualizada
        console.log('Cita actualizada:', JSON.stringify(cita, null, 2));

        // Retornamos un mensaje de éxito
        return `Cita con ID ${idCita} actualizada correctamente.`;
    }

    // Método para imprimir una cita por ID
    public imprimirCita(idCita: number): string {
        const cita = baseDeCitas.find(c => c.id === idCita);
        
        if (!cita) {
            return `Cita con ID ${idCita} no encontrada.`;
        }

        // Devolvemos la cita formateada
        return JSON.stringify(cita, null, 2);
    }
    public consultarCita(numeroCita: string): { numeroCita: string, descripcion: string } | null {
        const cita = this.citas.find(cita => cita.numeroCita === numeroCita);
        return cita ? cita : null;
    }
    
}
