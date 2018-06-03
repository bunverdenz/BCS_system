
#example data of users
INSERT INTO users(username, user_password, user_email)
VALUES ("chitipat", "1234","hello@gmail.com");
INSERT INTO users(username, user_password, user_email)
VALUES ("David", "2222","David@gmail.com");
INSERT INTO users(username, user_password, user_email)
VALUES ("Thomas", "1234","Thome@gmail.com");
INSERT INTO users(username, user_password, user_email)
VALUES ("Jane", "122","haha@gmail.com");
INSERT INTO users (username, user_password, user_email) 
VALUES ('Sebastian_Schmitt6','67O2z7vvbVVU3vN','Kristofer.Treutel@yahoo.com');
INSERT INTO users (username, user_password, user_email) 
VALUES ('Evie8','POepsFvv8EUK94d','Sandrine.Fritsch99@hotmail.com');
INSERT INTO users (username, user_password, user_email) 
VALUES ('Jany67','dKohOR1UMgOfv0y','Florence46@yahoo.com');
INSERT INTO users (username, user_password, user_email) 
VALUES ('Eleazar_Morar31','HUHisOPEOWIwCxG','Michaela.Kutch16@yahoo.com');
INSERT INTO users (username, user_password, user_email) 
VALUES ('Norene_Morar','0DCtnt8ZoPrOdNb','Maya35@gmail.com');



#example data for films
INSERT INTO movies(movie_title, image_url, duration)
VALUES("Deadpool 2", 
		"https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/32/10ad7c9f30c159be3136122ec42a239e_300x442.jpg",
        119);
INSERT INTO movies(movie_title, image_url, duration)
VALUES("Avengers: Infinity War",
		"https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/d1/a61229ce074d7b3ccd13ee37dc85821d_300x442.jpg",
		149);
INSERT INTO movies(movie_title, image_url, duration)
VALUES("Black Panther",
		"https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/a8/f97be15d51b0b81e42e214a9b5d858e0_300x442.jpg",
        134);
INSERT INTO movies(movie_title, image_url, duration)
VALUES("The Greatest Showman",
		"https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/4b/f24a35e9bf4306ffd54a4e75e228586a_300x442.jpg",
        105);
INSERT INTO movies(movie_title, image_url, duration)
VALUES("Peter Rabbit",
		"https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/c0/8f35257aec34e35b86b840153f49b77e_300x442.jpg",
        94);



#eaxample data for hall
INSERT INTO halls(location) VALUES("1st Floor(Left)");
INSERT INTO halls(location) VALUES("1st Floor(right)");

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
INSERT INTO shows(movie_id, hall_id, show_time) VALUES (1,1, STR_TO_DATE("2018,5,20 10,00,00", "%Y,%m,%d %H,%i,%s"));
INSERT INTO shows(movie_id, hall_id, show_time) VALUES (1,1, STR_TO_DATE("2018,5,20 12,30,00", "%Y,%m,%d %H,%i,%s"));
INSERT INTO shows(movie_id, hall_id, show_time) VALUES (2,1, STR_TO_DATE("2018,5,20 15,00,00", "%Y,%m,%d %H,%i,%s"));
INSERT INTO shows(movie_id, hall_id, show_time) VALUES (2,1, STR_TO_DATE("2018,5,20 17,30,00", "%Y,%m,%d %H,%i,%s"));
INSERT INTO shows(movie_id, hall_id, show_time) VALUES (3,1, STR_TO_DATE("2018,5,20 20,00,00", "%Y,%m,%d %H,%i,%s"));
INSERT INTO shows(movie_id, hall_id, show_time) VALUES (3,2, STR_TO_DATE("2018,5,20 09,00,00", "%Y,%m,%d %H,%i,%s"));
INSERT INTO shows(movie_id, hall_id, show_time) VALUES (4,2, STR_TO_DATE("2018,5,20 11,30,00", "%Y,%m,%d %H,%i,%s"));
INSERT INTO shows(movie_id, hall_id, show_time) VALUES (4,2, STR_TO_DATE("2018,5,20 14,00,00", "%Y,%m,%d %H,%i,%s"));
INSERT INTO shows(movie_id, hall_id, show_time) VALUES (5,2, STR_TO_DATE("2018,5,20 16,30,00", "%Y,%m,%d %H,%i,%s"));
INSERT INTO shows(movie_id, hall_id, show_time) VALUES (5,2, STR_TO_DATE("2018,5,20 19,30,00", "%Y,%m,%d %H,%i,%s"));



#example data for the tickets
INSERT INTO tickets( user_id, type_id, show_id,seat_id) 
VALUES (1, 1, 1, 1);

#example value for stars
INSERT INTO stars( user_id, movie_id, rating) 
VALUES (1, 1, 5);
INSERT INTO stars( user_id, movie_id, rating) 
VALUES (2, 1, 4);
INSERT INTO stars( user_id, movie_id, rating) 
VALUES (3, 1, 5);
INSERT INTO stars( user_id, movie_id, rating) 
VALUES (4, 1, 3);