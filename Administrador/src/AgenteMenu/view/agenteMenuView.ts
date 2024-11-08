import AgenteMenuTemplate from "../template/agenteMenuTemplate.js";

export default class AgenteMenuView {
    private selector: HTMLDivElement;
    private selectorName = 'agente';
    private template: AgenteMenuTemplate;
    private onOrdenChange: (turnos: any[]) => void;
    private onEliminarTurno: (id_turno: number) => void;

    // Modifica el constructor para aceptar los tres argumentos
    constructor(template: AgenteMenuTemplate, onOrdenChange: (turnos: any[]) => void, onEliminarTurno: (id_turno: number) => void) {
        this.selector = document.createElement('div');
        this.template = template;
        this.onOrdenChange = onOrdenChange;
        this.onEliminarTurno = onEliminarTurno;
    }

    public init() {
        this.selector = document.getElementById(this.selectorName) as HTMLDivElement;
        if (this.selector) {
            this.selector.innerHTML = this.template.getTableHeaderHTML();
            this.selector.style.display = 'block';
        }
    }

    public render = (turnosConCitas: any[]): void => {
        const tbody = document.getElementById('turnos-tbody') as HTMLTableSectionElement;
        if (!tbody) return;

        tbody.innerHTML = ''; // Limpiar el tbody antes de agregar nuevas filas

        let tableRows = turnosConCitas.map((turno, index) => `
            <tr data-index="${index}">
                <td>${turno.id_turno}</td>
                <td>${turno.turno}</td>
                <td>${turno.cita_id ? turno.cita_id : "N/A"}</td>
                <td>${turno.cita_id ? turno.modulo : "N/A"}</td>
                <td>
                    <button class="turno-btn subir" data-index="${index}">Arriba</button>
                    <button class="turno-btn bajar" data-index="${index}">Abajo</button>
                    <button class="turno-btn eliminar" data-index="${index}">Eliminar</button>
                    <button class="turno-btn notificar">Atender Cita</button>
                    <button class="turno-btn finalizar">Finalización</button>
                </td>
            </tr>
        `).join("");

        tbody.innerHTML = tableRows;

        this.addButtonEventListeners(turnosConCitas);
    }

    private addButtonEventListeners = (turnosConCitas: any[]): void => {
        const subirButtons = this.selector.querySelectorAll('.turno-btn.subir');
        const bajarButtons = this.selector.querySelectorAll('.turno-btn.bajar');
        const eliminarButtons = this.selector.querySelectorAll('.turno-btn.eliminar');  // Agregar esto
    
        subirButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const index = parseInt((event.target as HTMLElement).getAttribute('data-index')!);
                if (index > 0) {
                    this.swapTurno(turnosConCitas, index, index - 1);
                    this.onOrdenChange(turnosConCitas);  // Notificar al controlador del cambio de orden
                    this.render(turnosConCitas); // Volver a renderizar
                }
            });
        });
    
        bajarButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const index = parseInt((event.target as HTMLElement).getAttribute('data-index')!);
                if (index < turnosConCitas.length - 1) {
                    this.swapTurno(turnosConCitas, index, index + 1);
                    this.onOrdenChange(turnosConCitas);  // Notificar al controlador del cambio de orden
                    this.render(turnosConCitas); // Volver a renderizar
                }
            });
        });
    
        // Agregar evento de eliminación
        eliminarButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const index = parseInt((event.target as HTMLElement).getAttribute('data-index')!);
                const turnoAEliminar = turnosConCitas[index];  // Obtener el turno
                console.log("Eliminando turno:", turnoAEliminar); // Ver el turno antes de eliminar
    
                // Eliminar el turno del arreglo
                turnosConCitas.splice(index, 1);  // Eliminar el turno en el índice correspondiente
    
                this.onEliminarTurno(turnoAEliminar.id_turno);  // Llamar a la función de eliminar (si es necesario para el backend o modelo)
                this.render(turnosConCitas);  // Volver a renderizar con los turnos restantes
            });
        });
    }
    
    

    private swapTurno = (turnosConCitas: any[], indexA: number, indexB: number): void => {
        const temp = turnosConCitas[indexA];
        turnosConCitas[indexA] = turnosConCitas[indexB];
        turnosConCitas[indexB] = temp;
    }
}
