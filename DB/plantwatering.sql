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
  `id` INT NOT NULL,
  `first_name` VARCHAR(100) NULL,
  `last_name` VARCHAR(100) NULL,
  `password` VARCHAR(50) NULL,
  `active` TINYINT NULL,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `plant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `plant` ;

CREATE TABLE IF NOT EXISTS `plant` (
  `id` INT NOT NULL,
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
  `id` INT NOT NULL,
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
INSERT INTO `user` (`id`, `first_name`, `last_name`, `password`, `active`) VALUES (1, 'Diego', 'Hoyos', 'plant', true);

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

