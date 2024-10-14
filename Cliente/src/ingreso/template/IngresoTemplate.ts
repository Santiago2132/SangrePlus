export default class IngresoTemplate {
    public static render = (): HTMLDivElement => {
        const container = document.createElement('div');

        // Crear el formulario con método POST
        container.innerHTML = `
            <div class="form-container">
                <h2>Ingreso de Cliente</h2>
                <form action="/ingreso" method="POST">
                    <label for="cedula">Cédula:</label>
                    <input type="text" id="cedula" name="cedula" required placeholder="Ingrese su cédula" pattern="\\d+" minlength="8" maxlength="10">
                    <button type="submit">Ingresar</button>
                </form>
            </div>
        `;

        return container;
    }
}
