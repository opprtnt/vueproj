create TABLE any_data(
  id SERIAL PRIMARY KEY,
  date DATE,
  title VARCHAR(255),
  count INTEGER,
  distance INTEGER
)

INSERT INTO any_data (date,title,count,distance) VALUES ('2020-11-30', 'Название', '5', '1200');
INSERT INTO any_data (date,title,count,distance) VALUES ('2020-11-30', 'Туда', '4', '200');
INSERT INTO any_data (date,title,count,distance) VALUES ('2020-11-30', 'Сюда', '20', '1000');
INSERT INTO any_data (date,title,count,distance) VALUES ('2020-11-30', 'Налево', '500', '10');
INSERT INTO any_data (date,title,count,distance) VALUES ('2020-11-30', 'Направо', '1', '1337');
INSERT INTO any_data (date,title,count,distance) VALUES ('2020-11-30', 'А что если', '17', '594');
INSERT INTO any_data (date,title,count,distance) VALUES ('2020-01-28', 'День другой', '17', '594');