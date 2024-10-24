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
                        <button type="submit" id="buscar-cita" class="form-button">Buscar Cita</button>
                    </div>
                </form>
            </section>
        `;
    }
}
