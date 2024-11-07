export default class cNoAsistidasView {
    selector = null;
    template;
    constructor(template) {
        this.template = template;
        document.addEventListener('DOMContentLoaded', () => {
            this.selector = document.getElementById('nasistidas');
            if (!this.selector) {
                // Crear el contenedor en caso de que no exista y añadirlo al body
                this.selector = document.createElement('div');
                this.selector.id = 'asistidas';
                document.body.appendChild(this.selector);
            }
        });
    }
    render(citas) {
        console.log("Renderizando citas asistidas", citas);
        // Verificar nuevamente el contenedor antes de renderizar
        if (!this.selector) {
            console.error("El contenedor 'asistidas' no se encontró.");
            return;
        }
        // Si no hay citas, mostrar un mensaje
        if (!citas || citas.length === 0) {
            this.selector.innerHTML = '<p>No se encontraron citas asistidas.</p>';
            return;
        }
        // Generar el contenido HTML usando el template
        this.selector.innerHTML = this.template.getHTML(citas);
    }
}
