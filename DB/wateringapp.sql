-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema wateringappdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `wateringappdb` ;

-- -----------------------------------------------------
-- Schema wateringappdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `wateringappdb` DEFAULT CHARACTER SET utf8 ;
USE `wateringappdb` ;

-- -----------------------------------------------------
-- Table `watering`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `watering` ;

CREATE TABLE IF NOT EXISTS `watering` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(100) NOT NULL,
  `plant_name` VARCHAR(100) NOT NULL,
  `location` VARCHAR(100) NULL,
  `next_watering_date` DATE NOT NULL,
  `last_watering_date` DATE NOT NULL,
  `description` VARCHAR(1000) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS wateringapp@localhost;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'wateringapp'@'localhost' IDENTIFIED BY 'wateringapp';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'wateringapp'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `watering`
-- -----------------------------------------------------
START TRANSACTION;
USE `wateringappdb`;
INSERT INTO `watering` (`id`, `user_name`, `plant_name`, `location`, `next_watering_date`, `last_watering_date`, `description`) VALUES (1, 'willferrel', 'Jade Plant', 'Living Room', '2020-04-13', '2020-04-7', 'very nice');
INSERT INTO `watering` (`id`, `user_name`, `plant_name`, `location`, `next_watering_date`, `last_watering_date`, `description`) VALUES (2, 'dandevito', 'Spider plant', 'Entrance', '2020-04-13', '2020-04-9', 'looks great');

COMMIT;

