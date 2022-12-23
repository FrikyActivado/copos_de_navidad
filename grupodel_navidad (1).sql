-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-12-2022 a las 19:15:40
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `grupodel_navidad`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coposdenieve`
--

CREATE TABLE `coposdenieve` (
  `ID` int(11) NOT NULL,
  `Iniciales` varchar(4) COLLATE utf8mb4_spanish_ci NOT NULL,
  `color` varchar(7) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `coposdenieve`
--

INSERT INTO `coposdenieve` (`ID`, `Iniciales`, `color`) VALUES
(1, 'SADD', '#ffffff'),
(2, 'WWWW', '#53af2c'),
(3, 'TTTT', '#ffffff'),
(19, 'SADD', '#0055ff'),
(21, 'WWWW', '#c0ecde'),
(22, 'W2W\"', '#c0ecde'),
(23, 'MEMO', '#d06106'),
(24, 'MEMI', '#c00ed8'),
(25, 'T555', '#c0ecde'),
(26, 'B', '#c0ecde'),
(27, 'VD', '#c0ecde'),
(28, 'VDE', '#c0ecde'),
(29, 'VWWW', '#c0ecde'),
(30, 'QQQQ', '#c0ecde'),
(31, 'RRRR', '#c0ecde'),
(32, 'TATA', '#c0ecde'),
(33, 'OOOO', '#c0ecde'),
(34, 'UUUU', '#c0ecde'),
(35, 'RATA', '#3c7722'),
(36, 'GATO', '#1e00ff'),
(37, 'PERR', '#ff0000'),
(38, 'ZAPO', '#980e9a');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `coposdenieve`
--
ALTER TABLE `coposdenieve`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `coposdenieve`
--
ALTER TABLE `coposdenieve`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
