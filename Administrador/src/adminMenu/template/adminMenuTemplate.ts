export default class AdminMenuTemplate {
    constructor() {
        console.log('AdminMenuTemplate constructor');
    }

    public getHTML = (): string => {
        return `
            <p>Bienvenido al área de administración. Selecciona una opción del menú para comenzar.</p>
            <div class="admin-container">
                <div class="admin-sidebar">
                    <button class="admin-button">Citas Asistidas</button>
                    <button class="admin-button">Reportes</button>
                    <button class="admin-button">Configuración</button>
                </div>
                <div class="admin-content">
                    <prueba id="prueba"></prueba>
                    <div id="asistidas"></div>
                    <nasistidas id="nasistidas"></nasistidas>
                </div>
            </div>
        `;
    }
}
