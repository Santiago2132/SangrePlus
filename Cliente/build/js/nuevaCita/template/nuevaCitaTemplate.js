export default class NuevaCitaTemplate {
    constructor() {
        console.log('NuevaCitaTemplate constructor');
    }
    getHTML = () => {
        return `
            <form id="form-nueva-cita">
                <div>
                    <label for="input-nombres">Nombres:</label>
                    <input type="text" id="input-nombres" name="nombres" required>
                </div>
                <div>
                    <label for="input-apellidos">Apellidos:</label>
                    <input type="text" id="input-apellidos" name="apellidos" required>
                </div>
                <div>
                    <label for="select-edad">Edad:</label>
                    <select id="select-edad" name="edad" required>
                        ${Array.from({ length: 121 }, (_, i) => `<option value="${i}">${i}</option>`).join('')}
                    </select>
                </div>
                <div>
                    <label for="input-identificacion">Identificación:</label>
                    <div id="div-idee">
                        <select id="select-tipo-identificacion" name="tipo-identificacion" required>
                            <option value="TI">T. I.</option>
                            <option value="CI">C. I.</option>
                        </select>
                        <input type="text" id="input-identificacion" name="identificacion" required>
                    </div>
                </div>
                <div class="full-width">
                    <label for="textarea-descripcion">Descripción de la cita:</label>
                    <textarea id="textarea-descripcion" name="descripcion" required></textarea>
                </div>
                <div>
                    <label for="select-tipo-cita">Tipo de cita:</label>
                    <select id="select-tipo-cita" name="tipo-cita" required>
                        <option value="examen">Examen</option>
                        <option value="seguimiento">Seguimiento</option>
                    </select>
                </div>
                <div>
                    <label for="input-fecha">Fecha:</label>
                    <input type="date" id="input-fecha" name="fecha" required>
                </div>
                <div>
                    <label for="input-hora">Hora:</label>
                    <input type="time" id="input-hora" name="hora" required>
                </div>
                <div>
                    <label for="select-lugar">Lugar:</label>
                    <select id="select-lugar" name="lugar" required>
                        <option value="hospital">Hospital</option>
                        <option value="clinica">Clínica</option>
                        <option value="cabecera">Cabecera</option>
                    </select>
                </div>
                <div class="full-width">
                    <button type="submit">Agendar Cita</button>
                </div>
            </form>
            <div id="div-cita-id-container"></div> <!-- Contenedor para mostrar el ID de la cita -->
        `;
    };
    showError = (message) => {
        const errorDiv = document.getElementById('alerta-error');
        if (errorDiv) {
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
        }
    };
    hideError = () => {
        const errorDiv = document.getElementById('alerta-error');
        if (errorDiv) {
            errorDiv.style.display = 'none';
        }
    };
}
