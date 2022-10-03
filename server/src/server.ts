import express, { response } from 'express';

const app = express()

app.get('/games', (req, res) => {
    console.log('ok')
    return res.json([]);
});


app.post('/ads', (req, res) => {
    return res.status(201).json([]);
});

app.get('/ads/:id/ads', (req, res) => {

    const gameId = req.params.id;

    return res.send(gameId)

    return res.json(['Acessou ads com array',

        { ad: 1, name: 'anuncio 1' },
        { ad: 2, name: 'anuncio 2' },
        { ad: 3, name: 'anuncio 3' },

    ])

});

app.get('/ads', (req, res) => {
    console.log("ta rodando")
    res.json(['Acessou ads com array',

        { ad: 1, name: 'anuncio 1' },
        { ad: 2, name: 'anuncio 2' },
        { ad: 3, name: 'anuncio 3' },

    ])
})

app.listen(3000)