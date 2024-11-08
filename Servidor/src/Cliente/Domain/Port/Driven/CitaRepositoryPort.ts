import Cliente from "../../Model/Cliente/Cliente";
import Repository from "./RepositoryInterface";

export default interface ClienteRepositoryPort extends Repository<number, Cliente> {
}