export default class AgenteMenuView {
    selector;
    selectorName = 'agente';
    template;
    constructor(template) {
        this.selector = document.createElement('div');
        this.template = template;
    }
    init() {
        this.selector = document.getElementById(this.selectorName);
        if (this.selector) {
            this.selector.innerHTML = this.template.getTableHeaderHTML();
            this.selector.style.display = 'block';
        }
    }
    render = (turnosConCitas) => {
        console.log("Renderizando vista con datos de turnos y citas");
        const tbody = document.getElementById('turnos-tbody');
        if (!tbody)
            return;
        // Limpiar el tbody antes de agregar nuevas filas
        tbody.innerHTML = '';
        // Generar las filas de la tabla con los datos dinámicos
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
        // Insertar las filas generadas en el tbody
        tbody.innerHTML = tableRows;
        // Agregar los event listeners para los botones "subir" y "bajar"
        this.addButtonEventListeners(turnosConCitas);
    };
    addButtonEventListeners = (turnosConCitas) => {
        const subirButtons = this.selector.querySelectorAll('.turno-btn.subir');
        const bajarButtons = this.selector.querySelectorAll('.turno-btn.bajar');
        subirButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const index = parseInt(event.target.getAttribute('data-index'));
                if (index > 0) {
                    this.swapTurno(turnosConCitas, index, index - 1);
                    this.render(turnosConCitas); // Volver a renderizar la vista después de hacer el cambio
                }
            });
        });
        bajarButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const index = parseInt(event.target.getAttribute('data-index'));
                if (index < turnosConCitas.length - 1) {
                    this.swapTurno(turnosConCitas, index, index + 1);
                    this.render(turnosConCitas); // Volver a renderizar la vista después de hacer el cambio
                }
            });
        });
    };
    // Método para intercambiar dos turnos en el arreglo
    swapTurno = (turnosConCitas, indexA, indexB) => {
        const temp = turnosConCitas[indexA];
        turnosConCitas[indexA] = turnosConCitas[indexB];
        turnosConCitas[indexB] = temp;
    };
}
