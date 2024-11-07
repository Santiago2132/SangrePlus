export default class AdminMenuView {
    selector;
    selectorName = 'admin';
    onCitasAsistidasClick;
    onCitasNoAsistidasClick;
    constructor(onCitasAsistidasClick, onCitasNoAsistidasClick) {
        this.onCitasAsistidasClick = onCitasAsistidasClick;
        this.onCitasNoAsistidasClick = onCitasNoAsistidasClick;
        this.selector = document.getElementById(this.selectorName);
    }
    init() {
        this.render();
        this.setupEventListeners();
    }
    setupEventListeners() {
        // Botón para mostrar citas asistidas
        const citasAsistidasButton = document.getElementById('boton1');
        if (citasAsistidasButton) {
            citasAsistidasButton.addEventListener('click', () => {
                this.onCitasAsistidasClick();
                this.toggleVisibility("asistidas", "nasistidas"); // Mostrar asistidas y ocultar no asistidas
            });
        }
        // Botón para mostrar citas no asistidas (Reportes)
        const reportesButton = document.getElementById('boton2');
        if (reportesButton) {
            reportesButton.addEventListener('click', () => {
                this.onCitasNoAsistidasClick();
                this.toggleVisibility("nasistidas", "asistidas"); // Mostrar no asistidas y ocultar asistidas
            });
        }
        // Puedes agregar un manejador para el botón "Configuración" si es necesario
        const configuracionButton = document.getElementById('boton3');
        if (configuracionButton) {
            configuracionButton.addEventListener('click', () => {
                console.log("Configuración clickeada");
                // Lógica para configuración
            });
        }
    }
    toggleVisibility(showId, hideId) {
        const showElement = document.getElementById(showId);
        const hideElement = document.getElementById(hideId);
        if (showElement)
            showElement.style.display = "block";
        if (hideElement)
            hideElement.style.display = "none";
    }
    render = () => {
        console.log("Mostrando el menú admin");
        this.selector.style.display = "block"; // Cambia el display a block para mostrar el menú admin
    };
    destroy() {
        console.log("Ocultando el menú admin");
        this.selector.style.display = "none"; // Cambia el display a none para ocultar
    }
}
