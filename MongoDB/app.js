const express = require('express')
const app= express()

const userModel=require('./usermodel');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/create', async (req, res) => {
    let createduser=await userModel.create({
        name: "Prithviraj",
        username: "prithvi123",
        email: "prithviraj@123"

    })
    res.send(createduser);
})

app.listen(3000);
