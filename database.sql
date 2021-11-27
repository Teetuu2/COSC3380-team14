CREATE TABLE flight (
    flight_id character(5) NOT NULL,
    departure_date DATE,
    departure_time TIME,
    arrival_date DATE,
    arrival_time TIME,
    departure_airport character(3),
    arrival_airport character(3),
    CONSTRAINT flights_check CHECK (((arrival_date > departure_date) OR ((arrival_date = departure_date) AND (arrival_time > departure_time)))),
    PRIMARY KEY (flight_id)
);

INSERT INTO flight VALUES ('US176','2022-10-20','11:22:00','2022-10-20','21:22:00','MSO','DFW'),
('US930','2022-07-18','21:47:00','2022-07-19','08:47:00','GRI','HNL'),
('US506','2021-12-18','10:26:00','2021-12-18','22:26:00','BTR','BGR');
