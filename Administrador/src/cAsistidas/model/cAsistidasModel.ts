export default class cAsistidasModel {
    private turnosData: any[];
    private citasData: any[];
    private clientesData: any[];

    constructor() {
        this.turnosData = [
            { cita_num: 1, cita_id: 101 },  // Modificado a número de cita
            { cita_num: 2, cita_id: 102 },
        ];

        this.citasData = [
            { id: 101, tipocita: "consulta", cliente_id: 1, fecha: "2024-11-10", hora: "09:00", lugar: "Sala 1", estado: "asistida", observaciones: "Revisión inicial" },
            { id: 102, tipocita: "revisión", cliente_id: 2, fecha: "2024-11-11", hora: "10:30", lugar: "Sala 2", estado: "asistida", observaciones: "Chequeo rutinario" }
        ];
        
        this.clientesData = [
            { id: 1, nombre: "Juan", apellido: "Pérez", edad: 30, tipo: "premium", historial: 5 },
            { id: 2, nombre: "Ana", apellido: "Gómez", edad: 40, tipo: "no premium", historial: 3 }
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
