const express = require('express');
const axios = require('axios')
const cors = require('cors')
const app = express();

app.use(cors())

app.get('/characters', async (req, res) => {
    const url = `https://rickandmortyapi.com/api/character/`

    try{
        const response = await axios.get(url)
        const charactersInfo = response.data

        res.json({charactersInfo})
    } catch (ERROR) {
        res.status(404).json({error: 'personaje no encontrado'})
    }

})

app.get('/characters/:characterName', async (req, res) => {
    const characterName = req.params.characterName
    const url = `https://rickandmortyapi.com/api/character/${characterName}`

    try{
        const response = await axios.get(url)
        const {name, status, species, gender, origin: {name: originName}, image} = response.data.results[0]

        res.json({name, status, species, gender, origin: {name: originName}, image})
    } catch (ERROR) {
        res.status(404).json({error: 'personaje no encontrado'})
    }

})


app.listen(3001, () => {
    console.log('express esta escuchando en el puerto http://localhost:3001')
})