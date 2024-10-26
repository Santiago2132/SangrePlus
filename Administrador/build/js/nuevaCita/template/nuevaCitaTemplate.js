export default class NuevaCitaTemplate {
    constructor() {
        console.log('NuevaCitaTemplate constructor');
    }
    getHTML = () => {
        return `
            <form id="nueva-cita-form">
                <div>
                    <label for="nombres">Nombres:</label>
                    <input type="text" id="nombres" name="nombres" required>
                </div>
                <div>
                    <label for="apellidos">Apellidos:</label>
                    <input type="text" id="apellidos" name="apellidos" required>
                </div>
                <div class="full-width">
                    <label for="descripcion">Descripción de la cita:</label>
                    <textarea id="descripcion" name="descripcion" required></textarea>
                </div>
                <div>
                    <label for="identificacion">Identificación:</label>
                    <input type="text" id="identificacion" name="identificacion" required>
                </div>
                <div>
                    <label for="direccion">Dirección:</label>
                    <input type="text" id="direccion" name="direccion" required>
                </div>
                <div>
                    <label for="tipo-cita">Tipo de cita:</label>
                    <select id="tipo-cita" name="tipo-cita" required>
                        <option value="consulta">Consulta</option>
                        <option value="seguimiento">Seguimiento</option>
                        <option value="emergencia">Emergencia</option>
                    </select>
                </div>
                <div>
                    <label for="fecha">Fecha:</label>
                    <input type="date" id="fecha" name="fecha" required>
                </div>
                <div>
                    <label for="hora">Hora:</label>
                    <input type="time" id="hora" name="hora" required>
                </div>
                <div>
                    <label for="lugar">Lugar:</label>
                    <input type="text" id="lugar" name="lugar" required>
                </div>
                <div class="full-width">
                    <button type="submit">Agendar Cita</button>
                </div>
            </form>
        `;
    };
}
