USE `database-maryam-willian-nascimento`;
SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Actor
ADD type VARCHAR(255) DEFAULT "NotDirector";

SELECT * FROM Actor;

-- ALTER TABLE Actor DROP COLUMN salary; Apaga a coluna salary da tabela
-- ALTER TABLE Actor CHANGE gender sex VARCHAR(6); Altera o nome de genero da tabela para outro e coloca um limite de 6 caracteres
-- ALTER TABLE Actor CHANGE gender gender VARCHAR(255); Altera apenas a quantidade de caractere

-- Exercicio 1
ALTER TABLE Actor
CHANGE genero genero VARCHAR(100);

-- Exercicio 2
UPDATE Actor
SET nome = "Jennifer Lawrence",
data_nascimento = "1990/06/15"
WHERE id = "003";

UPDATE Actor
SET nome = "HENRY CAVILL"
WHERE id = "001";

UPDATE Actor
SET nome = "Henry Cavill",
genero = "Homem"
WHERE id = "001";

UPDATE Actor
SET genero = "Homem"
WHERE id = "004";

-- Ele vai mostrar como alterado, porém não existe esse id na tabela
UPDATE Actor
SET nome = "Teste"
WHERE id = "006";

-- Exercicio 3
DELETE FROM Actor
WHERE nome = "Chris Hemsworth";
SELECT * FROM Actor;

DELETE FROM Actor
WHERE genero = "Mulher" AND salario > 1000;

-- Exercicio 4
SELECT COUNT(*) FROM Actor;
SELECT COUNT(*) FROM Actor
WHERE genero = "Homem";

SELECT MAX(salario) FROM Actor;
SELECT MIN(salario) FROM Actor;
SELECT COUNT(*) FROM Actor
WHERE genero = "Mulher";
SELECT SUM(salario) FROM Actor;

-- Exercicio 5
-- Esse comando junta todos os generos e diz quantas pessoas tem o mesmo genero
SELECT COUNT(*), genero
FROM Actor
GROUP BY genero;

SELECT * FROM Actor
ORDER BY nome DESC;

SELECT * FROM Actor
ORDER BY salario ASC;

SELECT * FROM Actor
ORDER BY salario DESC
LIMIT 1;

SELECT AVG(salario), genero FROM Actor
GROUP BY genero;

-- Exercicio 6
SELECT * FROM Filmes;
ALTER TABLE Filmes
ADD data_limite DATE DEFAULT "2021/10/10";

ALTER TABLE Filmes
DROP COLUMN type;

ALTER TABLE Filmes
CHANGE avaliações avaliações DECIMAL;

UPDATE Filmes
SET data_limite = "2021/10/24"
WHERE id = "001";

DELETE FROM Filmes
WHERE id = "004";

-- Exercicio 7
SELECT COUNT(*) FROM Filmes
WHERE avaliações > 8;

SELECT AVG(avaliações) FROM Filmes;

SELECT COUNT(*) FROM Filmes
WHERE data_limite > CURDATE();

SELECT MAX(avaliações) FROM Filmes;
SELECT MIN(avaliações) FROM filmes;

-- Exercicio 8
SELECT * FROM Filmes
ORDER BY nome ASC;

SELECT * FROM Filmes
ORDER BY nome DESC
LIMIT 2;

SELECT * FROM Filmes
WHERE data_limite < CURDATE()
ORDER BY nome
LIMIT 1;

SELECT * FROM Filmes
WHERE avaliações > 5
LIMIT 2

