export default class CambiarCitaTemplate {
    constructor() {
        console.log('NuevaCitaTemplate constructor');
    }
    getHTML = () => {
        return `
            <div class="cambiar-cita">
                
                <form id="cita-a-cambiar">
                    <h2>Cambiar Cita</h2>
                    <div>
                        <label for="numero-cita">Número de Cita:</label>
                        <input type="text" id="numero-cita" name="numero-cita" required>
                        <button type="submit" id="buscar-cita">Buscar Cita</button>
                    </div>
                </form>
                
                <form id="nueva-cita-form">
                <div>
                    <label for="nombres">Nombres:</label>
                    <input type="text" id="nombres" name="nombres" required>
                </div>
                <div>
                    <label for="apellidos">Apellidos:</label>
                    <input type="text" id="apellidos" name="apellidos" required>
                </div>
                <div>
                    <label for="edad">Edad:</label>
                    <select id="edad" name="edad" required>
                        ${Array.from({ length: 121 }, (_, i) => `<option value="${i}">${i}</option>`).join('')}
                    </select>
                </div>
                <div>
                    <label for="identificacion">Identificación:</label>
                    <div id="idee">
                        <select id="tipo-identificacion" name="tipo-identificacion" required>
                        <div id="identiti">
                            <option value="TI">T. I.</option>
                            <option value="CI">C. I.</option>
                        </div>
                        
                        </select>
                        <input type="text" id="identificacion" name="identificacion" required>
                    </div>
                </div>
                <div>
                    <label for="direccion">Dirección:</label>
                    <input type="text" id="direccion" name="direccion" required>
                </div>
                <div class="full-width">
                    <label for="descripcion">Descripción de la cita:</label>
                    <textarea id="descripcion" name="descripcion" required></textarea>
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
                    <select id="lugar" name="lugar" required>
                        <option value="hospital">Hospital</option>
                        <option value="clinica">Clínica</option>
                        <option value="cabecera">Cabecera</option>
                    </select>
                </div>
                <div class="full-width">
                    <button type="submit">Agendar Cita</button>
                </div>
            </form>
        `;
    };
}
