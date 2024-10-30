export default class AdminMenuTemplate {
    constructor() {
        console.log('AdminMenuTemplate constructor');
    }
    getHTML = () => {
        return `
            <div class="admin-container">
                <div class="admin-sidebar">
                    <button class="admin-button">Citas Asistidas</button>
                    <button class="admin-button">Reportes</button>
                    <button class="admin-button">Configuración</button>
                </div>
                <div class="admin-content">
                    <p>Bienvenido al área de administración. Selecciona una opción del menú para comenzar.</p>
                </div>
            </div>
        `;
    };
}
