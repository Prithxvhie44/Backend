const express = require('express')
const app= express()

const userModel=require('./usermodel');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//To create data

app.get('/create', async (req, res) => {
    let createduser=await userModel.create({
        name: "Prithviraj",
        username: "prithvi123",
        email: "prithviraj@123"

    })
    res.send(createduser);
})

//To update data
app.get('/update',async(req,res)=>{
    let updateduser=await userModel.updateOne({username:"prithvi123"},{name:"Prithviraj More"},{new:true})
    res.send(updateduser);
})

//To fetch all data(This returns array of objects)

app.get("/read", async(req,res)=>{
    let users=await userModel.find();
    res.send(users);
})

//To fetch specific data(This returns object of first matched data)

app.get("/readone", async(req,res)=>{
    let user=await userModel.findOne({username:"prithvi123"});
    res.send(user);
})

//To delete data
app.get("/delete", async(req,res)=>{
    let deleteduser=await userModel.deleteOne({username:"prithvi123"});
    res.send(deleteduser);
})

app.listen(3000);
