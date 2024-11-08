import Turno from "../../Domain/Model/Turno/Turno";
import Usuario from "../../Domain/Model/Usuario/Usuario";
import TurnoServicePort from "../../Domain/Port/Driver/TurnoServicePort";

export default class TurnoService implements TurnoServicePort{
    getTurnoByIdCita: (id: number) => Promise<Turno>;
    getTurnoByIdTurno: (id: number) => Promise<Turno>;
    getTurnos: () => Promise<Turno>;
    modificarTurnos: (tunos: Turno[]) => Promise<boolean>;
    agregarTurno: (turno: Turno) => Promise<boolean>;
    eliminarTurno: (id: number) => Promise<boolean>;
    validarCredenciales: (nombre: string, contrasena: string) => Promise<Usuario>;

}