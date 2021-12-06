INSERT INTO flight (flight_id,departure_date,departure_time,arrival_date,arrival_time,departure_airport,arrival_airport)
                                               VALUES ('US269', '2021-12-13', '02:00:00', '2021-12-13', '06:00:00', 'IAH', 'DFW') RETURNING *

INSERT INTO flight (flight_id,departure_date,departure_time,arrival_date,arrival_time,departure_airport,arrival_airport)
                                               VALUES ('US999', '2021-12-13', '02:00:00', '2021-12-13', '06:00:00', 'IAH', 'DFW') RETURNING *

INSERT INTO flight (flight_id,departure_date,departure_time,arrival_date,arrival_time,departure_airport,arrival_airport)
                                               VALUES ('US999', '2021-12-07', '07:00:00', '2021-12-07', '09:00:00', 'HTX', 'NYC') RETURNING *

INSERT INTO flight (flight_id,departure_date,departure_time,arrival_date,arrival_time,departure_airport,arrival_airport)
                                               VALUES ('US456', '2021-12-22', '08:00:00', '2021-12-22', '12:00:00', 'IAH', 'JFK') RETURNING *

INSERT INTO flight (flight_id,departure_date,departure_time,arrival_date,arrival_time,departure_airport,arrival_airport)
                                               VALUES ('US876', '2021-12-13', '08:00:00', '2021-12-13', '13:00:00', 'IAH', 'LWS') RETURNING *

