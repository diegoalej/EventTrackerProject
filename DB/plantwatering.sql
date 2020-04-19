-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema plantwateringdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `plantwateringdb` ;

-- -----------------------------------------------------
-- Schema plantwateringdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `plantwateringdb` DEFAULT CHARACTER SET utf8 ;
USE `plantwateringdb` ;

-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(100) NULL,
  `last_name` VARCHAR(100) NULL,
  `password` VARCHAR(50) NULL,
  `active` TINYINT NULL,
  `username` VARCHAR(100) NULL,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `plant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `plant` ;

CREATE TABLE IF NOT EXISTS `plant` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `common_name` VARCHAR(1000) NULL,
  `temperature` VARCHAR(1000) NULL,
  `light` VARCHAR(1000) NULL,
  `watering` VARCHAR(1000) NULL,
  `soil` VARCHAR(1000) NULL,
  `propagation` VARCHAR(1000) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_plant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_plant` ;

CREATE TABLE IF NOT EXISTS `user_plant` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `plant_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `name` VARCHAR(100) NULL,
  `last_watering` DATE NULL,
  `next_watering` DATE NULL,
  `location` VARCHAR(100) NULL,
  `active` TINYINT NULL,
  INDEX `fk_plant_has_user_user1_idx` (`user_id` ASC),
  INDEX `fk_plant_has_user_plant_idx` (`plant_id` ASC),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  CONSTRAINT `fk_plant_has_user_plant`
    FOREIGN KEY (`plant_id`)
    REFERENCES `plant` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_plant_has_user_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `watering`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `watering` ;

CREATE TABLE IF NOT EXISTS `watering` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `watering_date` DATE NOT NULL,
  `watering_comment` VARCHAR(1000) NULL,
  `user_plant_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_watering_user_plant1_idx` (`user_plant_id` ASC),
  CONSTRAINT `fk_watering_user_plant1`
    FOREIGN KEY (`user_plant_id`)
    REFERENCES `user_plant` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS plantwatering@localhost;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'plantwatering'@'localhost' IDENTIFIED BY 'plantwatering';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'plantwatering'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `plantwateringdb`;
INSERT INTO `user` (`id`, `first_name`, `last_name`, `password`, `active`, `username`) VALUES (1, 'Diego', 'Hoyos', 'plant', true, 'diegoalej');

COMMIT;


-- -----------------------------------------------------
-- Data for table `plant`
-- -----------------------------------------------------
START TRANSACTION;
USE `plantwateringdb`;
INSERT INTO `plant` (`id`, `common_name`, `temperature`, `light`, `watering`, `soil`, `propagation`) VALUES (1, 'zebra plant', 'Normal temp', 'normal light', 'This and that', 'Loamy full soil', 'Clippings');

COMMIT;


-- -----------------------------------------------------
-- Data for table `user_plant`
-- -----------------------------------------------------
START TRANSACTION;
USE `plantwateringdb`;
INSERT INTO `user_plant` (`id`, `plant_id`, `user_id`, `name`, `last_watering`, `next_watering`, `location`, `active`) VALUES (1, 1, 1, 'zebra pant', '2015-12-17', '2015-12-17', 'living room', true);

COMMIT;


-- -----------------------------------------------------
-- Data for table `watering`
-- -----------------------------------------------------
START TRANSACTION;
USE `plantwateringdb`;
INSERT INTO `watering` (`id`, `watering_date`, `watering_comment`, `user_plant_id`) VALUES (1, '2015-12-17', 'looks great', 1);
INSERT INTO `watering` (`id`, `watering_date`, `watering_comment`, `user_plant_id`) VALUES (2, '2015-12-17', 'looking wilted', 1);

COMMIT;

