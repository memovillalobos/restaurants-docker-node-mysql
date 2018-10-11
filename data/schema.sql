CREATE DATABASE restaurants;
USE restaurants;

CREATE TABLE restaurants
(
  id INTEGER AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  PRIMARY KEY (id)
);
