// TurnosTemplate.js
export default class TurnosTemplate {
    constructor() {
        console.log('TurnosTemplate constructor');
    }
    getHTML = () => {
        return `
        <div class="turnos-container">
            <div class="panel-izquierdo">
                <input type="text" id="turno" placeholder="Número de cita" />
                <button class="button" id="pedir-turno">Pedir Turno</button>
            </div>
            <div class="turno-grande">
            </div>
            <div class="turnos-pequenos">
                <!-- Aquí se añadirán los turnos -->
            </div>
        </div>
        `;
    };
    renderTurno = (turno) => {
        return `
            <div class="turno">
                <h3>${turno.titulo}</h3>
                <p>${turno.descripcion}</p>
            </div>
        `;
    };
    renderTurnoGrande = (turno) => {
        return `
            <div class="turno">
                <h2>${turno.titulo}</h2>
                <p>${turno.descripcion}</p>
            </div>
        `;
    };
}
