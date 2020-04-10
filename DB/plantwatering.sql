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
-- Table `plant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `plant` ;

CREATE TABLE IF NOT EXISTS `plant` (
  `id` INT NOT NULL,
  `name` VARCHAR(450) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idplant_UNIQUE` (`id` ASC))
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
-- Data for table `plant`
-- -----------------------------------------------------
START TRANSACTION;
USE `plantwateringdb`;
INSERT INTO `plant` (`id`, `name`) VALUES (1, 'Aloe');

COMMIT;

