/*import mysql from 'mysql2/promise';


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'CAC_UPB'
});

// Función para loguear un cliente
export const loginCliente = async (identificacion: string) => {
    const [rows] = await pool.query('SELECT * FROM Clientes WHERE identificacion = ?', [identificacion]);
    return rows.length ? rows[0] : null;
};

// Función para agregar una cita
export const agregarCita = async (id_cliente: number, descripcion: string, tipo: string, fecha: string, hora: string, lugar: string) => {
    const result = await pool.query(`
        INSERT INTO Citas (id_cliente, descripcion, tipo, fecha, hora, lugar) 
        VALUES (?, ?, ?, ?, ?, ?)`,
        [id_cliente, descripcion, tipo, fecha, hora, lugar]
    );
    return result;
};

// Función para eliminar una cita
export const eliminarCita = async (id_cita: number) => {
    const result = await pool.query('DELETE FROM Citas WHERE id_cita = ?', [id_cita]);
    return result;
};

// Función para consultar citas de un cliente
export const consultarCitas = async (id_cliente: number) => {
    const [rows] = await pool.query('SELECT * FROM Citas WHERE id_cliente = ?', [id_cliente]);
    return rows;
};

// Función para modificar una cita
export const modificarCita = async (id_cita: number, descripcion: string, fecha: string, hora: string, lugar: string) => {
    const result = await pool.query(`
        UPDATE Citas SET descripcion = ?, fecha = ?, hora = ?, lugar = ? 
        WHERE id_cita = ?`,
        [descripcion, fecha, hora, lugar, id_cita]
    );
    return result;
};
*/