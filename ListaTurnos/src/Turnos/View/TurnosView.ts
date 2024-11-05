import TurnosTemplate from "../Template/TurnosTemplate.js";

interface Turno {
    id: number;
    titulo: string;
    descripcion: string;
}

export default class TurnosView { 
    private selector: HTMLDivElement;
    private selectorName = 'turnos';
    private turnos: Turno[] = [];
    private template: TurnosTemplate;

    constructor(template: TurnosTemplate) {
        this.template = template; // Asigna el template a la propiedad
        this.selector = document.createElement('div');
    }

    public setTurnos(turnos: Turno[]): void {
        this.turnos = turnos;
    }

    public init = async (): Promise<void> => {
        this.selector = document.getElementById(this.selectorName) as HTMLDivElement;
    
        // Renderiza la vista primero
        this.renderTurnoGrande();
    
        // Ahora que el HTML está renderizado, añade el event listener al botón
        const pedirTurnoButton = this.selector.querySelector('#pedir-turno') as HTMLButtonElement;
        
        // Comprueba si el botón fue encontrado antes de intentar añadir el listener
        if (pedirTurnoButton) {
            pedirTurnoButton.addEventListener('click', this.agregarTurnoVisualmente);
        } else {
            console.error('Error: No se pudo encontrar el botón "Pedir Turno" en el DOM.');
        }
    };
    

    public render = (): void => {
        this.selector.innerHTML = this.template.getHTML(); // Inicializa el HTML del template

        const turnosContainer = this.selector.querySelector('.turnos-pequenos') as HTMLDivElement;

        // Renderizar cada turno usando el método renderTurno
        this.turnos.forEach(turno => {
            const turnoHtml = this.template.renderTurno(turno); // Cambia aquí
            turnosContainer.innerHTML += turnoHtml; // Agrega el HTML del turno al contenedor
        });
        
    }

    public renderTurnoGrande = (): void => {
        this.selector.innerHTML = this.template.getHTML(); // Inicializa el HTML del template
    
        const turnoGrandeContainer = this.selector.querySelector('.turno-grande') as HTMLDivElement;
        const turnosPequenosContainer = this.selector.querySelector('.turnos-pequenos') as HTMLDivElement;
    
        // Buscar el turno que tiene el título "Turno 1"
        const turno1 = this.turnos.find(turno => turno.titulo === "Turno 1");
    
        // Renderizar "Turno 1" en el contenedor grande
        if (turno1) {
            const turnoGrandeHtml = this.template.renderTurno(turno1); // Renderiza el turno grande
            turnoGrandeContainer.innerHTML = turnoGrandeHtml; // Agrega el HTML del turno grande
        }
    
        // Renderizar los otros turnos en el contenedor de turnos pequeños
        this.turnos
            .filter(turno => turno.titulo !== "Turno 1") // Filtrar los turnos que no son "Turno 1"
            .forEach(turno => {
                const turnoPequenoHtml = this.template.renderTurno(turno); // Renderiza cada turno pequeño
                turnosPequenosContainer.innerHTML += turnoPequenoHtml; // Agrega el HTML de cada turno pequeño
            });
    };
    
    public agregarTurnoVisualmente = (): void => {
        const input = this.selector.querySelector('#turno') as HTMLInputElement;
        const titulo = input.value.trim(); // Obtenemos el valor del input
    
        if (titulo) {
            const nuevoTurno = {
                id: this.turnos.length + 1, // Genera un nuevo ID
                titulo: titulo,
                descripcion: `Descripción del ${titulo}`, // Puedes cambiar la descripción si es necesario
            };
    
            // Mostrar el turno temporalmente debajo del botón
            this.mostrarTurnoTemporal(nuevoTurno);
    
            // Después de 5 segundos, agregar el turno a la lista general
            setTimeout(() => {
                this.turnos.push(nuevoTurno); // Agrega el nuevo turno a la lista
                
                // Solo volver a renderizar los turnos pequeños
                this.renderTurnosPequenos(); 
            }, 5000);
        }
    };
    
    // Método para renderizar solo los turnos pequeños sin afectar el turno grande
    public renderTurnosPequenos = (): void => {
        const turnosPequenosContainer = this.selector.querySelector('.turnos-pequenos') as HTMLDivElement;
    
        // Limpiar el contenedor de turnos pequeños antes de renderizar
        turnosPequenosContainer.innerHTML = '';
    
        // Filtrar los turnos que no son "Turno 1" y renderizarlos en pequeños
        this.turnos
            .filter(turno => turno.titulo !== "Turno 1") // Filtrar los turnos que no son "Turno 1"
            .forEach(turno => {
                const turnoPequenoHtml = this.template.renderTurno(turno); // Renderiza cada turno pequeño
                turnosPequenosContainer.innerHTML += turnoPequenoHtml; // Agrega el HTML de cada turno pequeño
            });
    };
    
    
    // Función para mostrar el turno temporalmente debajo del botón
    private mostrarTurnoTemporal = (turno: Turno): void => {
        const turnoTemporalContainer = this.selector.querySelector('.panel-izquierdo') as HTMLDivElement;
    
        // Crear un elemento temporal para mostrar el turno
        const turnoTemporal = document.createElement('div');
        turnoTemporal.classList.add('turno-temporal');
        turnoTemporal.innerHTML = `
            <div class="turno">
                <h4>${turno.titulo}</h4>
                <p>${turno.descripcion}</p>
            </div>
        `;
    
        turnoTemporalContainer.appendChild(turnoTemporal);
    
        // Eliminar el turno temporal después de 5 segundos
        setTimeout(() => {
            turnoTemporalContainer.removeChild(turnoTemporal);
        }, 5000);
    };
    
    
}
