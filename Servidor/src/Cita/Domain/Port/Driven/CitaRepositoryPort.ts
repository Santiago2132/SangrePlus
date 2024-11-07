import DBCita from "../CitaDatabasePort";
import Repository from "./RepositoryInterface";

export default interface CitaRepositoryPort extends Repository<string, DBCita> {
}