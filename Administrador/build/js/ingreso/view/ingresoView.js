export default class IngresoView {
    selector;
    selectorName = 'ingreso';
    template;
    constructor(template) {
        this.selector = document.createElement('div');
        this.template = template;
    }
    init() {
        this.selector = document.getElementById(this.selectorName);
        this.render();
    }
    render = () => {
        console.log("Formulario de ingreso renderizado");
        this.selector.innerHTML = '';
        this.selector.innerHTML = `${this.template.getHTML()}`;
        // Inicia la funcionalidad del toggle de contraseña
        this.template.initPasswordToggle();
    };
    // Nuevo método para borrar el contenido de los campos input
    clearInputs = () => {
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        if (usernameInput)
            usernameInput.value = ''; // Borra el contenido del campo de usuario
        if (passwordInput)
            passwordInput.value = ''; // Borra el contenido del campo de contraseña
    };
}
