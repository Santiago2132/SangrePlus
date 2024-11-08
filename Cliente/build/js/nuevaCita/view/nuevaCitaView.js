export default class NuevaCitaView {
    selector;
    selectorName = 'nueva';
    template;
    onSubmitCallback;
    constructor(template, onSubmitCallback) {
        this.selector = document.createElement('div');
        this.template = template;
        this.onSubmitCallback = onSubmitCallback;
    }
    init = async () => {
        this.selector = document.getElementById(this.selectorName);
        if (!this.selector) {
            console.error(`No se encontró el contenedor con id ${this.selectorName}`);
            return;
        }
        setTimeout(() => {
            this.render();
        }, 100);
    };
    render = () => {
        if (!this.selector)
            return;
        this.selector.innerHTML = this.template.getHTML();
        const form = document.getElementById('form-nueva-cita');
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
        else {
            console.error("Formulario 'form-nueva-cita' no encontrado en el template.");
        }
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData);
        const citaData = {
            nombre: formData.get('nombres'),
            apellido: formData.get('apellidos'),
            edad: formData.get('edad'),
            id: formData.get('identificacion'),
            tipoIdentificacion: formData.get('tipo-identificacion'),
            descripcion: formData.get('descripcion'),
            tipoCita: formData.get('tipo-cita'),
            fecha: formData.get('fecha'),
            hora: formData.get('hora'),
            lugar: formData.get('lugar'),
        };
        if (Object.values(citaData).some((value) => !value)) {
            this.template.showError("Por favor, completa todos los campos.");
        }
        else {
            this.template.hideError();
            this.onSubmitCallback(citaData);
        }
    };
    showCitaId = (citaId) => {
        const citaIdContainer = document.getElementById('div-cita-id-container');
        if (citaIdContainer) {
            citaIdContainer.textContent = `ID de la cita: ${citaId}`;
        }
    };
    clearForm = () => {
        const form = document.getElementById('form-nueva-cita');
        form.reset();
    };
    showError(message) {
        alert(message);
    }
}
