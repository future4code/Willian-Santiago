USE `database-maryam-willian-nascimento`;

CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
salario FLOAT NOT NULL,
data_nascimento DATE NOT NULL,
genero VARCHAR (6) NOT NULL
);
SHOW DATABASES; -- Mostra minha data base
SHOW TABLES; -- Mostra minhas tabelas
DESCRIBE Actor; -- Mostra a tabela expecifica

INSERT INTO Actor (id, nome, salario, data_nascimento, genero)
VALUES(
"001",
"Henry Cavill",
40000,
"1983/05/05",
"male"
);
INSERT INTO Actor (id, nome, salario, data_nascimento, genero)
VALUES(
"002",
"Angelina Jolie",
12000,
"1975/06/04",
"Mulher"
);

INSERT INTO Actor (id, nome, salario, data_nascimento, genero)
VALUES(
"003",
"Scarllet Johasson",
32000,
"1984/11/22",
"Mulher"
);

INSERT INTO Actor (id, nome, salario, data_nascimento, genero)
VALUES(
"004",
"Chris Hemsworth",
42000,
"1983/06/11",
"Mulher"
);

INSERT INTO Actor (id, nome, salario, data_nascimento, genero)
VALUES(
"005",
"Josh Krasinski",
52000,
"1979/09/20",
"Homem"
);

SELECT * FROM Actor;
SELECT id, nome FROM Actor;
SELECT id, nome FROM Actor WHERE genero = "Homem";


-- Todas as atrizes
SELECT * FROM Actor WHERE genero = "Mulher";

-- Fazer um filtro mais  detalhado
SELECT * FROM Actor 
WHERE (nome LIKE "%A%" OR nome LIKE "J%") AND salario > 30000;

SELECT * FROM Actor
WHERE nome NOT LIKE "A%" AND salario  > 35000;

-- TABELA DE FILMES
CREATE TABLE Filmes (
id VARCHAR(255) PRIMARY KEY, 
nome VARCHAR(255) NOT NULL, 
sinopse TEXT NOT NULL, 
data_lançamento DATE NOT NULL, 
avaliações INT);

INSERT INTO Filmes (id, nome, sinopse, data_lançamento, avaliações)
VALUES(
"001",
"Um lugar silencioso",
"Meio-Oeste é perseguida por uma entidade fantasmagórica assustadora",
"2018/04/05",
10
);

INSERT INTO Filmes (id, nome, sinopse, data_lançamento, avaliações)
VALUES(
"002",
"Os Vingadores",
"Um cara começou a forma uma equipe com alguns heróis e assim nasceu Os Vingadores",
"2012/04/27",
10
);

INSERT INTO Filmes (id, nome, sinopse, data_lançamento, avaliações)
VALUES(
"003",
"Sr e Sra Smith",
"John e Jane Smith aparentemente parecem formar um casal normal, mas na realidade ambos mantêm um segredo. 
Os dois são assassinos de aluguel contratados por empresas rivais",
"2005/06/10",
10
);

INSERT INTO Filmes (id, nome, sinopse, data_lançamento, avaliações)
VALUES(
"004",
"The Witcher",
"É uma série de bruxos baseada no livros e jogos",
"2019/12/20",
10
);

SELECT id, nome, avaliações FROM Filmes;
SELECT * FROM Filmes WHERE nome = "Um lugar silencioso";

SELECT * FROM Filmes WHERE (nome LIKE "%The%");
SELECT * FROM Filmes WHERE (nome OR sinopse LIKE "%A%");
SELECT * FROM Filmes WHERE (data_lançamento > "2000/05/10");
SELECT * FROM Filmes WHERE (nome LIKE "%The%") AND data_lançamento > "2018/05/10";
