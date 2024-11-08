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
        setTimeout(() => {
            this.render();
        }, 100);
    };
    render = () => {
        this.selector.innerHTML = this.template.getHTML();
        const form = document.getElementById('nueva-cita-form');
        form.addEventListener('submit', (e) => this.handleSubmit(e));
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
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
        // Validación
        if (Object.values(citaData).some((value) => !value)) {
            this.template.showError("Por favor, completa todos los campos.");
        }
        else {
            this.template.hideError();
            this.onSubmitCallback(citaData); // Llamar al callback con los datos de la cita
        }
    };
}
