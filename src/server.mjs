import  express, { response }  from 'express';

const app = express()

app.get('/ads', (req,res) =>{
    console.log("ta rodando")
    res.send('Acessou ads.')
})

app.listen(3000)