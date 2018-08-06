\c restaurant_dev

DROP TABLE IF EXISTS reviews; 
DROP TABLE IF EXISTS restaurant;

CREATE TABLE restaurant (
  id SERIAL PRIMARY KEY,
  name VARCHAR (255),
  location VARCHAR (255),
  cuisine VARCHAR (255),
  photo TEXT
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  restaurant_id INTEGER REFERENCES restaurant (id) ON DELETE CASCADE,
  author VARCHAR (255),
  content TEXT
);