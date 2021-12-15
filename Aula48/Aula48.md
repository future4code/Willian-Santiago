SELECT * FROM `maryam-willian-nascimento`.Filmes;

CREATE TABLE Avaliações(
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
filme_id VARCHAR(255),
FOREIGN KEY (filme_id) REFERENCES Filmes(id)
);
-- A chave estrangeira é uma chave que representa algo de uma tabela especifica

INSERT INTO Avaliações (id, comment, avaliações, filme_id)
VALUES (
"001",
"Um dos melhores filmes de todos",
9);

ALTER TABLE Filmes DROP COLUMN avaliações;

CREATE TABLE FilmeElenco(
filme_id VARCHAR(255),
atores_id VARCHAR(255),
FOREIGN KEY(filme_id) REFERENCES Filmes(id),
FOREIGN KEY(atores_id) REFERENCES Actor(id)
);

-- A tablea acima é para unificar os atores e filmes que fizeram
INSERT INTO FilmeElenco(filme_id, atores_id)
VALUES(
"001",
"002"
);

SELECT * FROM Filmes
INNER JOIN Avaliações ON Filmes.id = Avaliações.filme_id;

SELECT m.id as filmes_id, r.avaliações FROM Filmes m
INNER JOIN Avaliações r ON m.id = r.filme_id