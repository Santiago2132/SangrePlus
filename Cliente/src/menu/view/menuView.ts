export default class menuView {
    constructor(){

    }
    public init(): void {
        // Configura los eventos de los botones al inicializar la vista
        this.onInicioClick(() => this.renderMain('inicio'));
        this.onAgendarClick(() => this.renderMain('agendar'));
        this.onModificarClick(() => this.renderMain('modificar'));
        this.onCancelarClick(() => this.renderMain('cancelar'));

        this.renderMain('inicio');
      }
    
      private getButtonById(buttonId: string): HTMLButtonElement | null {
        return document.getElementById(buttonId) as HTMLButtonElement;
      }

      public onInicioClick(callback: () => void): void {
        const button = this.getButtonById('inicio');
        if (button) button.addEventListener('click', callback);
      }
    
    
      public onAgendarClick(callback: () => void): void {
        const button = this.getButtonById('nueva-cita');
        if (button) button.addEventListener('click', callback);
      }
    
      public onModificarClick(callback: () => void): void {
        const button = this.getButtonById('cambiar-cita');
        if (button) button.addEventListener('click', callback);
      }
    
      public onCancelarClick(callback: () => void): void {
        const button = this.getButtonById('cancelar-cita');
        if (button) button.addEventListener('click', callback);
      }

      public renderMain(component: string): void {
        // Oculta todos los componentes
        const sections = document.querySelectorAll('main > div, main > nueva, main > cambiar, main > cancelar');
        sections.forEach((section) => {
            (section as HTMLElement).style.display = 'none';
        });

        // Muestra solo el componente seleccionado
        const selectedComponent = document.querySelector(component === 'inicio' ? '#main' : component);
        if (selectedComponent) {
            (selectedComponent as HTMLElement).style.display = 'block';
        }
    }
    
}
