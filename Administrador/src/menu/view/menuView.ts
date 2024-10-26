export default class menuView {
    constructor(){
    }
    public init(): void {
        // Configura los eventos de los botones al inicializar la vista
        this.onIngresoClick(() => this.renderMain('ingreso'));
        this.onCancelarClick(() => this.renderMain('cancelar'));

        this.renderMain('ingreso');
      }
    
      private getButtonById(buttonId: string): HTMLButtonElement | null {
        return document.getElementById(buttonId) as HTMLButtonElement;
      }

      public onIngresoClick(callback: () => void): void {
        console.log("Se hizo un boton Inicio")
        const button = this.getButtonById('ingreso-btn');
        if (button) button.addEventListener('click', callback);
      }
    
    
      public onCancelarClick(callback: () => void): void {
        console.log("Se hizo un boton Cancelar")
        const button = this.getButtonById('cerrar-btn');
        if (button) button.addEventListener('click', callback);
      }
    
      public renderMain(component: string): void {
        // Selecciona todos los elementos hijos de main
        const sections = document.querySelectorAll('main > div, main > ingreso, main > cancelar');
        sections.forEach((section) => {
            (section as HTMLElement).style.display = 'none';
        });
    
        // Muestra solo el componente seleccionado
        const selectedComponent = document.querySelector(component === 'ingreso' ? '#main' : component);
        if (selectedComponent) {
            (selectedComponent as HTMLElement).style.display = 'block';
        }
    }
    
    
    
}
