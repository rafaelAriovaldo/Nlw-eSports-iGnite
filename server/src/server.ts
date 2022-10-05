import express, { response } from 'express';

const app = express()

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({
    log: ['query']
})

app.get('/games', async (req, res) => {
    console.log('ok')
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ad: true,
                }
            }
        }
    })
    return res.json(games);
});


app.post('/ads', (req, res) => {
    return res.status(201).json([]);
});

app.get('/ads/:id/ads', async (req, res) => {

    const gameId = req.params.id;
    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            UseVoiceChannel: true,
            hoursStart: true,
            hourEnd: true,

        },
        where: {
            gameId,
        },
        orderBy: {
            createdAt: 'desc',
        }
    })


    return res.json(ads.map(ads => {
        return {
            ...ads,
            weekDays: ads.weekDays.split(',')
        }
    }))

});

app.get('/ads/:id/discord', async (req, res) => {
    const idId = req.params.id;
    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: idId,
        }
    })
    return res.json({
        discord: ad.discord
    })

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