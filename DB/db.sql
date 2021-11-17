CREATE DATABASE chambita;
CREATE TABLE trabajadores (
    trabajador_id bigserial primary key not null,
    nombre varchar not null,
    apellidos varchar(100) not null,
    DNI int not null unique,
    telefono int unique not null,
    valoracion numeric default 4 not null check (valoracion >= 1 and valoracion <=5),
    descripcion text not null,
    profesiones varchar[] not null,
    image varchar(500) null
);


CREATE TABLE profesiones (
    profesion_id bigserial primary key not null,
    profesion varchar (200) not null,
    counter int not null  default 1
);

CREATE TABLE admin (
    admin_id bigserial primary key not null,
    admin_email varchar (200) not null unique,
    admin_password varchar (200) not null
);

CREATE TABLE Users (
    user_id bigserial primary key not null,
    user_nombre varchar(100) not null,
    user_apellido varchar(100) not null,
    user_correo varchar(100) unique not null,
    user_password varchar(100) not null,
    user_celular int not null
);

CREATE TABLE Reviews(
    review_id BIGSERIAL NOT NULL PRIMARY KEY,
    trabajador_id BIGINT NOT NULL REFERENCES trabajadores(trabajador_id),
    user_id BIGINT not null REFERENCES users(user_id),
    review text NOT NULL,
    review_rating INT NOT NULL check(review_rating >=1 and review_rating <= 5)
);



INSERT INTO trabajadores (nombre, apellidos, DNI, telefono, descripcion) VALUES ('Renato', 'Garcia', 06051473, 922469632, 'Hola soy el primer trabajador prueba de este proyecto');

INSERT INTO profesiones (profesion) VALUES ("electricista"); 

INSERT INTO trabajadores (nombre, apellidos, DNI, telefono, descripcion, profesiones) VALUES ('Renato', 'Jimenez', 06050872, 932269631, 'Hola soy el segundo trabajador prueba de este proyecto',ARRAY ['jardinero','carpintero']);
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

INSERT INTO users(user_usuario,user_nombre,user_apellido,user_correo,user_password,user_celular) VALUES ('mateo0203','Mateo','Rodriguez','mateo@gmail.com','mateorg03','941461510');

INSERT INTO reviews ( trabajador_id,user_nombre,user_apellido,user_usuario,review,review_rating) VALUES (3,'Mateo','Rodriguez','Mateorg03','Confianza al 100%',5);

INSERT INTO reviews ( trabajador_id,user_id,review,review_rating) VALUES (3,1,'Confianza al 100%',5);

SELECT Users.user_nombre, Users.user_apellido, Users.user_usuario, Reviews.review, Reviews.review_rating from Reviews INNER JOIN Users ON Users.user_id = Reviews.user_id;

SELECT Users.user_nombre,Users.user_apellido,Users.user_usuario,Reviews.review,Reviews.review_rating from Reviews inner join Users on Users.user_id = Reviews.user_id where Trabajador_id = 3;