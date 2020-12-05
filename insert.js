const sqlite3 = require('sqlite3').verbose();

// abrir banco de dados

let db = new sqlite3.Database('./ubs.db');

//consulta de teste
let sql = `INSERT INTO sintomaticos(nome,endereco,bairro,cidade) VALUES ('Mílton Belmonte', 'rua dos bobos', 'NUMERO ZERO', 'Springfield');`; 

db.run(`INSERT INTO sintomaticos(nome,endereco,bairro,cidade) VALUES (?,?,?,?)`, 
      ['Mílton Belmonte', 'rua dos bobos', 'NUMERO ZERO', 'Springfield'], 
function(err){
  if(err){
      return console.log(err.message);
  }
  console.log(`Uma linha foi inserida`);
})

db.close();