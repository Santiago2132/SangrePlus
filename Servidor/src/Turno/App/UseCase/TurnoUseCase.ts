import CitaServicePort from "../../../Cita/Domain/Port/Driver/CitaServicePort";
import NullTurno from "../../Domain/Model/Turno/NullTurno";
import Turno from "../../Domain/Model/Turno/Turno";
import NullUsuario from "../../Domain/Model/Usuario/NullUsuario";
import Usuario from "../../Domain/Model/Usuario/Usuario";
import TurnoServicePort from "../../Domain/Port/Driver/TurnoServicePort";
import TurnoUseCasePort from "../../Domain/Port/Driver/TurnoUseCasePort";


export default class TurnoUseCase implements TurnoUseCasePort {

    constructor(private readonly turnoService: TurnoServicePort, private readonly citaService: CitaServicePort) {
    
    }

 // Obtener el turno basado en el ID de la cita, generando turnos según prioridad
    async getTurnoByIdCita(id: number): Promise<Turno> {
        try {
            // Obtener la cita
            const cita = await this.citaService.getCitaById(id);
            if (!cita) {
                console.log(`Cita con ID ${id} no encontrada`);
                return new NullTurno()
            }

            // Obtener el cliente de la cita
            const cliente = cita.cliente;
            if (!cliente) console.log(`Cliente no encontrado para la cita con ID ${id}`);

            // Verificar si el cliente es premium o mayor de 60 años
            const esPrioritario = cliente.tipo === "premium" || cliente.edad > 60;

            // Obtener el siguiente número de turno disponible
            const numeroTurno = await this.proximoTurno(esPrioritario);
            const idTurno= await this.getTurnos() as Turno[]

            // Crear el nuevo turno con prioridad
            const nuevoTurno = new Turno({
                id_turno: idTurno.length+1,  // Será autogenerado
                turno: numeroTurno,
                modulo: '',
                numero: 1,
                cita_id: cita.id
            });
            // Guardar el turno en la base de datos
            const turnoCreado = await this.agregarTurno(nuevoTurno);
            console.log(turnoCreado)
            const turno= await this.agregarTurnoLista(nuevoTurno)
            console.log(turnoCreado,turno)

            return nuevoTurno;
        } catch (error) {
            console.error(`Error al obtener turno por ID de cita: ${error}`);
            return new NullTurno();
        }
    }

    public async agregarTurnoLista(turno: Turno): Promise<Turno[]> {
        try {
            // Obtener la lista de turnos actualizada
            const listaTurnos = await this.getTurnos() as Turno[];
    
            // Separar los turnos en premium y no premium
            const turnosPremium = listaTurnos.filter(t => t.getTurno().startsWith('P'));
            const turnosNoPremium = listaTurnos.filter(t => t.getTurno().startsWith('NP'));
    
            // Agregar el nuevo turno a la lista correspondiente
            if (turno.getTurno().startsWith('P')) {
                // Agregar los turnos premium al inicio de la lista
                turnosPremium.push(turno);
            } else if (turno.getTurno().startsWith('NP')) {
                // Agregar los turnos no premium al final de la lista
                turnosNoPremium.push(turno);
            }
    
            // Ordenar los turnos, primero los premium, luego los no premium
            const listaOrdenada = [...turnosPremium, ...turnosNoPremium];

            // Modificar los números de los turnos según el orden de la lista
            listaOrdenada.forEach((turno, index) => {
                turno.setNumero(index + 1); // Asignar el número secuencial (empezando desde 1)
            });
    
            // Ahora la listaTurnos está ordenada, y puedes realizar cualquier operación adicional
            console.log('Lista de turnos actualizada:', listaOrdenada);
            
            await this.modificarTurnos(listaOrdenada)
            return listaOrdenada
        } catch (error) {
            console.error('Error al agregar turno a la lista:', error);
            return []
        }
    }
    

    public proximoTurno = async (esClientePremium: boolean): Promise<string> => {
        // Obtener la lista de todos los turnos
        const listaTurnos = await this.getTurnos() as Turno[];
    
        // Separar los turnos según el tipo de cliente
        const turnosPorTipo = {
            premium: listaTurnos.filter(turno => turno.getTurno().startsWith('P')),
            regular: listaTurnos.filter(turno => turno.getTurno().startsWith('NP'))
        };
    
        console.log('Turnos Premium:', turnosPorTipo.premium);
        console.log('Turnos Regulares:', turnosPorTipo.regular);
    
        // Función para generar el próximo número de turno para un tipo de cliente
        const generarNumeroTurno = (turnos: Turno[], prefijo: string): string => {
            // Número secuencial basado en la cantidad de turnos existentes
            const siguienteNumero = turnos.length + 1;
    
            // Generar el turno con el número apropiado
            return `${prefijo}-${siguienteNumero}`;
        };
    
        // Generar el nuevo turno dependiendo de si es cliente premium o no
        let nuevoTurno: string;
        if (esClientePremium) {
            nuevoTurno = generarNumeroTurno(turnosPorTipo.premium, 'P');
        } else {
            nuevoTurno = generarNumeroTurno(turnosPorTipo.regular, 'NP');
        }
    
        // Retornar el nuevo turno generado
        return nuevoTurno;
    };
    
    

    async getTurnoByIdTurno(id: number): Promise<Turno> {
        try {
            const turno = await this.turnoService.getTurnoByIdTurno(id);
            
            return turno;
        } catch (error) {
            console.error(`Error al obtener turno por ID de turno: ${error}`);
            return new NullTurno()
        }
    }

    async getTurnos(): Promise<Turno[]> {
        try {
            const turnos = await this.turnoService.getTurnos() as Turno[];
            
            // Ordenar los turnos por el número de turno de forma ascendente
            return turnos.sort((a, b) => a.getNumero() - b.getNumero());
        } catch (error) {
            console.error('Error al obtener turnos:', error);
        return []
        } 
    }   

    async modificarTurnos(turnos: Turno[]): Promise<boolean> {
        try {
            const resultado = await this.turnoService.modificarTurnos(turnos);
            return resultado;
        } catch (error) {
            console.error('Error al modificar turnos:', error);
            return false;
        }
    }

    async agregarTurno(turno: Turno): Promise<boolean> {
        try {
            const resultado = await this.turnoService.agregarTurno(this.fromTurnoPort(turno));
            return resultado;
        } catch (error) {
            console.error('Error al agregar turno:', error);
            return false;
        }
    }

    async eliminarTurno(id: number): Promise<boolean> {
        try {
            const resultado = await this.turnoService.eliminarTurno(id);
            return resultado;
        } catch (error) {
            console.error('Error al eliminar turno:', error);
            return false;
        }
    }

    async validarCredenciales(nombre: string, contrasena: string): Promise<Usuario> {
        try {
            const usuario = await this.turnoService.validarCredenciales(nombre, contrasena);
            if (!usuario) throw new Error("Usuario o contraseña incorrectos");
            return usuario;
        } catch (error) {
            console.error("Error al validar credenciales:", error);
            return new NullUsuario()
            
        }
    }


       // Convierte un objeto DBTurnoPort a Turno
    fromTurnoPort(dbTurno: Turno): Turno {
        console.log('turno ' + dbTurno.getIdTurno());
    
        return new Turno({
            id_turno: dbTurno.getIdTurno(), // Convierte el valor a string
            turno: dbTurno.getTurno(),
            modulo: dbTurno.getModulo() || '', // Si no tiene modulo, se asigna un string vacío
            numero: dbTurno.getNumero(),
            cita_id: dbTurno.getCitaId()
        });
    }
    
}
