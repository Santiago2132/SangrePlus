import Turno from "../../Model/Turno/Turno";
import Usuario from "../../Model/Usuario/Usuario";


    export default interface TurnoServicePort {
        getTurnoByIdCita: (id: number)=> Promise<Turno>;
        getTurnoByIdTurno: (id: number)=> Promise<Turno>;
        getTurnos: ()=> Promise<Turno>;
        modificarTurnos: (tunos: Turno[])=> Promise<boolean>;
        agregarTurno: (turno:Turno)=> Promise<boolean>;
        eliminarTurno: (id: number)=> Promise<boolean>;


        validarCredenciales: (nombre: string, contrasena: string)=> Promise<Usuario>;
    }