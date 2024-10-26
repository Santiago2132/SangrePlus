import fs from 'fs';
import path from 'path';
export default class NuevaCitaModel {
    citas = [];
    // Ruta del archivo donde se guardarán las citas
    static filePath = path.join(__dirname, 'citas.json');
    constructor() {
        console.log('constructor de NuevaCitaModel');
        this.cargarCitasDesdeArchivo(); // Cargar citas existentes al iniciar el modelo
    }
    // Método para agregar una nueva cita
    agregarCita(nuevaCita) {
        this.citas.push(nuevaCita);
        console.log('Cita agregada:', nuevaCita);
        this.guardarCitasEnArchivo(); // Guardar citas en archivo después de agregar una nueva
    }
    // Método para obtener todas las citas
    obtenerCitas() {
        return this.citas;
    }
    // Método para guardar las citas en un archivo JSON
    guardarCitasEnArchivo() {
        const jsonData = JSON.stringify(this.citas, null, 2); // Convertir las citas a formato JSON
        fs.writeFileSync(NuevaCitaModel.filePath, jsonData, { flag: 'w' }); // Escribir en el archivo (reemplazando si existe)
        console.log(`Citas guardadas en ${NuevaCitaModel.filePath}`);
    }
    // Método para cargar citas desde un archivo JSON
    cargarCitasDesdeArchivo() {
        if (fs.existsSync(NuevaCitaModel.filePath)) {
            const jsonData = fs.readFileSync(NuevaCitaModel.filePath, 'utf-8');
            this.citas = JSON.parse(jsonData);
            console.log(`Citas cargadas desde ${NuevaCitaModel.filePath}`);
        }
        else {
            console.log(`El archivo ${NuevaCitaModel.filePath} no existe. Se creará uno nuevo al agregar citas.`);
        }
    }
}
