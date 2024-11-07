import Cita from "../../Model/Cita/Cita";

export default interface CitaUseCasePort{
    getCitaById: (id: number)=> Promise<Cita>;
    agregarCita: (cita: Cita)=> Promise<Cita>;
    eliminarCita: (id: number)=> Promise<void>;
    editarCita: (cita: Cita)=> Promise<Cita>;
    buscarCitaPorCliente: (clienteId: number)=> Promise<Cita[]>;
}