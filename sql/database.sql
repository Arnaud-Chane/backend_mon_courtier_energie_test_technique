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
  FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
);