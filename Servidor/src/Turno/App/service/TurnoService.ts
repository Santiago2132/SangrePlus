import Turno from "../../Domain/Model/Turno/Turno";
import Usuario from "../../Domain/Model/Usuario/Usuario";
import TurnoRepositoryPort from "../../Domain/Port/Driven/TurnoRepositoryPort";
import UserRepositoryPort from "../../Domain/Port/Driven/UserRepositoryPort";
import TurnoServicePort from "../../Domain/Port/Driver/TurnoServicePort";



export default class TurnoService implements TurnoServicePort {


    constructor(private readonly turnoRepository: TurnoRepositoryPort,  private readonly usuarioRepository: UserRepositoryPort) {
     
    }

    // Método para obtener un turno por el ID de la cita
    async getTurnoByIdCita(id: number): Promise<Turno> {
        try {
            const turno = await this.turnoRepository.findByNumberCita(id);
            if (!turno) {
                throw new Error(`Turno con ID de Cita ${id} no encontrado`);
            }
            return turno;
        } catch (error) {
            console.error(`Error al obtener turno por ID de Cita: ${error}`);
            throw error;
        }
    }

    // Método para obtener un turno por el ID del turno
    async getTurnoByIdTurno(id: number): Promise<Turno> {
        try {
            const turno = await this.turnoRepository.findById(id);
            if (!turno) {
                throw new Error(`Turno con ID ${id} no encontrado`);
            }
            return turno;
        } catch (error) {
            console.error(`Error al obtener turno por ID: ${error}`);
            throw error;
        }
    }

    // Método para obtener todos los turnos
    async getTurnos(): Promise<Turno[]> {
        try {
            return await this.turnoRepository.findAll();
        } catch (error) {
            console.error('Error al obtener los turnos:', error);
            return [];
        }
    }

    // Método para modificar turnos
    async modificarTurnos(turnos: Turno[]): Promise<boolean> {
        try {
            return await this.turnoRepository.updateAll(turnos);
        } catch (error) {
            console.error('Error al modificar turnos:', error);
            return false;
        }
    }

    // Método para agregar un turno
    async agregarTurno(turno: Turno): Promise<boolean> {
        try {
            const agregado= await this.turnoRepository.save(turno);
            return agregado
        } catch (error) {
            console.error('Error al agregar el turno:', error);
            return false;
        }
    }

    // Método para eliminar un turno
    async eliminarTurno(id: number): Promise<boolean> {
        try {
            return await this.turnoRepository.delete(id);
        } catch (error) {
            console.error('Error al eliminar el turno:', error);
            return false;
        }
    }

    // Método para validar las credenciales de un usuario
    async validarCredenciales(nombre: string, contrasena: string): Promise<Usuario> {
        try {
            const usuario = await this.usuarioRepository.validate(nombre, contrasena);
            if (!usuario) {
                throw new Error('Usuario no encontrado o credenciales incorrectas');
            }
            return usuario;
        } catch (error) {
            console.error(`Error al validar credenciales: ${error}`);
            throw error;
        }
    }
}
