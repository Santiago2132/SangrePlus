export default class AgenteMenuTemplate {
    constructor() {
        console.log('AgenteMenuTemplate constructor');
    }

    // Método para obtener solo la estructura de la tabla sin el tbody dinámico
    public getTableHeaderHTML = (): string => {
        return `
            <div class="agente-container">
                <div class="agente-content">
                    <h2>Bienvenido al área de agente</h2>
                    <p>A continuación, puedes gestionar tus turnos. Selecciona una opción del menú para comenzar.</p>
                    
                    <!-- Tabla de turnos -->
                    <table class="turnos-table">
                        <thead>
                            <tr>
                                <th>Orden de Turnoss</th>
                                <th>ID Turno</th>
                                <th>ID Cita</th>
                                <th>Hora</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody id="turnos-tbody">
                            <!-- Aquí se renderizarán las filas dinámicamente -->
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }
}
