import AgenteMenuTemplate from "../template/agenteMenuTemplate.js";

export default class AgenteMenuView {
    private selector: HTMLDivElement;
    private selectorName = 'agente';
    private template: AgenteMenuTemplate;
    private onOrdenChange: (turnos: any[]) => void;  // Callback para notificar cambios de orden

    constructor(template: AgenteMenuTemplate, onOrdenChange: (turnos: any[]) => void) {
        this.selector = document.createElement('div'); 
        this.template = template;
        this.onOrdenChange = onOrdenChange;
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
            <tr>
                <td>${turno.numero}</td>
                <td>${turno.turno}</td>
                <td>${turno.cita ? turno.cita.id : "N/A"}</td>
                <td>${turno.cita ? turno.cita.hora : "N/A"}</td>
                <td>
                    <button class="turno-btn subir" data-index="${index}">Arriba</button>
                    <button class="turno-btn bajar" data-index="${index}">Abajo</button>
                    <button class="turno-btn eliminar">Eliminar</button>
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
    }

    private swapTurno = (turnosConCitas: any[], indexA: number, indexB: number): void => {
        const temp = turnosConCitas[indexA];
        turnosConCitas[indexA] = turnosConCitas[indexB];
        turnosConCitas[indexB] = temp;
    }
}
