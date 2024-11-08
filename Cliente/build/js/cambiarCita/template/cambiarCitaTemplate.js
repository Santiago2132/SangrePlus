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
                        <label for="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required>
                    </div>
                    <div>
                        <label for="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido" required>
                    </div>
                    <div>
                        <label for="edad">Edad:</label>
                        <select id="edad" name="edad" required>
                            ${Array.from({ length: 121 }, (_, i) => `<option value="${i}">${i}</option>`).join('')}
                        </select>
                    </div>
                    <div>
                        <label for="tipo-identificacion">Tipo de Identificación:</label>
                        <select id="tipo-identificacion" name="tipo-identificacion" required>
                            <option value="TI">T. I.</option>
                            <option value="CI">C. I.</option>
                        </select>
                    </div>
                    <div>
                        <label for="identificacion">Identificación:</label>
                        <input type="text" id="identificacion" name="identificacion" required>
                    </div>
                    <div>
                        <label for="descripcion">Descripción de la cita:</label>
                        <textarea id="descripcion" name="descripcion" required></textarea>
                    </div>
                    <div>
                        <label for="tipocita">Tipo de cita:</label>
                        <select id="tipocita" name="tipocita" required>
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

                    <div id="mensaje-cambio" style="display:none; color: green; font-weight: bold;">
                        ¡Tu cita fue cambiada exitosamente!
                    </div>
                </form>
            </div>
        `;
    };
}
