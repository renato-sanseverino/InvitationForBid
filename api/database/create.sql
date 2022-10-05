-- MySQL Script generated by MySQL Workbench
-- Wed Oct  5 19:06:37 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema bidding
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bidding
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bidding` DEFAULT CHARACTER SET utf8 ;
USE `bidding` ;

-- -----------------------------------------------------
-- Table `bidding`.`Measurement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bidding`.`Measurement` (
  `unit` VARCHAR(4) NOT NULL,
  `description` VARCHAR(120) NOT NULL,
  PRIMARY KEY (`unit`),
  UNIQUE INDEX `Unit_UNIQUE` (`unit` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bidding`.`Contractor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bidding`.`Contractor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `companyName` VARCHAR(250) NOT NULL,
  `email` VARCHAR(120) NOT NULL,
  `contactPerson` VARCHAR(250) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bidding`.`ItemGroup`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bidding`.`ItemGroup` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(120) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bidding`.`Item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bidding`.`Item` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(120) NOT NULL,
  `description` TEXT NULL,
  `avgPrice` DECIMAL NOT NULL,
  `image` VARCHAR(250) NULL,
  `banner` VARCHAR(250) NULL,
  `unitOfMeasurement` VARCHAR(4) NOT NULL,
  `itemGroup` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `bidding`.`ItemGroup`
-- -----------------------------------------------------
START TRANSACTION;
USE `bidding`;
INSERT INTO `bidding`.`ItemGroup` (`id`, `name`) VALUES (1, 'Aluguel de maquinas');
INSERT INTO `bidding`.`ItemGroup` (`id`, `name`) VALUES (2, 'Materiais de Construção');
INSERT INTO `bidding`.`ItemGroup` (`id`, `name`) VALUES (3, 'Mão de obra');
INSERT INTO `bidding`.`ItemGroup` (`id`, `name`) VALUES (4, 'Aluguel de equipamentos');

COMMIT;


-- -----------------------------------------------------
-- Data for table `bidding`.`Item`
-- -----------------------------------------------------
START TRANSACTION;
USE `bidding`;
INSERT INTO `bidding`.`Item` (`id`, `name`, `description`, `avgPrice`, `image`, `banner`, `unitOfMeasurement`, `itemGroup`) VALUES (1, 'Terraplanagem', NULL, 9600, NULL, NULL, 'MQ', NULL);
INSERT INTO `bidding`.`Item` (`id`, `name`, `description`, `avgPrice`, `image`, `banner`, `unitOfMeasurement`, `itemGroup`) VALUES (2, 'Acabamentos e revestimentos', NULL, 5700, NULL, NULL, 'UN', NULL);
INSERT INTO `bidding`.`Item` (`id`, `name`, `description`, `avgPrice`, `image`, `banner`, `unitOfMeasurement`, `itemGroup`) VALUES (3, 'Supervisão de obras', NULL, 3400, NULL, NULL, 'HS', NULL);
INSERT INTO `bidding`.`Item` (`id`, `name`, `description`, `avgPrice`, `image`, `banner`, `unitOfMeasurement`, `itemGroup`) VALUES (4, 'Escavação para fundações', NULL, 9800, NULL, NULL, 'MQ', NULL);

COMMIT;

