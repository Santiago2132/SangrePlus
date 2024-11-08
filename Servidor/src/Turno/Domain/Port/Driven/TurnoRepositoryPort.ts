import Turno from "../../Model/Turno/Turno";
import Repository from "./RepositoryInterface";

export default interface TurnoRepositoryPort extends Repository<number, Turno> {
    findByNumberCita: (id: number)=> Promise<Turno>;
    updateAll: (turnos: Turno[]) => Promise<boolean>;
}