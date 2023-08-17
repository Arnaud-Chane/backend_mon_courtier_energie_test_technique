DROP DATABASE IF EXISTS `mce`;
CREATE DATABASE `mce`;
USE `mce`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `pseudo` VARCHAR(255) UNIQUE NOT NULL,
  `email` VARCHAR(255) UNIQUE NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `is_admin` INTEGER
);

DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
  `task_id` INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_id` INTEGER,
  `title` VARCHAR(255),
  `detail` TEXT,
  `task_done` INTEGER,
  `task_archived` INTEGER,
  `task_priority` integer,
  FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE
);

INSERT INTO user (pseudo, email, password, is_admin)
VALUES 
  ("user", 'valerie.apert@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ("user1", 'alice.johnsie@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ("user2", 'robert.brown@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ("user3", 'julia.lee@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ("user4", 'alexandre.moreau@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ("admin", 'test@gmail.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", '1');

INSERT INTO task (title, detail, user_id, task_done, task_archived) 
VALUES 
("task1", "detail de la task1", 1, 0, 0),
("task2", "detail de la task2", 1, 0, 0),
("task3", "detail de la task3", 1, 0, 0),
("task4", "detail de la task4", 1, 0, 0),
("task5", "detail de la task5", 2, 0, 0),
("task6", "detail de la task6", 2, 0, 0),
("task7", "detail de la task7", 2, 0, 0),
("task8", "detail de la task8", 3, 0, 0),
("task9", "detail de la task9", 4, 0, 0),
("task10", "detail de la task10", 6, 0, 0),
("task11", "detail de la task11", 6, 0, 0),
("task12", "detail de la task12", 6, 0, 0),
("task13", "detail de la task13", 6, 0, 0),
("task14", "detail de la task14", 6, 0, 0),
("task15", "detail de la task15", 6, 0, 0),
("task16", "detail de la task16", 6, 0, 0),
("task17", "detail de la task17", 3, 0, 0);