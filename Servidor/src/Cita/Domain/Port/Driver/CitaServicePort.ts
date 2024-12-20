    import Cita from "../../Model/Cita/Cita";

    export default interface CitaServicePort {
        getCitaById: (id: number)=> Promise<Cita>;
        agregarCita: (cita: Cita)=> Promise<Cita>;
        eliminarCita: (id: number)=> Promise<void>;
        editarCita: (cita: Cita)=> Promise<Cita>;
        buscarCitaPorCliente: (clienteId: number)=> Promise<Cita[]>;
        buscarCitaPorTurno: (turnoId: number)=> Promise<Cita[]>;
        buscarCitaPorFecha: (fecha: Date)=> Promise<Cita[]>;
        buscarCitaPorHora: (hora: string)=> Promise<Cita[]>;
        buscarCitaPorLugar: (lugar: string)=> Promise<Cita[]>;
    }