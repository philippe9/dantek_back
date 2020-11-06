CREATE TABLE langue(
   id_langue INT NOT NULL AUTO_INCREMENT,
   nom_langue VARCHAR(255),
   PRIMARY KEY(id_langue)
);

CREATE TABLE text_langue(
   id_text_langue INT NOT NULL AUTO_INCREMENT,
   text_selection VARCHAR(255),
   text_choix_langue VARCHAR(255),
   text_nombre_langue VARCHAR(255),
   text_modal_opened VARCHAR(255),
   text_modal_closed VARCHAR(255),
   text_niveau_parle VARCHAR(255),
   text_niveau_ecrit VARCHAR(255),
   text_niveau_comprehension VARCHAR(255),
   text_ajouter_une_langue VARCHAR(255),
   text_liste_langues VARCHAR(255),
   text_enregistrer VARCHAR(255),
   id_langue INT NOT NULL,
   PRIMARY KEY(id_text_langue),
   FOREIGN KEY(id_langue) REFERENCES langue(id_langue)
);

CREATE TABLE competence(
   id_competence INT NOT NULL AUTO_INCREMENT,
   text_competence VARCHAR(50),
   niveau_competence INT,
   PRIMARY KEY(id_competence)
);

CREATE TABLE niveau(
   id_niveau INT,
   niveau VARCHAR(50),
   PRIMARY KEY(id_niveau)
);

CREATE TABLE r_avoir_autre_nom(
   id_langue INT,
   id_langue_autre INT,
   nom_autre_langue VARCHAR(255),
   PRIMARY KEY(id_langue, id_langue_autre),
   FOREIGN KEY(id_langue) REFERENCES langue(id_langue),
   FOREIGN KEY(id_langue_autre) REFERENCES langue(id_langue)
);

CREATE TABLE r_avoir_competence_langue(
   id_langue INT,
   id_niveau INT,
   id_competence INT,
   niveau_competence INT,
   PRIMARY KEY(id_langue, id_niveau, id_competence),
   FOREIGN KEY(id_langue) REFERENCES langue(id_langue),
   FOREIGN KEY(id_niveau) REFERENCES niveau(id_niveau),
   FOREIGN KEY(id_competence) REFERENCES competence(id_competence)
);


CREATE TABLE r_avoir_text_competence(
   id_langue INT,
   id_competence INT,
   text_competence_langue VARCHAR(255),
   PRIMARY KEY(id_langue, id_competence),
   FOREIGN KEY(id_langue) REFERENCES langue(id_langue),
   FOREIGN KEY(id_competence) REFERENCES competence(id_competence)
);
