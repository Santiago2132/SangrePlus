import Cita from "../../../Model/Cita/Cita";

export default interface ColaCitaUseCase{
    agregarCita(cita: Cita): Promise<void>;
    obtenerCita(id: number): Promise<Cita | undefined>;
    eliminarCita(id: number): Promise<void>;
    modificarColaCita(Cita: Cita[]): Promise<boolean>;
    organizarPrioridad(Cita: Cita[]): Promise<boolean>;
}