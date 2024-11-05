// TurnosTemplate.js
export default class TurnosTemplate {
    constructor() {
        console.log('TurnosTemplate constructor');
    }

    public getHTML = (): string => {
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
    }

    public renderTurno = (turno: { titulo: string; descripcion: string }): string => {
        return `
            <div class="turno">
                <h3>${turno.titulo}</h3>
                <p>${turno.descripcion}</p>
            </div>
        `;
    }
    public renderTurnoGrande = (turno: { titulo: string; descripcion: string }): string => {
        return `
            <div class="turno">
                <h2>${turno.titulo}</h2>
                <p>${turno.descripcion}</p>
            </div>
        `;
    }
    
}
