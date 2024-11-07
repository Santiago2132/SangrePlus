export default class cAsistidasTemplate {
    constructor() {
        console.log('cAsistidasTemplate constructor');
    }

    public getHTML = (citas: any[]): string => {
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
                    <tbody id="turnos-body">
                        ${citas.map(cita => `
                            <tr>
                                <td>${cita.cita_num}</td>
                                <td>${cita.cita?.tipocita}</td>
                                <td>${cita.cita?.cliente?.nombre} ${cita.cita?.cliente?.apellido}</td>
                                <td>${cita.cita?.fecha} ${cita.cita?.hora}</td>
                                <td>${cita.cita?.lugar}</td>
                                <td>${cita.cita?.estado}</td>
                                <td>${cita.cita?.observaciones}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    };
}
