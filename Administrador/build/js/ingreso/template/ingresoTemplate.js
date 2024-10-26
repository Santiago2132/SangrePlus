export default class IngresoTemplate {
    constructor() {
        console.log('IngresoTemplate constructor');
    }
    getHTML = () => {
        return `
            <form id="ingreso-form">
                <div class="form-group">
                    <label for="username">Usuario:</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="password">Contraseña:</label>
                    <div class="password-wrapper">
                        <input type="password" id="password" name="password" required>
                        <button type="button" id="toggle-password">👁️</button>
                    </div>
                </div>
                <div class="form-group">
                    <button type="submit">Ingresar</button>
                </div>
            </form>
        `;
    };
    initPasswordToggle = () => {
        const toggleButton = document.getElementById('toggle-password');
        const passwordInput = document.getElementById('password');
        toggleButton.addEventListener('click', () => {
            const type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;
            toggleButton.textContent = type === 'password' ? '👁️' : '🙈';
        });
    };
}
