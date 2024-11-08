export default class cNoAsistidasModel {
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

    public async getCitasNoAsistidas() {
        console.log('Filtrando citas no asistidas...');
        
        // Obtener las citas asistidas desde la fuente de datos
        const citasData = await this.asistidas() as CitaInterface[];
    
        // Si no hay citas, retornar un array vacío
        if (!citasData || citasData.length === 0) {
            console.log('No se encontraron citas.');
            return [];
        }
    
        console.log(citasData);
    
        // Crear un mapa para una búsqueda más eficiente de citas por cita_id
        const citasMap = new Map(citasData.map(cita => [cita.id, cita]));
    
        // Filtrar turnos y buscar citas asistidas
        
        // Filtrar solo las citas que están 'asistidas'
        const citasAsistidas = citasData
        .filter(cita => cita.estado === 'no-asistida')  // Filtrar citas con estado 'asistida'
        .map(cita => ({
            cita_num: cita.id,
            cita: cita
                ? {
                    ...cita,
                    cliente: cita.cliente
                        ? { nombre: cita.cliente.nombre, apellido: cita.cliente.apellido }
                        : null,
                }
                : null,
        }));
    
        console.log('Citas asistidas filtradas:', citasAsistidas);
    
        return citasAsistidas;
    }

    
    public async asistidas(): Promise<CitaInterface[]> {
        const response = await fetch(`http://localhost:3000/parcial/citas/cita`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            if (!response.ok) {
                console.log('error en el server')
            }
            const mensaje= await response.json()
            console.log(mensaje.data)
            return mensaje.data
    }

}


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
