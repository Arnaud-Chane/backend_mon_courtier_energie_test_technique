DROP DATABASE IF EXISTS `mce`;
CREATE DATABASE `mce`;
USE `mce`;

DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
  `task_id` INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255),
  `detail` TEXT,
  `task_done` INTEGER,
  `task_archived` INTEGER,
  `task_priority` INTEGER,
  `due_date` VARCHAR(255)
);

INSERT INTO task (title, detail, task_done, task_archived, task_priority, due_date) 
VALUES 
("tâche 1", "detail de la tâche 1", 0, 0, 1, "2023-08-10"),
("tâche 2", "detail de la tâche 2", 0, 0, 2, "2023-08-21"),
("tâche 3", "detail de la tâche 3", 0, 0, 3, "2023-08-31"),
("tâche 4", "detail de la tâche 4", 0, 0, 4, "2023-01-31");