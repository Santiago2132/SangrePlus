export default class cAsistidasModel {
    private turnosData: any[];
    private citasData: any[];
    private clientesData: any[];

    constructor() {
        this.turnosData = [
            { cita_num: 1, cita_id: 101 },
            { cita_num: 2, cita_id: 102 },
            { cita_num: 3, cita_id: 103 },
            { cita_num: 4, cita_id: 104 },
            { cita_num: 5, cita_id: 105 },
            { cita_num: 6, cita_id: 106 },
        ];

        this.citasData = [
            { id: 101, tipocita: "consulta", cliente_id: 1, fecha: "2024-11-10", hora: "09:00", lugar: "Sala 1", estado: "asistida", observaciones: "Revisión inicial" },
            { id: 102, tipocita: "revisión", cliente_id: 2, fecha: "2024-11-11", hora: "10:30", lugar: "Sala 2", estado: "asistida", observaciones: "Chequeo rutinario" },
            { id: 103, tipocita: "consulta", cliente_id: 3, fecha: "2024-11-12", hora: "11:00", lugar: "Sala 3", estado: "no-asistida", observaciones: "Chequeo de presión arterial" },
            { id: 104, tipocita: "cirugía", cliente_id: 4, fecha: "2024-11-13", hora: "08:30", lugar: "Sala 1", estado: "asistida", observaciones: "Cirugía menor" },
            { id: 105, tipocita: "consulta", cliente_id: 5, fecha: "2024-11-14", hora: "14:00", lugar: "Sala 2", estado: "asistida", observaciones: "Revisión post-operatoria" },
            { id: 106, tipocita: "revisión", cliente_id: 6, fecha: "2024-11-15", hora: "15:30", lugar: "Sala 3", estado: "no-asistida", observaciones: "Chequeo general" }
        ];
        
        this.clientesData = [
            { id: 1, nombre: "Juan", apellido: "Pérez", edad: 30, tipo: "premium", historial: 5 },
            { id: 2, nombre: "Ana", apellido: "Gómez", edad: 40, tipo: "no premium", historial: 3 },
            { id: 3, nombre: "Carlos", apellido: "Martínez", edad: 35, tipo: "premium", historial: 2 },
            { id: 4, nombre: "Lucía", apellido: "Rodríguez", edad: 28, tipo: "no premium", historial: 1 },
            { id: 5, nombre: "María", apellido: "Sánchez", edad: 50, tipo: "premium", historial: 10 },
            { id: 6, nombre: "Pedro", apellido: "González", edad: 60, tipo: "no premium", historial: 4 }
        ];
    }

    public getCitasAsistidas() {
        console.log('Filtrando citas asistidas...');

        const citasAsistidas = this.turnosData.map(turno => {
            const cita = this.citasData.find(c => c.id === turno.cita_id);
            const cliente = cita ? this.clientesData.find(cl => cl.id === cita.cliente_id) : null;

            return {
                cita_num: turno.cita_num,
                cita: cita ? {
                    ...cita,
                    cliente: cliente ? { nombre: cliente.nombre, apellido: cliente.apellido } : null
                } : null
            };
        }).filter(turno => turno.cita?.estado === 'asistida'); // Filtrar solo las citas asistidas

        console.log('Citas asistidas filtradas:', citasAsistidas);
        return citasAsistidas;
    }
}
