const express = require("express");
const app = express();

const person = [
    {
        id: 1,
        name: "abc",
        email: "abc@gmail.com"
    },
    {
        id: 2,
        name: "xaz",
        email: "abc@gmail.com"
    },
    {
        id: 3,
        name: "pdr",
        email: "pqr@gmail.com"
    }
]

app.get('/',(req,res)=>{
    try{
        res.send('Parag Garg');
    }
    catch(err){
        res.send(err.message);
    }
});

app.get('/alluser', (req, res)=>{
    try{
        res.send(person);
    }
    catch(err){
        res.send(err.message);
    }
});

app.get("/alluser/:name",(req,res)=>{
    try{
        let userName = req.params.name;
        const user = person.find(p => p.name === userName);
        if(user){
            res.send(user);
        }
        else{
            res.send("User not found");
        }
    }
    catch(err){
        res.send(err.message);
    }
})

app.listen(3000, ()=>{
    console.log("succefully run on port 3000");
});