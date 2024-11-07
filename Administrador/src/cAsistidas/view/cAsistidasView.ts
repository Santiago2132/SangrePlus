import cAsistidasTemplate from "../template/cAsistidasTemplate.js";

export default class cAsistidasView {
    private selector: HTMLDivElement = document.createElement('div');  // Valor por defecto
    private template: cAsistidasTemplate;
    private selectorName = 'asistidas';  // Este es el id correcto del contenedor

    constructor(template: cAsistidasTemplate) {
        this.template = template;
    }

    public init(citas: any[]): void {
        // Primero, asegurar que el contenedor existe en el DOM
        this.selector = document.createElement('div');
        this.selector.id = this.selectorName;  // Asegurarse de que tiene el id correcto
        document.body.appendChild(this.selector);  // Agregarlo al DOM (puedes elegir otro lugar si lo prefieres)
    
        // Ahora que el contenedor está en el DOM, renderizamos las citas
        this.render(citas);
    }
    

    public render(citas: any[]): void {
        console.log("Renderizando citas asistidas", citas);  // Log para ver si las citas llegan correctamente
        if (!citas.length) {
            this.selector.innerHTML = '<p>No se encontraron citas asistidas.</p>';
            return;
        }
        this.selector.innerHTML = '';  // Limpiar el contenido actual
    
        // Ahora, el contenido se inserta en el contenedor correcto
        this.selector.innerHTML = this.template.getHTML(citas);  // Pasar citas a la plantilla
    }
    

    public destroy(): void {
        const existingAsistidas = document.getElementById('menu-admin');
        if (existingAsistidas) existingAsistidas.remove();  // Limpiar vista si es necesario
    }
}
