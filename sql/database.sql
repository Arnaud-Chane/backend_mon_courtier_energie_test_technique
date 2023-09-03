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
  `title` VARCHAR(255),
  `detail` TEXT,
  `task_done` INTEGER,
  `task_archived` INTEGER,
  `task_priority` INTEGER,
  `due_date` VARCHAR(255),
  `user_id` INTEGER
);

ALTER TABLE `task` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

INSERT INTO user (pseudo, email, password, is_admin)
VALUES 
  ("user", 'valerie.apert@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ("user1", 'alice.johnsie@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ("user2", 'robert.brown@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ("user3", 'julia.lee@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ("user4", 'alexandre.moreau@example.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", 0),
  ("admin", 'admin@gmail.com', "$argon2id$v=19$m=65536,t=5,p=1$03NmfWlLIBE0woTiJvADKA$VqPe3FJVqk28F0tpi1iAh62GyS2IO+tYM/seIjhhny4", '1');


INSERT INTO task (title, detail, task_done, task_archived, task_priority, due_date, user_id) 
VALUES 
("tâche 1", "detail de la tâche 1", 0, 0, 1, "2023-09-04", 6),
("tâche 2", "detail de la tâche 2", 0, 0, 2, "2023-09-10", 6),
("tâche 3", "detail de la tâche 3", 0, 0, 3, "2023-10-10", 6),
("tâche 4", "detail de la tâche 4", 0, 0, 4, "2023-01-31", 6);