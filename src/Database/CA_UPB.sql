-- Crear la base de datos
CREATE DATABASE CAC_UPB;
USE CAC_UPB;

-- Tabla para almacenar los datos de los clientes
CREATE TABLE Clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    identificacion VARCHAR(20) NOT NULL UNIQUE,
    nombres VARCHAR(50),
    apellidos VARCHAR(50),
    direccion VARCHAR(100),
    fecha_nacimiento DATE,
    cliente_tipo ENUM('regular', 'premium', 'mayor') DEFAULT 'regular'
);

-- Tabla para almacenar las citas
CREATE TABLE Citas (
    id_cita INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    descripcion TEXT,
    tipo ENUM('reclamo', 'devolucion', 'accesoria'),
    fecha DATE,
    hora TIME,
    lugar VARCHAR(100),
    estado ENUM('programada', 'cancelada', 'no_asistida') DEFAULT 'programada',
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente) ON DELETE CASCADE
);

-- Tabla para almacenar los tickets
CREATE TABLE Tickets (
    id_ticket INT AUTO_INCREMENT PRIMARY KEY,
    id_cita INT,
    numero INT,
    fecha DATE,
    hora TIME,
    vencido BOOLEAN DEFAULT FALSE,
    prioridad BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (id_cita) REFERENCES Citas(id_cita) ON DELETE CASCADE
);

-- Tabla para almacenar la información de los agentes
CREATE TABLE Agentes (
    id_agente INT AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(50),
    apellidos VARCHAR(50),
    lugar VARCHAR(100)
);

-- Tabla para almacenar las anotaciones de los agentes
CREATE TABLE Anotaciones (
    id_anotacion INT AUTO_INCREMENT PRIMARY KEY,
    id_cita INT,
    id_agente INT,
    anotacion TEXT,
    fecha DATE,
    FOREIGN KEY (id_cita) REFERENCES Citas(id_cita),
    FOREIGN KEY (id_agente) REFERENCES Agentes(id_agente)
);
