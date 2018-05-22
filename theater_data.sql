
#example data of users
INSERT INTO users(username, user_password, user_email)
VALUES ("chitipat", "1234","hello@gmail.com");
INSERT INTO users(username, user_password, user_email)
VALUES ("David", "2222","David@gmail.com");
INSERT INTO users(username, user_password, user_email)
VALUES ("Thomas", "1234","Thome@gmail.com");
INSERT INTO users(username, user_password, user_email)
VALUES ("Jane", "122","haha@gmail.com");

#example data for films
INSERT INTO movies(movie_title, director, duration)
VALUES("Jurassic World2", "Juan Antonio Bayona", 128);
INSERT INTO movies(movie_title, director, duration)
VALUES("Han Solo", "Ronald William", 135);
INSERT INTO movies(movie_title, director, duration)
VALUES("Deadpool 2", "David Leitch", 119);
INSERT INTO movies(movie_title, director, duration)
VALUES("Avenger 3", " Anthony Russo, Joe Russo", 150 );

#eaxample data for hall
INSERT INTO halls(location) VALUES("1st Floor(Left)");
INSERT INTO halls(location) VALUES("1st Floor(left)");
INSERT INTO halls(location) VALUES("1st Floor(right)");
INSERT INTO halls(location) VALUES("1st Floor(right)");
INSERT INTO halls(location) VALUES("2nd Floor(left)");
INSERT INTO halls(location) VALUES("2nd Floor(right)");

#seat values
#1st hall
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (1,"A",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (1,"B",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (1,"C",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (1,"D",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (1,"E",1, true);

INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (2,"A",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (2,"B",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (2,"C",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (2,"D",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (2,"E",1, true);

INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (3,"A",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (3,"B",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (3,"C",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (3,"D",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (3,"E",1, true);

INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (4,"A",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (4,"B",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (4,"C",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (4,"D",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (4,"E",1, true);

INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (5,"A",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (5,"B",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (5,"C",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (5,"D",1, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (5,"E",1, true);

#2 hall
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (1,"A",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (1,"B",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (1,"C",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (1,"D",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (1,"E",2, true);

INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (2,"A",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (2,"B",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (2,"C",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (2,"D",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (2,"E",2, true);

INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (3,"A",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (3,"B",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (3,"C",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (3,"D",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (3,"E",2, true);

INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (4,"A",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (4,"B",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (4,"C",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (4,"D",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (4,"E",2, true);

INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (5,"A",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (5,"B",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (5,"C",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (5,"D",2, true);
INSERT INTO seats (seat_row, seat_column, hall_id, seat_available)VALUES (5,"E",2, true);

#---only two hall we need to add more

#data for ticker type
INSERT INTO ticket_type( type_demo, price) VALUES ("Adult", 12000);
INSERT INTO ticket_type( type_demo, price) VALUES ("Child", 9000);
INSERT INTO ticket_type( type_demo, price) VALUES ("Student", 10000);


#example data for the show
INSERT INTO shows(movie_id, hall_id, show_time) VALUES (1,1, STR_TO_DATE("2018,5,20 10,30,00", "%Y,%m,%d %h,%i,%s"));
INSERT INTO shows(movie_id, hall_id, show_time) VALUES (2,2, STR_TO_DATE("2018,5,20 10,30,00", "%Y,%m,%d %h,%i,%s"));

#example data for the tickets
INSERT INTO tickets( user_id, type_id, show_id,seat_id) 
VALUES (1, 1, 1, 1);

