export default class IndexView {
    selector;
    selectorName = 'main'; // El ID donde se va a inyectar el contenido
    template; // Referencia al template
    constructor(template) {
        this.selector = document.createElement('div');
        this.template = template;
    }
    // Método para inicializar la vista
    init = async () => {
        // Asegurarse de que el DOM está listo antes de renderizar
        this.selector = document.getElementById(this.selectorName);
        // Añadimos un pequeño retraso para asegurarnos que todo esté cargado
        setTimeout(() => {
            this.render();
        }, 100); // 100 ms de retraso
    };
    // Método para renderizar el contenido en el selector
    render = () => {
        // Limpiar cualquier contenido previo
        this.selector.innerHTML = '';
        // Inyectar el HTML generado por el template directamente en el selector
        this.selector.innerHTML = this.template.getHTML();
        // Si tienes más lógica para cargar datos o tareas, puedes llamarla aquí
        this.loadTareas(); // Ejemplo, cargamos las tareas en la vista
    };
    // Este método es solo un placeholder para representar carga de tareas
    loadTareas = () => {
        console.log('Tareas cargadas');
        // Aquí podrías cargar dinámicamente tareas en tu tabla si fuera necesario
    };
}
