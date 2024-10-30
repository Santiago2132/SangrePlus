export default class CambiarCitaTemplate {
    constructor() {
        console.log('CambiarCitaTemplate constructor');
    }

    public getHTML = (): string => {
        return `
            <section id="cancelar-cita-container" class="cita-container">
                <h2 id="cancelar-cita-title">Cancelar Cita</h2>
                <form id="cancelar-cita-form" class="cita-form">
                    <div class="form-group">
                        <label for="numero-cita" class="form-label">Número de Cita:</label>
                        <input type="text" id="numero-cita" name="numero-cita" class="form-input" required>
                        <button type="button" id="buscar-cita" class="form-button">Buscar Cita</button>
                    </div>
                </form>
                <!-- Panel de Información de la Cita (Oculto por defecto) -->
                <div id="info-cita-panel" class="info-cita-panel hidden">
                    <h3>Información de la Cita</h3>
                    <p><strong>Fecha:</strong> 25 de octubre de 2024</p>
                    <p><strong>Hora:</strong> 15:00</p>
                    <p><strong>Lugar:</strong> Hospital</p>
                    <button id="cancelar-cita-button" class="cancelar-cita-button">Cancelar Cita</button>
                </div>
            </section>
        `;
    }
}
