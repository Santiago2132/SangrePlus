export default class AdminMenuView {
    private selector: HTMLDivElement;
    private selectorName = 'admin';
    private onCitasAsistidasClick: () => void;
    private onCitasNoAsistidasClick: () => void;

    constructor(onCitasAsistidasClick: () => void, onCitasNoAsistidasClick: () => void) {
        this.onCitasAsistidasClick = onCitasAsistidasClick;
        this.onCitasNoAsistidasClick = onCitasNoAsistidasClick;
        this.selector = document.getElementById(this.selectorName) as HTMLDivElement;
    }

    public init() {
        this.render();
        this.setupEventListeners();
    }

    private setupEventListeners(): void {
        // Botón para mostrar citas asistidas
        const citasAsistidasButton = document.getElementById('boton1') as HTMLButtonElement;
        if (citasAsistidasButton) {
            citasAsistidasButton.addEventListener('click', () => {
                this.onCitasAsistidasClick();
                this.toggleVisibility("asistidas", "nasistidas"); // Mostrar asistidas y ocultar no asistidas
            });
        }

        // Botón para mostrar citas no asistidas (Reportes)
        const reportesButton = document.getElementById('boton2') as HTMLButtonElement;
        if (reportesButton) {
            reportesButton.addEventListener('click', () => {
                this.onCitasNoAsistidasClick();
                this.toggleVisibility("nasistidas", "asistidas"); // Mostrar no asistidas y ocultar asistidas
            });
        }

        // Puedes agregar un manejador para el botón "Configuración" si es necesario
        const configuracionButton = document.getElementById('boton3') as HTMLButtonElement;
        if (configuracionButton) {
            configuracionButton.addEventListener('click', () => {
                console.log("Configuración clickeada");
                // Lógica para configuración
            });
        }
    }

    private toggleVisibility(showId: string, hideId: string): void {
        const showElement = document.getElementById(showId);
        const hideElement = document.getElementById(hideId);

        if (showElement) showElement.style.display = "block";
        if (hideElement) hideElement.style.display = "none";
    }

    public render = (): void => {
        console.log("Mostrando el menú admin");
        this.selector.style.display = "block"; // Cambia el display a block para mostrar el menú admin
    }

    public destroy(): void {
        console.log("Ocultando el menú admin");
        this.selector.style.display = "none"; // Cambia el display a none para ocultar
    }
}
