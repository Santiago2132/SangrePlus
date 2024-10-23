export default class CambiarCitaTemplate {
    constructor() {
        console.log('NuevaCitaTemplate constructor');
    }

    public getHTML = (): string => {
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
                    <h3>Información de Cita</h3>
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
                </form>
            </div>
        `;
    }
}
