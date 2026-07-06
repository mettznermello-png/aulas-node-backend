import express from "express"
import bancoDeDados from "./repository/index.js"
 
const app = express()
 
//Configurr uma rota de metodo HTTP GET na raiz ("/") do aplicativo
//app.get("/api/v1/somar", (req, res) => {
//    console.log(req.query)
//const num1 = Number(req.query.num1) || 0;
//const num2 = Number(req.query.batata) || 0;
//const resultado = num1 + num2
    //Retorna uma resposta JSON contendo uma mensagem "Hello World"
   
//    res.send({ resultado });
//})
//Inicia o servodor Express na  porta 3000 e define uma função de retorno de chamada
app.get("/api/pessoa/:id" , (req, res) => {
    const id = req.params.id

    const pessoa = bancoDeDados.find(it => it.id == id)

    res.send({ pessoa: pessoa})
})

app.get("/api/pessoa", (req, res) => {
    //const nome = req.query.name
    //const id = req.query.name
    const { id, name } = req.query
    bancoDeDados.push({id, name})
    console.log(bancoDeDados)

    res.send({ massege: "Pessoa criada com susseco"})
})

app.listen(3000, () => {
    //Exibe uma mensagem no console quando o servidor estiver ativo
    console.log("The server is listening to door 3000")
});