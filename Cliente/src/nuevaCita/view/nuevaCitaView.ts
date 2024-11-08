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
        if (!this.selector) {
            console.error(`No se encontró el contenedor con id ${this.selectorName}`);
            return;
        }

        setTimeout(() => {
            this.render();
        }, 100);
    }

    public render = (): void => {
        if (!this.selector) return;
        this.selector.innerHTML = this.template.getHTML();
        const form = document.getElementById('form-nueva-cita') as HTMLFormElement;

        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        } else {
            console.error("Formulario 'form-nueva-cita' no encontrado en el template.");
        }
    }

    private handleSubmit = (e: Event): void => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        console.log(formData)
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

        if (Object.values(citaData).some((value) => !value)) {
            this.template.showError("Por favor, completa todos los campos.");
        } else {
            this.template.hideError();
            this.onSubmitCallback(citaData);
        }
    }

    public showCitaId = (citaId: string): void => {
        const citaIdContainer = document.getElementById('div-cita-id-container');
        if (citaIdContainer) {
            citaIdContainer.textContent = `ID de la cita: ${citaId}`;
        }
    }

    public clearForm = (): void => {
        const form = document.getElementById('form-nueva-cita') as HTMLFormElement;
        form.reset();
    }

    public showError(message: string): void {
        alert(message);
    }
}
