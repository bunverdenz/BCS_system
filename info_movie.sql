SELECT m.movie_title, m.image_url, m.duration,
		s.show_time,
        t.type_demo, t.price
FROM movies as m 
INNER JOIN shows as s
	ON m.movie_id = s.movie_id
INNER JOIN ticket_type as t;