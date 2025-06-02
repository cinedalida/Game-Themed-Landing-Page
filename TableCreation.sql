CREATE DATABASE IF NOT EXISTS user_auth;
USE user_auth;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

-- default test user 
INSERT INTO users (username, password)
VALUES ('test.user@gmail.com', 'VeryStrong1234');

SELECT * FROM users;