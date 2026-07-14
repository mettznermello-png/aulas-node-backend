import express from "express"
 
const app = express()

app.

app.post("/api/v1/atv1", (req, res) => {
    const { num1, num2 } = req.body
    const resultado = Number(num1) + Number(num2)

    res.status(200).send({ massage: resultado })
    return
})

app.post("/api/v1/atv2", (req, res) => {
    const { horas, mon } = req.body
    const resultado = Number(horas) * Number(mon)

    res.status(200).send({ massage: resultado })
    return
})

app.post("/api/v1/atv3", (req, res) => {
    const { p1, p2, p3, p4, p5 } = req.body
    const media = ( Number(p1) + Number(p2) + Number(p3) + Number(p4) + Number(p5) )/ 5 

    res.status(200).send({ massage: media })
    return
})

app.post("/api/v1/atv4", (req, res) => {
    const temp = req.body
    const fire = ( 9 * Number(temp) * + 100) / 5

    res.status(200).send({ massage: fire })
    return
})

app.post("/api/v1/atv5", (req, res) => {
    const km = req.body
    const milhas = Number(km) * 1.60934

    res.status(200).send({ massage: milhas })
    return
})

app.post("/api/v1/atv6", (req, res) => {
    const tempo = req.body
    const resultado1 = Number(tempo)
    const resultado2 = Number(tempo) / 60
    const resultado3 = Number(tempo) / 3600

    res.status(200).send({ massage: media })
})


app.listen(3000, () => {
    //Exibe uma mensagem no console quando o servidor estiver ativo
    console.log("The server is listening to door 3000")
});