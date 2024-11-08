// Simulamos una base de datos de citas creadas
let baseDeCitas = [
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
    citas = [
        {
            id: 123,
            tipocita: "Consulta general",
            fecha: new Date('2024-11-10'),
            hora: "10:00",
            descripcion: "Chequeo de rutina",
            cliente: {
                id: 101,
                nombre: "Juan",
                apellido: "Pérez",
                edad: 30,
                historial: 123456,
                tipo: "Regular"
            },
            lugar: "Clínica A",
            estado: "Programada",
            observaciones: "Sin observaciones"
        },
        {
            id: 456,
            tipocita: "Seguimiento de tratamiento",
            fecha: new Date('2024-11-15'),
            hora: "14:00",
            descripcion: "Revisión de tratamiento post-quirúrgico",
            cliente: {
                id: 102,
                nombre: "María",
                apellido: "González",
                edad: 40,
                historial: 654321,
                tipo: "Urgente"
            },
            lugar: "Clínica B",
            estado: "Programada",
            observaciones: "Paciente con antecedentes familiares"
        }
    ];
    constructor() {
        console.log('Constructor de CambiarCitaModel');
    }
    // Método para cambiar los datos de una cita
    cambiarCita(idCita, nuevosDatos) {
        const cita = baseDeCitas.find(c => c.id === idCita);
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
            cita.cliente.edad = nuevosDatos['edadCliente'] ? parseInt(nuevosDatos['edadCliente']) : cita.cliente.edad;
        }
        console.log('Cita actualizada:', JSON.stringify(cita, null, 2));
        return `Cita con ID ${idCita} actualizada correctamente.`;
    }
    // Método para imprimir una cita por ID
    imprimirCita(idCita) {
        const cita = baseDeCitas.find(c => c.id === idCita);
        if (!cita) {
            return `Cita con ID ${idCita} no encontrada.`;
        }
        return JSON.stringify(cita, null, 2);
    }
    // Método para consultar una cita en la lista privada `citas`
    // Método para consultar una cita en `baseDeCitas` y devolver el objeto completo de tipo `CitaInterface`
    consultarCita(numeroCita) {
        const cita = this.citas.find(c => c.id === parseInt(numeroCita));
        return cita || null;
    }
}
