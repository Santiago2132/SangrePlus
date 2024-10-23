export default class CambiarCitaView {
    selector;
    selectorName = 'cambiar';
    template;
    constructor(template) {
        this.selector = document.createElement('div');
        this.template = template;
    }
    init = async () => {
        this.selector = document.getElementById(this.selectorName);
        setTimeout(() => {
            this.render();
        }, 100);
    };
    render = () => {
        // Limpiar cualquier contenido previo
        this.selector.innerHTML = '';
        // Inyectar el HTML generado por el template directamente en el selector
        this.selector.innerHTML = this.template.getHTML();
    };
}
