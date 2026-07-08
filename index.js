import express from "express"
import bancoDeDados from "./repository/index.js"
 
const app = express()
 


app.listen(3000, () => {
    //Exibe uma mensagem no console quando o servidor estiver ativo
    console.log("The server is listening to door 3000")
});