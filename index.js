import express from "express"
 
const app = express()

//somar
app.get("/api/v1/somar", (req, res) => {
    const {num1, num2 } = req.query
    const resultado = Number(num1) + Number(num2)
    
    res.status(200).send({
         massege: resultado 
    })
})
//subtrair
app.get("/api/v1/subtrair", (req, res) => {
    const {num1, num2 } = req.query
    const resultado = Number(num1) - Number(num2)
    
    res.status(200).send({
         massege: resultado 
    })
})

//multi
app.get("/api/v1/multiplicar", (req, res) => {
    const {num1, num2 } = req.query
    const resultado = Number(num1) * Number(num2)
    
    res.status(200).send({
         massege: resultado 
    })
})

//div
app.get("/api/v1/dividir", (req, res) => {
    const { num1, num2} = req.query
    const resultado = Number(num1) / Number(num2)

    res
        .status(200)
        .send({ massege: resultado})
})

app.listen(3000, () => {
    //Exibe uma mensagem no console quando o servidor estiver ativo
    console.log("The server is listening to door 3000")
});