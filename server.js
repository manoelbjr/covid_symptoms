let express = require("express");
let app = express();
let bodyParser = require('body-parser');
const cors = require('cors');
let db = require("./database.js");

let HTTP_PORT = process.env.HTTP_PORT;

app.listen(HTTP_PORT, () => {
  console.log(`Servidor executando em https://localhost:%PORT`.replace(`%PORT`,HTTP_PORT))
});

//default page : index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

//Consulta todos os estabelecimentos de saúde da cidade informada
app.get("/api/ubscidade/:cidade", function (req, res, next) {
  
  res.set({'Access-Controle-Allow-Origin':'*', "Access-Control-Allow-Origin" : "*", 
  "Access-Control-Allow-Credentials" : true });
  let sql = `SELECT nom_estab, dsc_endereco, dsc_bairro FROM ubs WHERE dsc_cidade LIKE '${req.params.cidade}';`;
  console.log(sql);
  let params = [req.params.id];

    db.all(sql, params, function(err, rows){
      if(err){
        res.status(400).json({"error":err.message});
      }
      res.json({rows})
    });
});

//Insere paciente suspeito na tabela para consulta pelos orgãos de saúde

app.use(bodyParser.urlencoded({extended : false}));
app.use(cors());

app.post("/api/sintomatico/", function(req, res){
  
  let dados = {
    "nome": req.body.nome,
    "endereco": req.body.endereco,
    "numero": req.body.numero,
    "bairro": req.body.bairro,
    "cidade": req.body.cidade,
    "uf": req.body.uf  
  }

  var sql2 = `INSERT INTO sintomatico(nome,endereco,numero,bairro,cidade,uf) VALUES (?,?,?,?,?,?)`;
  var params2 = [dados.nome, dados.endereco, dados.numero, dados.bairro, dados.cidade, dados.uf];

  db.run(sql2, params2, function(err){
      if(err){
        res.status(400).json({"error": err.message})
        return;
      }
      //res.status(201);
      res.json({success: true});
      console.log("success:", res.json());
      
  });
});

// Recupera lista de pacientes suspeitos detectados pela triagem
let row;
app.get("/api/sintomatico", function(req, res){
  let sql3 = `SELECT * FROM sintomatico;`;
  //console.log(sql3);

  db.all(sql3, [], function(err,row){
    
    res.json(row);
    console.log(res.json());
  });
});

// Recupera informaçõs de nome, cidade e estado da última pessoa do banco de dados
app.use(cors());
app.get("/api/sintomatico/getlast", function(req,res){
  let query = `SELECT nome, cidade, uf FROM ( select * from sintomatico ORDER BY ID desc limit 1) ORDER BY id;`;
  let output;

  db.all(query, [], function(err, output){
    if(err){
      output.status(400).json({"error":err.message});
    }

    res.json(output);
    console.log(query);
  });

});

app.get("/api/sintomatico/getlast/cidade", function(req,res){
  let query = `SELECT cidade FROM ( select * from sintomatico ORDER BY ID desc limit 1) ORDER BY id;`;
  let output;

  db.all(query, [], function(err, output){
    if(err){
      output.status(400).json({"error":err.message});
    }
    res.send(output);
    console.log(query);
  });

});

app.use(function(req, res){
  res.status(404);
});