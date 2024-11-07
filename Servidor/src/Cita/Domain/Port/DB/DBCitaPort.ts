export default interface DBCitaPort {
    id: number;
    tipocita: string;
    cliente_id?: number;
    fecha: string;
    hora: string;
    descripcion: string;
    lugar: string;
    estado: string;
    observaciones?: string;
}