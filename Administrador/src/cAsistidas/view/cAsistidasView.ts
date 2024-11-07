import cAsistidasTemplate from "../template/cAsistidasTemplate.js";

export default class cAsistidasView {
    private selector: HTMLDivElement;
    private template: cAsistidasTemplate;
    private selectorName = 'asistidas';  // Este es el id correcto del contenedor

    constructor(template: cAsistidasTemplate) {
        this.template = template;
        this.selector = document.createElement('div');  // Inicializar el contenedor
        this.selector.id = this.selectorName;  // Asegurarse de que tiene el id correcto
    }

    public init(citas: any[]): void {
        // Verificar si el contenedor ya existe en el DOM, si no lo agregamos
        let existingContainer = document.getElementById(this.selectorName);
        if (!existingContainer) {
            document.body.appendChild(this.selector);  // Si no existe, lo agregamos al DOM
        }
        
        // Llamar al render después de asegurar que el contenedor está en el DOM
        this.render(citas);
    }

    public render(citas: any[]): void {
        console.log("Renderizando citas asistidas", citas);  // Log para ver si las citas llegan correctamente
        if (!citas || citas.length === 0) {
            this.selector.innerHTML = '<p>No se encontraron citas asistidas.</p>';
            return;
        }
        this.selector.innerHTML = '';  // Limpiar el contenido actual

        // Asegurarse de que el contenedor existe en el DOM antes de insertar el contenido
        this.selector.innerHTML = this.template.getHTML(citas);  // Pasar citas a la plantilla
    }
}
