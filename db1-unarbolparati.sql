-- MariaDB dump 10.19  Distrib 10.4.20-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: db1-unarbolparati
-- ------------------------------------------------------
-- Server version	10.4.20-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id_images` int(11) NOT NULL,
  `imagen` blob DEFAULT NULL,
  PRIMARY KEY (`id_images`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id_product` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `nombre_cientifico` varchar(45) DEFAULT NULL,
  `region` varchar(45) NOT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  `altura` varchar(45) DEFAULT NULL,
  `crecimiento` varchar(45) DEFAULT NULL,
  `riego` varchar(45) DEFAULT NULL,
  `suelo` varchar(45) DEFAULT NULL,
  `clima` varchar(45) NOT NULL,
  `luz` varchar(45) DEFAULT NULL,
  `fruto` varchar(45) DEFAULT NULL,
  `precio` decimal(5,0) DEFAULT NULL,
  `imagen1` varchar(45) DEFAULT NULL,
  `imagen2` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('1','Jinicuil, cuajinicuil','Inga Jinicuil','Sur','Perennifolio','15 a 20 m','rápido','frecuente(4-5 veces por semana)','bueno y enriquecido','húmedo','pleno sol','comestible',123,'/img/products/inga-1.jpg','/img/products/inga-2.jpg'),('2','Rosa morada','Tabebuia Rosae','Sur','Caducifolio','25 a 30 m','rápido','moderado (2-3 veces por semana)','calizo y con mal drenaje','templado y subhúmedo','pleno sol','no comestible',134,'/img/products/tabe-1.jpg','/img/products/tabe-2.jpg'),('2444226a-9bd7-47ca-9789-3d54c13d2f83','Araucaria','Araucaria heterophylla','Centro','Alto','10 a 20 m','rápido','moderado','enriquecido','templado','sol directo','no comestible',1234,'/img/products/imagen1-1626995279037.jpg','/img/products/imagen1-1626995279037.jpg'),('3','Pino lacio','Pinus Devoniana','Centro','Perennifolio','20 a 30 m','rápido','moderado (2-3 veces por semana)','bueno y enriquecido','subtropical','media sombra','no comestible',213,'/img/products/pinus1.jpg','/img/products/pinus2.jpg'),('4','Ahuehuete, sabino','Taxodium huegelii','Centro','Perennifolio','30 a 40 m','rápido','frecuente (3-4 veces por semana)','bueno y húmedo','templado y frío','sol directo','no comestible',234,'/img/products/taxo1.jpg','/img/products/taxo2.jpg'),('5','Ébano','Ebenopsis Ebano','Norte','Perennifolio','4 a 10 m','medio','poco (1-2 veces por semana)','bueno y ligero','cálido','pleno sol','no comestible',423,'/img/products/ebeno1.jpg','/img/products/ebeno2.jpg'),('6','Palo verde','Parkinsonia aculeata','Norte','Caducifolio','8 a 10 m','rápido','poco (1-2 veces por semana)','bueno y ligero','cálido','pleno sol','no comestible',124,'/img/products/parkin1.jpg','/img/products/parkin2.jpg'),('d52cb09a-371c-4d9b-8c55-ed4bc2609c4b','Imperial','El imperial','Sur','Verde','Alto','medio','poco','húmedo','cálido','directa','no comestible',4321,'/img/products/imagen1-1627969465040.jpg','/img/products/imagen2-1627969465044.jpg'),('f4d32c29-14ae-46bf-8c5d-8484a38a40fc','Maple','Maple mexicano','Centro','Alto','10 a 20 m','rápido','frecuente','enriquecido','cálido','sol directo','Ninguno',4231,'/img/products/imagen1-1631896544266.jpg','/img/products/imagen2-1631896544271.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id_user` varchar(45) NOT NULL,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `category` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('06738782-f6b8-4304-869d-33aa4dd46394','Cosme','Fulanito','c_fulanito_1234@gmail.com','$2a$10$wVt.ABOqkn44Cfedi99JcufszlfgDD0ejhyJHDbm2QErBURLr8jte','/img/users/imagenUsuario-1628897284233.jpg','usuario'),('17215c11-cfe9-45ba-95d7-1c208cd8c229','Gabriela','García','userGabriela@gmail.com','$2a$10$HJqmtSTKvrJywpqvofEY/eIhATTzAOp4G8i2f494V8ySmKM5BV/aq','/img/users/imagenUsuario-1631230807725.png','usuario'),('5157c477-c32b-41c3-99a5-b9708c042718','Daniel','Mendoza','daniel@gmail.com','$2a$10$soHCO/N9Gh5qk9qA1STJU.mB1eZgw.BqhDygrUA2LamHc02g3n3qi','/img/users/user2.jpg','administrador'),('54ccf792-9692-448e-9266-8ba61a48b714','Patricia','Magaña','userPatricia@gmail.com','$2a$10$YsJHJhnUNK9sOQ832OM7E.3E7q24lvci9bs8LDh10GYajm0wWERD6','/img/users/imagenUsuario-1631231205844.png','usuario'),('668256f0-6f91-4d09-9ae4-bb476017318e','Pedro','Nuñez','userPedro@gmail.com','$2a$10$U6pKcQ67X104LHfLoVCQAupa9MMHgpAIQole9uzxbdQgEo73YwKbe','/img/users/imagenUsuario-1631231342674.png','usuario'),('947c9152-f325-4397-8bec-60cb73e34bda','Karina','Rivera','karina@gmail.com','$2a$10$Q9uZST3oBh3XpWyTCOhM2e6CWtSAWJzqow48WPxO/herppQUhUJFi','/img/users/user1.jpg','administrador');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-20 18:53:05
