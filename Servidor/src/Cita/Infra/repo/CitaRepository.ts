import ClienteProvider from "../../../Cliente/Infra/repo/ClienteProvider";
import Cita from "../../Domain/Model/Cita/Cita";
import NullCita from "../../Domain/Model/Cita/NullCita";
import DBCita from "../../Domain/Port/DB/DBCitaPort";
import CitaRepositoryPort from "../../Domain/Port/Driven/CitaRepositoryPort";
import CitaDB from "../db/citadb";

export default class CitaRepository implements CitaRepositoryPort {
    private citaDB: CitaDB;

    constructor(citaDB: CitaDB) {
        this.citaDB = citaDB;
    }

    // Método para convertir un Cita en un DBCita
    private mapCitaToDBCita(cita: Cita): DBCita {
        return {
        id: cita.id,
        tipocita: cita.tipocita,
        fecha: cita.fecha.toString(),
        hora: cita.hora,
        descripcion: cita.descripcion,
        cliente_id: cita.cliente.id, // Solo el ID del cliente
        lugar: cita.lugar,
        estado: cita.estado,
        observaciones: cita.observaciones,
        };
    }

    private async mapDBCitaToCita(dbCita: DBCita): Promise<Cita> {
        try {
        return new Cita({
            id: dbCita.id,
            tipocita: dbCita.tipocita,
            fecha: new Date(dbCita.fecha),
            hora: dbCita.hora,
            descripcion: dbCita.descripcion,
            cliente: await ClienteProvider.get(dbCita.cliente_id), // Asume que cliente ya es del tipo `Cliente`
            lugar: dbCita.lugar,
            estado: dbCita.estado,
            observaciones: dbCita.observaciones || '',
        });
        } catch (error) {
        console.error('Error al mapear DBCita a Cita:', error);
        return new NullCita()
        }
    }

    async findAll(): Promise<Cita[]> {
        try {
            const dbCitas = await this.citaDB.obtenerTodasLasCitas();
            const citas = await Promise.all(dbCitas.map(this.mapDBCitaToCita));
            return citas;
            } catch (error) {
        console.error('Error al obtener todas las citas:', error);
        return [new NullCita()]
        }
    }

    async findById(id: number): Promise<Cita> {
        try {
            const dbCita = await this.citaDB.buscarCita(Number(id));
            return dbCita ? await this.mapDBCitaToCita(dbCita) : new NullCita();
            } catch (error) {
        console.error(`Error al obtener cita con ID ${id}:`, error);
        return new NullCita();
        }
    }

    async save(cita: Cita): Promise<Cita> {
        try {
            const dbCita = this.mapCitaToDBCita(cita);
            const savedDbCita = await this.citaDB.agendarCita(dbCita);
            if(savedDbCita){
                return await this.mapDBCitaToCita(savedDbCita);
            }else{  return new NullCita() }
        } catch (error) {
        console.error('Error al guardar la cita:', error);
        return new NullCita()
        }
    }

    async update(id: number, partialCita: Partial<Cita>): Promise<Cita> {
        try {
            const dbCita = this.mapCitaToDBCita(partialCita as Cita);
            const updatedDbCita = await this.citaDB.modificarCita(dbCita);
            return updatedDbCita ? await this.mapDBCitaToCita(updatedDbCita) : new NullCita();
            } catch (error) {
        console.error(`Error al actualizar cita con ID ${id}:`, error);
            return new NullCita();
        }
    }

    async delete(id: number): Promise<boolean> {
        try {
            return await this.citaDB.eliminarCita(Number(id));
        } catch (error) {
        console.error(`Error al eliminar cita con ID ${id}:`, error);
            return false
        }
    }
}
