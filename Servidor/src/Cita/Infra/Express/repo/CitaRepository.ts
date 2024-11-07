import DBCita from "../../../Domain/Port/CitaDatabasePort";
import CitaRepositoryPort from "../../../Domain/Port/Driven/CitaRepositoryPort";

export default class CitaRepository implements CitaRepositoryPort{
    
    constructor(){

    }
    
    findAll: () => Promise<DBCita[]>;
    findById: (id: string) => Promise<DBCita>;
    save: (item: DBCita) => Promise<DBCita>;
    update: (id: string, item: Partial<DBCita>) => Promise<boolean | DBCita>;
    delete: (id: string) => Promise<boolean>;

}