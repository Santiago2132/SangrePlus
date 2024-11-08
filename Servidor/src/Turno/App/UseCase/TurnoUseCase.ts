import Turno from "../../Domain/Model/Turno/Turno";
import Usuario from "../../Domain/Model/Usuario/Usuario";
import TurnoUseCasePort from "../../Domain/Port/Driver/TurnoUseCasePort";

export default class TurnoUseCase implements TurnoUseCasePort{
    getTurnoByIdCita: (id: number) => Promise<Turno>;
    getTurnoByIdTurno: (id: number) => Promise<Turno>;
    getTurnos: () => Promise<Turno>;
    modificarTurnos: (tunos: Turno[]) => Promise<boolean>;
    agregarTurno: (turno: Turno) => Promise<boolean>;
    eliminarTurno: (id: number) => Promise<boolean>;
    validarCredenciales: (nombre: string, contrasena: string) => Promise<Usuario>;
    
}