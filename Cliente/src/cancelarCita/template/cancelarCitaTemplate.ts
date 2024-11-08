export default class cancelarCitaTemplate {
    constructor() {}

    public getHTML = (): string => {
        return `
            <section id="cancelar-cita-container" class="cita-container">
                <h2 id="cancelar-cita-title">Cancelar Cita</h2>
                <form id="cancelar-cita-form" class="cita-form">
                    <div class="form-group">
                        <label for="numero-cita" class="form-label">Número de Cita:</label>
                        <input type="text" id="numero-cita-cancelar" name="numero-cita" class="form-input" required>
                        <button type="button" id="buscar-cita-cancelar" class="form-button">Buscar Cita</button>
                    </div>
                </form>
                <div id="confirm-cancel-panel" class="hidden">
                    <p>¿Estás seguro de que deseas cancelar esta cita?</p>
                    <button type="button" id="confirmar-cancelacion" class="form-button">Sí</button>
                    <button type="button" id="cancelar-cancelacion" class="form-button">No</button>
                </div>
            </section>
        `;
    }
}
