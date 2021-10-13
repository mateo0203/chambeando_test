CREATE DATABASE chambita;
CREATE TABLE trabajadores (
    trabajador_id bigserial primary key not null,
    nombre varchar not null,
    apellidos varchar(100) not null,
    DNI int not null unique,
    telefono int unique not null,
    valoracion numeric default 4 not null check (valoracion >= 1 and valoracion <=5),
    descripcion text not null,
    profesion varchar(200) not null,
    image varchar(500) null
);
CREATE TABLE profesiones (
    profesion_id bigserial primary key not null,
    profesion varchar (200) not null,
    counter int not null check ( counter >=1) default 1
);

CREATE TABLE admin (
    admin_id bigserial primary key not null,
    admin_email varchar (200) not null unique,
    admin_password varchar (200) not null
);

INSERT INTO trabajadores (nombre, apellidos, DNI, telefono, descripcion,profesion) VALUES ('Renato', 'Garcia', 06050473, 932469632, 'Hola soy el primer trabajador prueba de este proyecto' ,'electricista');
INSERT INTO trabajadores (nombre, apellidos, DNI, telefono, descripcion, profesion) VALUES ('Renato', 'Jimenez', 06050472, 932469631, 'Hola soy el segundo trabajador prueba de este proyecto','albañil');
INSERT INTO trabajadores (nombre, apellidos, DNI, telefono, descripcion, profesion) VALUES ('Renato', 'Villa', 06050471, 932469630, 'Hola soy el tercer trabajador prueba de este proyecto','carpintero');
INSERT INTO trabajadores (nombre, apellidos, DNI, telefono, descripcion, profesion) VALUES ('Renato', 'Juarez', 06050474, 932469633, 'Hola soy el cuarto trabajador prueba de este proyecto','carpintero');
INSERT INTO trabajadores (nombre, apellidos, DNI, telefono, descripcion, profesion) VALUES ('Renato', 'Vega', 06050475, 932469634, 'Hola soy el quinto trabajador prueba de este proyecto','gasfitero');
INSERT INTO trabajadores (nombre, apellidos, DNI, telefono, descripcion, profesion) VALUES ('Renato', 'Villanueva', 06050476, 932469635, 'Hola soy el sexto trabajador prueba de este proyecto','carpintero');
INSERT INTO trabajadores (nombre, apellidos, DNI, telefono, descripcion, profesion) VALUES ('Renato', 'Perez', 06050477, 932469636, 'Hola soy el septimo trabajador prueba de este proyecto','jardinero');
INSERT INTO trabajadores (nombre, apellidos, DNI, telefono, descripcion, profesion) VALUES ('Renato', 'Marquez', 06050478, 932469637, 'Hola soy el octavo trabajador prueba de este proyecto','albañil');
INSERT INTO trabajadores (nombre, apellidos, DNI, telefono, descripcion, profesion) VALUES ('Renato', 'Villanueva', 06050476, 932469635, 'Hola soy el sexto trabajador prueba de este proyecto','carpintero');


INSERT INTO profesiones (profesion, counter) VALUES ('electricista', 1);
INSERT INTO profesiones (profesion, counter) VALUES ('carpintero', 3);
INSERT INTO profesiones (profesion, counter) VALUES ('albañil', 2);
INSERT INTO profesiones (profesion, counter) VALUES ('jardinero', 1);
INSERT INTO profesiones (profesion, counter) VALUES ('gasfitero', 1);


INSERT INTO admin (admin_email, admin_password) VALUES ('prueba1@gmail.com', 'pepe');