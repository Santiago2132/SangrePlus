-- Creación de la tabla "usuario"
CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    tipo VARCHAR(10) CHECK (tipo IN ('admin', 'agente')) NOT NULL
);

-- Creación de la tabla "cliente"
CREATE TABLE cliente (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    edad INTEGER NOT NULL,
    tipo VARCHAR(10) CHECK (tipo IN ('premium', 'no premium')) NOT NULL,
    historial INTEGER NOT NULL
);

-- Creación de la tabla "turno"
CREATE TABLE turno (
    id_turno SERIAL PRIMARY KEY,
    turno VARCHAR(255) NOT NULL,
    modulo VARCHAR(255) NOT NULL,
    numero INTEGER NOT NULL,
    cita_id INTEGER REFERENCES cita(id) ON DELETE SET NULL
);

-- Creación de la tabla "cita"
CREATE TABLE cita (
    id SERIAL PRIMARY KEY,
    tipocita VARCHAR(255) NOT NULL,
    cliente_id INTEGER REFERENCES cliente(id) ON DELETE SET NULL,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    descripcion TEXT NOT NULL,
    lugar VARCHAR(255) NOT NULL,
    estado VARCHAR(255) CHECK (estado IN ('pendiente', 'atendida', 'cancelada')) NOT NULL,
    observaciones TEXT
);
