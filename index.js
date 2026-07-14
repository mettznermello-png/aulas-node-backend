import express from "express"
 
const app = express()

app.use(express.json())
 
app.post("/api/v1/somar", (req, res) => {
    const { num1, num2 } = req.body
    const resultado = Number(num1) + Number(num2)

    res.status(200).send({ massage: resultado })
    return
})

app.post("/api/v1/subtrair", (req, res) => {
    const { num1, num2 } = req.body
    const resultado = Number(num1) - Number(num2)

    res.status(200).send({ massage: resultado })
    return
})

app.post("/api/v1/multi", (req, res) => {
    const { num1, num2 } = req.body
    const resultado = Number(num1) * Number(num2)

    res.status(200).send({ massage: resultado })
    return
})

app.post("/api/v1/dividir", (req, res) => {
    const { num1, num2 } = req.body
    const resultado = Number(num1) / Number(num2)

    res.status(200).send({ massage: resultado })
})



app.listen(3000, () => {
    //Exibe uma mensagem no console quando o servidor estiver ativo
    console.log("The server is listening to door 3000")
})