import express from "express";

const app = express();

app.use(express.json());
let users = [
    {
        id: 1,
        name: "Ronaldo"
    },
    {
        id: 2,
        name: "Igor"
    }
];
app.get("/users",(req, res)=>{
    res.status(200).json(users);
});

app.post("/users",(req, res)=>{
    const user = req.body;
    console.log(user);
    users.push(user);
    res.status(201).json(user);
});

app.listen(8080, ()=>{
    console.log("Servidor online.");
});