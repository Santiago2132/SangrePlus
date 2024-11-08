// src/nuevaCita/model/nuevaCitaModel.ts
export default class NuevaCitaModel {
    // Método para generar un ID único
    static generarIdCita() {
        return Math.floor(Math.random() * 1000); // Genera un ID aleatorio
    }
    // Método para procesar la cita
    async procesarCita(citaData) {
        // Verificamos los datos recibidos
        console.log("Datos recibidos para procesar la cita:", citaData);
        // Creamos el cliente
        const clienteDePrueba = {
            id: citaData['id'] ? parseInt(citaData['id']) : 0, // Asignamos ID o 0 si no está disponible
            nombre: citaData['nombre'] ?? 'No proporcionado', // Si no se proporciona, usamos 'No proporcionado'
            apellido: citaData['apellido'] ?? 'No proporcionado', // Igual para apellido
            edad: citaData['edad'] ? parseInt(citaData['edad']) : 0, // Edad proporcionada o 0
            historial: 0, //  0
            tipo: citaData['tipo'] ?? 'no premium', // Tipo por defecto 'Regular' si no se proporciona
        };
        // Imprimimos el cliente para verificar que está armado correctamente
        console.log("Cliente creado:", clienteDePrueba);
        // Ahora creamos la cita
        const citaDePrueba = {
            id: NuevaCitaModel.generarIdCita(), // Generamos un ID único para la cita
            tipocita: citaData['tipoCita'] ?? 'Consulta General', // Tipo de cita o por defecto 'Consulta General'
            fecha: new Date(citaData['fecha'] ?? new Date().toISOString()), // Fecha proporcionada o la fecha actual
            hora: citaData['hora'] ?? '09:00', // Hora proporcionada o por defecto '09:00'
            descripcion: citaData['descripcion'] ?? 'No especificada', // Descripción proporcionada o por defecto
            cliente: clienteDePrueba, // Asociamos el cliente previamente creado
            lugar: citaData['lugar'] ?? 'No especificado', // Lugar de la cita
            estado: 'pendiente', // Estado por defecto 'Programada'
            observaciones: citaData['observaciones'] ?? 'Sin observaciones', // Observaciones si se proporcionan, si no, 'Sin observaciones'
        };
        // Imprimimos la cita para verificar que está correctamente procesada
        console.log("Cita procesada:", JSON.stringify(citaDePrueba, null, 2));
        const cita = await this.agregarNuevaCita(citaDePrueba);
        console.log(cita);
        // Retornamos el ID de la cita como string
        return citaDePrueba.id.toString();
    }
    // Método para actualizar una cita 
    async agregarNuevaCita(updatedCita) {
        const response = await fetch(`http://localhost:3000/parcial/citas/agregar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCita),
        });
        if (!response.ok) {
            console.log('error en el server');
        }
        const mensaje = await response.json();
        console.log(mensaje.data);
        return mensaje.data;
    }
}
