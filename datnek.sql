-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 06 nov. 2020 à 16:45
-- Version du serveur :  10.4.14-MariaDB
-- Version de PHP : 7.3.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `datnek`
--

-- --------------------------------------------------------

--
-- Structure de la table `competence`
--

CREATE TABLE `competence` (
  `id_competence` int(11) NOT NULL,
  `text_competence` varchar(50) DEFAULT NULL,
  `niveau_competence` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `competence`
--

INSERT INTO `competence` (`id_competence`, `text_competence`, `niveau_competence`) VALUES
(1, 'Inconnu', NULL),
(2, 'Notions élémentaires', NULL),
(3, 'Intermediaire', NULL),
(4, 'Courant', NULL),
(5, 'Langue natale', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `langue`
--

CREATE TABLE `langue` (
  `id_langue` int(11) NOT NULL,
  `nom_langue` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `langue`
--

INSERT INTO `langue` (`id_langue`, `nom_langue`) VALUES
(1, 'Français'),
(2, 'English');

-- --------------------------------------------------------

--
-- Structure de la table `niveau`
--

CREATE TABLE `niveau` (
  `id_niveau` int(11) NOT NULL,
  `niveau` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `niveau`
--

INSERT INTO `niveau` (`id_niveau`, `niveau`) VALUES
(1, 'Parle'),
(2, 'Ecrit'),
(3, 'Comprehension');

-- --------------------------------------------------------

--
-- Structure de la table `r_avoir_autre_nom`
--

CREATE TABLE `r_avoir_autre_nom` (
  `id_langue` int(11) NOT NULL,
  `id_langue_autre` int(11) NOT NULL,
  `nom_autre_langue` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `r_avoir_autre_nom`
--

INSERT INTO `r_avoir_autre_nom` (`id_langue`, `id_langue_autre`, `nom_autre_langue`) VALUES
(1, 1, 'Français'),
(1, 2, 'French'),
(2, 1, 'Anglais'),
(2, 2, 'English');

-- --------------------------------------------------------

--
-- Structure de la table `r_avoir_competence_langue`
--

CREATE TABLE `r_avoir_competence_langue` (
  `id_langue` int(11) NOT NULL,
  `id_niveau` int(11) NOT NULL,
  `id_competence` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `r_avoir_competence_langue`
--

INSERT INTO `r_avoir_competence_langue` (`id_langue`, `id_niveau`, `id_competence`) VALUES
(1, 1, 4),
(1, 2, 4),
(1, 3, 5),
(2, 1, 1),
(2, 2, 4),
(2, 3, 3);

-- --------------------------------------------------------

--
-- Structure de la table `r_avoir_text_competence`
--

CREATE TABLE `r_avoir_text_competence` (
  `id_langue` int(11) NOT NULL,
  `id_competence` int(11) NOT NULL,
  `text_competence_langue` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `r_avoir_text_competence`
--

INSERT INTO `r_avoir_text_competence` (`id_langue`, `id_competence`, `text_competence_langue`) VALUES
(1, 1, 'Inconnu'),
(1, 2, 'Notions élémentaires'),
(1, 3, 'Intermediare'),
(1, 4, 'Courant'),
(1, 5, 'Langue natale'),
(2, 1, 'Not Known'),
(2, 2, 'Elementary notions'),
(2, 3, 'Intermidiate'),
(2, 4, 'Fluent'),
(2, 5, 'Native language');

-- --------------------------------------------------------

--
-- Structure de la table `text_langue`
--

CREATE TABLE `text_langue` (
  `id_text_langue` int(11) NOT NULL,
  `text_selection` varchar(255) DEFAULT NULL,
  `text_choix_langue` varchar(255) DEFAULT NULL,
  `text_nombre_langue` varchar(255) DEFAULT NULL,
  `text_modal_opened` varchar(255) DEFAULT NULL,
  `text_modal_closed` varchar(255) DEFAULT NULL,
  `text_niveau_parle` varchar(255) DEFAULT NULL,
  `text_niveau_ecrit` varchar(255) DEFAULT NULL,
  `text_niveau_comprehension` varchar(255) DEFAULT NULL,
  `text_ajouter_une_langue` varchar(255) DEFAULT NULL,
  `text_liste_langues` varchar(255) DEFAULT NULL,
  `text_enregistrer` varchar(255) DEFAULT NULL,
  `id_langue` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `text_langue`
--

INSERT INTO `text_langue` (`id_text_langue`, `text_selection`, `text_choix_langue`, `text_nombre_langue`, `text_modal_opened`, `text_modal_closed`, `text_niveau_parle`, `text_niveau_ecrit`, `text_niveau_comprehension`, `text_ajouter_une_langue`, `text_liste_langues`, `text_enregistrer`, `id_langue`) VALUES
(1, 'Sélectionnez un élément', 'Choisir une langue', NULL, 'Modal ouverte', 'Modal fermé', 'Niveau parlé', 'Niveau écrit', 'Niveau comprehension', 'Ajouter une langue', 'Liste des langues', 'Enregistrer', 1),
(2, 'Select an element', 'Choose a language', NULL, 'Modal opened', 'Modal closed', 'Spoken level', 'Writing level', 'Understanding level', 'Add a language', 'Language list', 'Register', 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `competence`
--
ALTER TABLE `competence`
  ADD PRIMARY KEY (`id_competence`);

--
-- Index pour la table `langue`
--
ALTER TABLE `langue`
  ADD PRIMARY KEY (`id_langue`);

--
-- Index pour la table `niveau`
--
ALTER TABLE `niveau`
  ADD PRIMARY KEY (`id_niveau`);

--
-- Index pour la table `r_avoir_autre_nom`
--
ALTER TABLE `r_avoir_autre_nom`
  ADD PRIMARY KEY (`id_langue`,`id_langue_autre`),
  ADD KEY `id_langue_autre` (`id_langue_autre`);

--
-- Index pour la table `r_avoir_competence_langue`
--
ALTER TABLE `r_avoir_competence_langue`
  ADD PRIMARY KEY (`id_langue`,`id_niveau`,`id_competence`),
  ADD KEY `id_niveau` (`id_niveau`),
  ADD KEY `id_competence` (`id_competence`);

--
-- Index pour la table `r_avoir_text_competence`
--
ALTER TABLE `r_avoir_text_competence`
  ADD PRIMARY KEY (`id_langue`,`id_competence`),
  ADD KEY `id_competence` (`id_competence`);

--
-- Index pour la table `text_langue`
--
ALTER TABLE `text_langue`
  ADD PRIMARY KEY (`id_text_langue`),
  ADD KEY `id_langue` (`id_langue`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `competence`
--
ALTER TABLE `competence`
  MODIFY `id_competence` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `langue`
--
ALTER TABLE `langue`
  MODIFY `id_langue` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `text_langue`
--
ALTER TABLE `text_langue`
  MODIFY `id_text_langue` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `r_avoir_autre_nom`
--
ALTER TABLE `r_avoir_autre_nom`
  ADD CONSTRAINT `r_avoir_autre_nom_ibfk_1` FOREIGN KEY (`id_langue`) REFERENCES `langue` (`id_langue`),
  ADD CONSTRAINT `r_avoir_autre_nom_ibfk_2` FOREIGN KEY (`id_langue_autre`) REFERENCES `langue` (`id_langue`);

--
-- Contraintes pour la table `r_avoir_competence_langue`
--
ALTER TABLE `r_avoir_competence_langue`
  ADD CONSTRAINT `r_avoir_competence_langue_ibfk_1` FOREIGN KEY (`id_langue`) REFERENCES `langue` (`id_langue`),
  ADD CONSTRAINT `r_avoir_competence_langue_ibfk_2` FOREIGN KEY (`id_niveau`) REFERENCES `niveau` (`id_niveau`),
  ADD CONSTRAINT `r_avoir_competence_langue_ibfk_3` FOREIGN KEY (`id_competence`) REFERENCES `competence` (`id_competence`);

--
-- Contraintes pour la table `r_avoir_text_competence`
--
ALTER TABLE `r_avoir_text_competence`
  ADD CONSTRAINT `r_avoir_text_competence_ibfk_1` FOREIGN KEY (`id_langue`) REFERENCES `langue` (`id_langue`),
  ADD CONSTRAINT `r_avoir_text_competence_ibfk_2` FOREIGN KEY (`id_competence`) REFERENCES `competence` (`id_competence`);

--
-- Contraintes pour la table `text_langue`
--
ALTER TABLE `text_langue`
  ADD CONSTRAINT `text_langue_ibfk_1` FOREIGN KEY (`id_langue`) REFERENCES `langue` (`id_langue`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
