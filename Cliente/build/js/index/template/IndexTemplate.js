export default class IndexTemplate {
    constructor() {
    }
    // Método que retorna el HTML como un string
    getHTML = () => {
        return `
             <div class="container">
                <h1>Bienvenidos a Sangre Plus</h1>
                <p>Tu laboratorio de confianza para análisis de sangre y resultados rápidos.</p>
            </div>
        `;
    };
}
