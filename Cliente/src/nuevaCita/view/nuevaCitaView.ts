import NuevaCitaTemplate from "../template/nuevaCitaTemplate.js";

export default class NuevaCitaView {
    private selector: HTMLDivElement;
    private selectorName = 'nueva';
    private template: NuevaCitaTemplate;
    private onSubmitCallback: (citaData: Record<string, string>) => void;

    constructor(template: NuevaCitaTemplate, onSubmitCallback: (citaData: Record<string, string>) => void) {
        this.selector = document.createElement('div');
        this.template = template;
        this.onSubmitCallback = onSubmitCallback;
    }

    public init = async (): Promise<void> => {
        this.selector = document.getElementById(this.selectorName) as HTMLDivElement;
        setTimeout(() => {
            this.render();
        }, 100);
    }

    public render = (): void => {
        this.selector.innerHTML = this.template.getHTML();
        const form = document.getElementById('nueva-cita-form') as HTMLFormElement;
        form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    private handleSubmit = (e: Event): void => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const citaData = {
            nombre: formData.get('nombres') as string,
            apellido: formData.get('apellidos') as string,
            edad: formData.get('edad') as string,
            id: formData.get('identificacion') as string,
            tipoIdentificacion: formData.get('tipo-identificacion') as string,
            descripcion: formData.get('descripcion') as string,
            tipoCita: formData.get('tipo-cita') as string,
            fecha: formData.get('fecha') as string,
            hora: formData.get('hora') as string,
            lugar: formData.get('lugar') as string,
        };

        // Validación
        if (Object.values(citaData).some((value) => !value)) {
            this.template.showError("Por favor, completa todos los campos.");
        } else {
            this.template.hideError();
            this.onSubmitCallback(citaData); // Llamar al callback con los datos de la cita
        }
    }

    // Mostrar el ID de la cita generado
    public showCitaId = (citaId: string): void => {
        const citaIdContainer = document.getElementById('cita-id-container');
        if (citaIdContainer) {
            citaIdContainer.textContent = `ID de la cita: ${citaId}`;
        }
    }

    // Limpiar el formulario
    public clearForm = (): void => {
        const form = document.getElementById('nueva-cita-form') as HTMLFormElement;
        form.reset();
    }
}
