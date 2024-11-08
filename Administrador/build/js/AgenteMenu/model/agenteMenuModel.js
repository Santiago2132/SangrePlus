export default class AgenteMenuModel {
    turnosData;
    citasData;
    clientesData;
    constructor() {
        this.turnosData = [
            { id_turno: 1, turno: "T123", modulo: "Módulo A", numero: 1, cita_id: 101 },
            { id_turno: 2, turno: "T124", modulo: "Módulo B", numero: 2, cita_id: 102 }
        ];
        this.citasData = [
            { id: 101, tipocita: "consulta", cliente_id: 1, fecha: "2024-11-10", hora: "09:00", descripcion: "Consulta general", lugar: "Sala 1", estado: "pendiente", observaciones: "Revisión inicial" },
            { id: 102, tipocita: "revisión", cliente_id: 2, fecha: "2024-11-11", hora: "10:30", descripcion: "Revisión mensual", lugar: "Sala 2", estado: "pendiente", observaciones: "Chequeo rutinario" }
        ];
        this.clientesData = [
            { id: 1, nombre: "Juan", apellido: "Pérez", edad: 30, tipo: "premium", historial: 5 },
            { id: 2, nombre: "Ana", apellido: "Gómez", edad: 40, tipo: "no premium", historial: 3 }
        ];
    }
    async getTurnosConCitas() {
        // // Ordenar turnosData según el valor de `numero`
        // const turnosOrdenados = [...this.turnosData].sort((a, b) => a.numero - b.numero);
        // return turnosOrdenados.map(turno => {
        //     const cita = this.citasData.find(c => c.id === turno.cita_id);
        //     const cliente = cita ? this.clientesData.find(cl => cl.id === cita.cliente_id) : null;
        //     return {
        //         ...turno,
        //         cita: cita ? {
        //             ...cita,
        //             cliente: cliente ? { nombre: cliente.nombre, apellido: cliente.apellido } : null
        //         } : null
        //     };
        // });
        return await this.getTurnos();
    }
    async setTurnosConCitas(nuevoOrden) {
        // Actualizar `numero` de cada turno para reflejar el nuevo orden
        nuevoOrden.forEach((turno, index) => {
            const turnoOriginal = this.turnosData.find(t => t.id_turno === turno.id_turno);
            if (turnoOriginal) {
                turnoOriginal.numero = index + 1; // Asignar el nuevo `numero` según el orden actual
            }
        });
        console.log("Turnos actualizados en el modelo:", this.turnosData); // Log para confirmar los cambios en el modelo
        await this.updateOrder(this.turnosData);
    }
    async eliminarTurno(id_turno) {
        console.log("ID del turno a eliminar:", id_turno); // Confirmación del ID recibido
        this.turnosData = this.turnosData.filter(turno => turno.id_turno !== id_turno);
        console.log("Turnos después de la eliminación:", this.turnosData); // Confirmación del estado de turnosData
        await this.eliminarTurnoo(id_turno);
    }
    async updateOrder(turnos) {
        // Hacer la solicitud POST a la API para modificar los turnos
        const response = await fetch(`http://localhost:3000/parcial/turnos/modificar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ turnos }), // Pasar el array 'turnos' como cuerpo en formato JSON
        });
        if (!response.ok) {
            console.log('error en el server');
        }
        const mensaje = await response.json();
        console.log(mensaje.data);
        return mensaje.data;
    }
    async getTurnos() {
        const response = await fetch(`http://localhost:3000/parcial/turnos/turno`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            console.log('error en el server');
        }
        const mensaje = await response.json();
        console.log(mensaje.data);
        return mensaje.data;
    }
    async getTurnoCita(id) {
        const response = await fetch(`http://localhost:3000/parcial/turnos/turnoCita/?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            console.log('error en el server');
        }
        const mensaje = await response.json();
        console.log(mensaje.data);
        return mensaje.data;
    }
    async eliminarTurnoo(id) {
        const response = await fetch(`http://localhost:3000/parcial/turnos/eliminar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id }),
        });
        if (!response.ok) {
            console.log('error en el server');
        }
        const mensaje = await response.json();
        console.log(mensaje.data);
        return mensaje.data;
    }
}
