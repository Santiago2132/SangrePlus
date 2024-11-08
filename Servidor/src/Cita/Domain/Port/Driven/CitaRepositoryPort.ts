import Cita from "../../Model/Cita/Cita";
import CitaInterface from "../../Model/Cita/Cita";
import DBCita from "../DB/DBCitaPort";
import Repository from "./RepositoryInterface";

export default interface CitaRepositoryPort extends Repository<number, Cita> {
}