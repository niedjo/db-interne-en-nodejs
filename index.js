const express = require('express');
const nedb = require('nedb')

const PORT = 3000

const db = new nedb({ filename: 'database.db', autoload: true })
db.loadDatabase()

const app = express()

app.use(express.json()) // pour les api

// API CRUD

// create

app.post('/api/perso', (req, res) => {
    console.log(req.body)
    db.insert(req.body)
    res.send(req.body)
})

// read all
app.get('/api/perso', (req, res) => {
    db.find({}, (error, docs) => {
        if (error) console.log(error)
        
        res.send(docs)
    })
})

// read one
app.get('/api/perso/:id', (req, res) => {
    const id = req.params.id
    db.find({_id : id}, (error, docs) => {
        if (error) console.log(error)
        
        res.send(docs)
    })
})

// update  
app.patch('/api/perso/:id', (req, res) => {
    const id = req.params.id

    db.update({_id : id}, {$set : {...req.body}})
    res.send(req.body)
})

// delete  
app.delete('/api/perso/:id', (req, res) => {
    const id = req.params.id

    db.remove({_id : id})
    // res.send(req.body)
})

app.listen(PORT, () => {
    console.log(`Example app listening on  http://localhost:${PORT}`)
})