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
    const pessoa = bancoDeDados.find(it => it.id == id )
    if (!pessoa) {
        res.status(404).send({ message: "Pessoa não encontrada"})
        return
    }
    res.send({ pessoa: "Pessoa encontrada com sucesso" })
})
app.get("/api/pessoa", (req, res) => {
    //const nome = req.query.name
    //const id = req.query.name
    const { id, name } = req.query
    if(!id || !name) {
        res.send({ message: "Favor informar id e name"})
        return
    }
    bancoDeDados.push({id, name})
    res.send({ massege: "Pessoa criada com susseco"})
})

app.get("/api/pessoa/alterar/:id", (req, req) => {
    let id = req.params
    let name = 
})

app.get("/api/pessoa/deletar/:id", (req, req) => {
    const id = 
})

app.listen(3000, () => {
    //Exibe uma mensagem no console quando o servidor estiver ativo
    console.log("The server is listening to door 3000")
});