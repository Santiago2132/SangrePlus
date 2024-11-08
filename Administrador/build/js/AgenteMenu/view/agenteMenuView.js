export default class AgenteMenuView {
    selector;
    selectorName = 'agente';
    template;
    onOrdenChange;
    onEliminarTurno;
    // Modifica el constructor para aceptar los tres argumentos
    constructor(template, onOrdenChange, onEliminarTurno) {
        this.selector = document.createElement('div');
        this.template = template;
        this.onOrdenChange = onOrdenChange;
        this.onEliminarTurno = onEliminarTurno;
    }
    init() {
        this.selector = document.getElementById(this.selectorName);
        if (this.selector) {
            this.selector.innerHTML = this.template.getTableHeaderHTML();
            this.selector.style.display = 'block';
        }
    }
    render = (turnosConCitas) => {
        const tbody = document.getElementById('turnos-tbody');
        if (!tbody)
            return;
        tbody.innerHTML = ''; // Limpiar el tbody antes de agregar nuevas filas
        let tableRows = turnosConCitas.map((turno, index) => `
            <tr data-index="${index}">
                <td>${turno.numero}</td>
                <td>${turno.turno}</td>
                <td>${turno.cita ? turno.cita.id : "N/A"}</td>
                <td>${turno.cita ? turno.cita.hora : "N/A"}</td>
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
    };
    addButtonEventListeners = (turnosConCitas) => {
        const subirButtons = this.selector.querySelectorAll('.turno-btn.subir');
        const bajarButtons = this.selector.querySelectorAll('.turno-btn.bajar');
        const eliminarButtons = this.selector.querySelectorAll('.turno-btn.eliminar'); // Agregar esto
        subirButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const index = parseInt(event.target.getAttribute('data-index'));
                if (index > 0) {
                    this.swapTurno(turnosConCitas, index, index - 1);
                    this.onOrdenChange(turnosConCitas); // Notificar al controlador del cambio de orden
                    this.render(turnosConCitas); // Volver a renderizar
                }
            });
        });
        bajarButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const index = parseInt(event.target.getAttribute('data-index'));
                if (index < turnosConCitas.length - 1) {
                    this.swapTurno(turnosConCitas, index, index + 1);
                    this.onOrdenChange(turnosConCitas); // Notificar al controlador del cambio de orden
                    this.render(turnosConCitas); // Volver a renderizar
                }
            });
        });
        // Agregar evento de eliminación
        eliminarButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const index = parseInt(event.target.getAttribute('data-index'));
                const turnoAEliminar = turnosConCitas[index]; // Obtener el turno
                console.log("Eliminando turno:", turnoAEliminar); // Ver el turno antes de eliminar
                // Eliminar el turno del arreglo
                turnosConCitas.splice(index, 1); // Eliminar el turno en el índice correspondiente
                this.onEliminarTurno(turnoAEliminar.id_turno); // Llamar a la función de eliminar (si es necesario para el backend o modelo)
                this.render(turnosConCitas); // Volver a renderizar con los turnos restantes
            });
        });
    };
    swapTurno = (turnosConCitas, indexA, indexB) => {
        const temp = turnosConCitas[indexA];
        turnosConCitas[indexA] = turnosConCitas[indexB];
        turnosConCitas[indexB] = temp;
    };
}
