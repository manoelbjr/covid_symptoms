CREATE TABLE sintomatico(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    endereco TEXT NOT NULL,
    numero TEXT NOT NULL,
    bairro TEXT NOT NULL,
    cidade TEXT NOT NULL,
    uf TEXT NOT NULL
);

INSERT INTO sintomatico (nome,endereco,numero,bairro,cidade,uf) VALUES ("Heloisa Fátima Teresinha","Rua Caetano Cavalcante","730","Cocó","Fortaleza","CE");
INSERT INTO sintomatico (nome,endereco,numero,bairro,cidade,uf) VALUES ("Lívia Rafaela Yasmin da Silva","Rua Hélio Augusto de Rezende","609","Guarujá Mansões","Betim","MG");
INSERT INTO sintomatico (nome,endereco,numero,bairro,cidade,uf) VALUES ("Caleb Nicolas Martins","Conjunto Paulo VI","553","Petrópolis","Manaus","AM");
INSERT INTO sintomatico (nome,endereco,numero,bairro,cidade,uf) VALUES ("Bento Marcelo da Rosa","Rua Quatro","SN","Funcionários","Contagem","MG");
INSERT INTO sintomatico (nome,endereco,numero,bairro,cidade,uf) VALUES ("Breno Elias Costa","Rua Catuaba","946","Jardim Colibrí","Campo Grande","MS");
INSERT INTO sintomatico (nome,endereco,numero,bairro,cidade,uf) VALUES ("Sandra Débora Barros","Rua Maiêutica","360","Renascer","Macapá","AP");

SELECT nom_estab, dsc_endereco, dsc_bairro FROM ubs WHERE dsc_cidade LIKE 'cidade';

SELECT * FROM sintomatico;

SELECT nome, cidade, uf FROM ( select * from sintomatico ORDER BY ID desc limit 1) ORDER BY id;

SELECT cidade FROM ( select * from sintomatico ORDER BY ID desc limit 1) ORDER BY id;