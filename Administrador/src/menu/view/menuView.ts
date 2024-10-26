export default class MenuView {
  constructor() {}

  public init(): void {
      this.onIngresoClick(() => this.renderMain('ingreso'));
      this.onCancelarClick(() => this.renderMain('cancelar'));
      this.renderMain('ingreso');
  }

  private getButtonById(buttonId: string): HTMLButtonElement | null {
      return document.getElementById(buttonId) as HTMLButtonElement;
  }

  public onIngresoClick(callback: () => void): void {
      const button = this.getButtonById('ingreso-btn');
      if (button) button.addEventListener('click', callback);
  }

  public onCancelarClick(callback: () => void): void {
      const button = this.getButtonById('cerrar-btn');
      if (button) button.addEventListener('click', callback);
  }

  public renderMain(component: string): void {
      // Oculta todas las secciones
      const sections = document.querySelectorAll('main > div, main > ingreso, main > cancelar');
      sections.forEach((section) => {
          (section as HTMLElement).style.display = 'none';
      });

      // Muestra solo el componente seleccionado
      const selectedComponent = document.querySelector(`#${component}`);
      if (selectedComponent) {
          (selectedComponent as HTMLElement).style.display = 'block';
      }
  }
}
