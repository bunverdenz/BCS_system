use theater;
DROP TABLE IF EXISTS tickets;
DROP TABLE IF EXISTS shows;
DROP TABLE IF EXISTS seats;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS halls;
DROP TABLE IF EXISTS ticket_type;

CREATE TABLE users (
    user_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

#DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
    movie_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    movie_title VARCHAR(255) NOT NULL,
    director VARCHAR(255) NOT NULL,
    duration INTEGER
);

#DROP TABLE IF EXISTS halls;
CREATE TABLE halls (
	hall_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(255) NOT NULL
);

#DROP TABLE IF EXISTS shows;
CREATE TABLE shows (
    show_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    movie_id INTEGER NOT NULL,
    hall_id INTEGER NOT NULL,
    show_time DATETIME NOT NULL,
    FOREIGN KEY(movie_id) REFERENCES movies(movie_id),
    FOREIGN KEY(hall_id) REFERENCES halls(hall_id)
);


#DROP TABLE IF EXISTS seats;
CREATE TABLE seats(
	seat_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    seat_row INTEGER NOT NULL,
    seat_column VARCHAR(1) NOT NULL,
    hall_id INTEGER NOT NULL,
    FOREIGN KEY(hall_id) REFERENCES halls(hall_id)
);

#DROP TABLE IF EXISTS ticket_type;
CREATE TABLE ticket_type(
	type_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    type_demo VARCHAR(1) NOT NULL,
    price INTEGER
);	


#DROP TABLE IF EXISTS tickets;
CREATE TABLE tickets(
	ticket_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    user_id INTEGER NOT NULL,
    type_id INTEGER NOT NULL,
    show_id INTEGER NOT NULL,
    seat_id INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(type_id) REFERENCES ticket_type(type_id),
    FOREIGN KEY(show_id) REFERENCES shows(show_id),
    FOREIGN KEY(seat_id) REFERENCES seats(seat_id)
);	

