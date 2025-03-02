import {Response, Request} from "express";
import express from "express";
import * as mongoose from "mongoose";


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const PORT = 5000;
const JohnDoe = [
    {
        name: 'John Doe 1',
        email: 'john@gmail.com',
        age: 4,
        gender: 'Male',
    },
    {
        name: 'John Doe 2',
        email: 'john@gmail.com',
        age: 8,
        gender: 'Male',
    },
    {
        name: 'John Doe 3',
        email: 'john@gmail.com',
        age: 10,
        gender: 'Male',
    },
    {
        name: 'John Doe 4',
        email: 'john@gmail.com',
        age: 15,
        gender: 'Male',
    },
    {
        name: 'John Doe 5',
        email: 'john@gmail.com',
        age: 18,
        gender: 'Male',
    }
]
app.get('/JohnDoe', (req: Request, res: Response) => {
    res.json(JohnDoe)
})
app.post('/JohnDoe', (req: Request, res: Response) => {
    const johnDoe = req.body;
    JohnDoe.push(johnDoe);
    res.status(201).json({message: 'JohnDoe created!'});
})
app.put('/JohnDoe/:id', (req: Request, res: Response) => {
    const {id} = req.params;
    JohnDoe[+id] = req.body;
    res.status(200).json({message: "JohnDoe updated successfully!", data: JohnDoe[+id]})
})

app.delete('/JohnDoe/:id', (req: Request, res: Response) => {
    const {id} = req.params;
    JohnDoe.splice(+id, 1);
    res.status(200).json({message: "JohnDoe updated successfully!", data: JohnDoe[+id]})
})
app.listen(PORT, () => {
    mongoose.connect("mongodb://127.0.0.1:27017/preview");
    console.log(`Listening on port ${PORT}`)
});