export default class cNoAsistidasTemplate {
    constructor() {
        console.log('NoAsistidasTemplate constructor');
    }
    getHTML(citas) {
        // Simplificamos el HTML y lo organizamos para que sea fácil de leer
        return `
            <div class="container">
                <h2>Turnos Asistidos</h2>
                <table class="turnos-table">
                    <thead>
                        <tr>
                            <th>Número de Cita</th>
                            <th>Tipo de Cita</th>
                            <th>Cliente</th>
                            <th>Fecha y Hora</th>
                            <th>Lugar</th>
                            <th>Estado</th>
                            <th>Observaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${citas.map(cita => `
                            <tr>
                                <td>${cita.cita_num}</td>
                                <td>${cita.cita?.tipocita ?? 'N/A'}</td>
                                <td>${cita.cita?.cliente?.nombre ?? 'N/A'} ${cita.cita?.cliente?.apellido ?? 'N/A'}</td>
                                <td>${cita.cita?.fecha ?? 'N/A'} ${cita.cita?.hora ?? 'N/A'}</td>
                                <td>${cita.cita?.lugar ?? 'N/A'}</td>
                                <td>${cita.cita?.estado ?? 'N/A'}</td>
                                <td>${cita.cita?.observaciones ?? 'N/A'}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
}
