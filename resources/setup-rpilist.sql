-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2019 at 07:45 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rpilist`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(256) NOT NULL,
  `date` date NOT NULL,
  `time` varchar(256) NOT NULL,
  `pay` varchar(256) NOT NULL,
  `description` text NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `title`, `date`, `time`, `pay`, `description`, `created`) VALUES
(9, 13, 'Psychology Survey', '2019-12-12', '1 hr', '$5', 'The psychology department is conducting a survey which needs junior and senior students who have been at Rensselaer for at least 2 years. The survey will require you to disclose information on your mental health during your time at RPI. The results of the survey will anonymous and confidential. The survey will be completed in person in Room 103 of the Green Building.', '2019-12-08 18:34:34'),
(19, 13, 'Snow Removal', '2019-12-02', '2 hours', '$75', 'I Do The Small Driveways-Walk Ways\r\nNo Driveway That’s Ok We Also Will Do Just Walkways and steps\r\nWe only use snow blowers and shovels\r\nBy doing this we save your lawn and driveways from being damaged\r\nDo you have a contract for plowing already?\r\nBut they don’t do side walks or steps\r\nWe can help\r\nWe can do just that!\r\nText Me Now Before It’s Too Late Again\r\nEase Your Mind Rest Of The Winter', '2019-12-09 02:52:46'),
(20, 13, 'Land Clearing', '2019-01-26', '1 day', '$500', 'Field pasture reclaiming, building lots, brush mowing / hogging, recreational trails, view cuts, hedgerows, shooting lanes, road side, farms, fence lines, right of ways, logging clean up, and much more. No job to big or small', '2019-12-09 02:53:47'),
(21, 13, 'Apartment Cleaing', '2019-12-18', '6 hrs', '$150', 'Looking for someone who wants to be apart of a team working together,aspect of work is painting,flooring,Sheetrock,demos,framing etc.pay attention to detail knows the meaning of work.we cover Albany and surrounding areas.hours are Monday thru Friday 8 to 430.weekends off.pay will be discussed.if you are someone looking to work and can focus please give a call to joe at 845-380-6039.looking to start ASAP thank you.', '2019-12-09 02:55:30'),
(22, 13, 'Software Developer', '2020-01-01', 'Full Time', '$30/hr', 'Enthusiastic and motivated Software Developer to join our AWESOME team at one of the Capital Districts 2019 Best Places to Work!!! This rock star of a Software Developer will be responsible for supporting existing products as well as working on enhancements and new products. Is this you??? Apply Today! If we hire you before 2019, you will receive a $1,000 sign on BONUS!!!!', '2019-12-09 02:57:30'),
(24, 13, 'Biology Research', '2020-01-01', '4 hrs per week', 'Credit', 'The department of Biological Sciences at Rensselaer encompasses a diverse and inherently interdisciplinary portfolio of research. Our faculty, graduate students and undergraduates are deeply involved in the work of pushing boundaries and inventing solutions. They are exploring areas at the forefront of modern biology, including molecular mechanisms of aging, nano-biology and nanotechnology, genetics of model organisms, microbiology and host-pathogen interactions, and synthetic biology.', '2019-12-09 03:01:04'),
(25, 13, 'Safe Rider Driver', '2019-01-13', '8hrs per week', '$20/hr', 'Safe Ride provides Rensselaer students a safe, free, and alternate form of transportation when traveling to or from campus within the city limits of Troy, NY and in the service area. This program is designed as a way to support students traveling to their homes late at night or evening campus/academic events.', '2019-12-09 03:02:40'),
(26, 13, 'Tutor', '2019-12-09', '2 hours', '$30', 'Need help studying for finals. A tutor, formally also called an academic tutor, is a person who provides assistance or tutelage to one or more people on certain subject areas or skills. The tutor spends a few hours on a daily, weekly, or monthly basis to transfer their expertise on the topic or skill to the student.', '2019-12-09 03:04:42'),
(27, 13, 'IT Project', '2019-01-04', '6 hrs', 'None', 'Hard work.', '2019-12-09 18:17:59');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(256) NOT NULL,
  `last_name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `phone_number` varchar(256) DEFAULT NULL,
  `alt_email` varchar(256) DEFAULT NULL,
  `major` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `phone_number`, `alt_email`, `major`) VALUES
(13, 'Jake', 'Kloman', 'klomaj@rpi.edu', 'password', '703-430-2013', 'jkloman11@gmail.com', 'Astronomy'),
(20, 'Noah', 'Falasco', 'falasn@rpi.edu', 'password', NULL, NULL, NULL),
(21, 'Demo', 'User', 'Demo@rpi.edu', 'password', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_ibfk_1` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
