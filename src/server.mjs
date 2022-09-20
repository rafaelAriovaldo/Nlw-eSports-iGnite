import  express, { response }  from 'express';

const app = express()

app.get('/ads', (req,res) =>{
    console.log("ta rodando")
    res.json(['Acessou ads com array',
   
    {ad:1, name:'anuncio 1'},
    {ad:2, name:'anuncio 2'},
    {ad:3, name:'anuncio 3'},
   ] )
})

app.listen(3000)