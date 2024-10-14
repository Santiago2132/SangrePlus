import IndexTemplate from "../template/IndexTemplate.js";

export default class IndexView {
    private selector: HTMLDivElement;
    private selectorName = 'main'; // El ID donde se va a inyectar el contenido
    private template: typeof IndexTemplate; // Referencia al template

    constructor(template: typeof IndexTemplate){
        this.selector = document.createElement('div');
        this.template = template;
    }

    // Método para inicializar la vista
    public init = async (): Promise<void> => {
        // Asegurarse de que el DOM está listo antes de renderizar
        this.selector = document.getElementById(this.selectorName) as HTMLDivElement;

        // Añadimos un pequeño retraso para asegurarnos que todo esté cargado
        setTimeout(() => {
            this.render();
        }, 100); // 100 ms de retraso
    }

    // Método para renderizar el contenido en el selector
    public render = (): void => {
        // Limpiar cualquier contenido previo
        this.selector.innerHTML = '';
        
        // Inyectar el HTML generado por el template directamente en el selector
        this.selector.innerHTML = this.template.getHTML();

        // Si tienes más lógica para cargar datos o tareas, puedes llamarla aquí
        this.loadTareas();  // Ejemplo, cargamos las tareas en la vista
    }

    // Este método es solo un placeholder para representar carga de tareas
    private loadTareas = (): void => {
        console.log('Tareas cargadas');
        // Aquí podrías cargar dinámicamente tareas en tu tabla si fuera necesario
    }
}
