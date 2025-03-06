const express = require('express');
const {userService} = require("./services/user.service");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.get('/users/:name', (req, res) => {
//     console.log(req.params.name);
//     console.log(req.query);
//     res.end('Welcome from GET');
// })
//
// app.post('/users', (req, res) => {
//     console.log(req.body);
//     res.end('Welcome from POST');
// })
//
// app.put('/users', (req, res) => {
//     res.end('Welcome from PUT');
// })
//
// app.patch('/users', (req, res) => {
//     res.end('Welcome from PATCH');
// })
//
// app.delete('/users', (req, res) => {
//     res.end('Welcome from DELETE');
// })

app.get('/users', async (req, res) => {
    const data = await userService.getAll();
    res.json(data);
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    const data = await userService.getById(id);
    res.json(data);
})

app.post('/users', async (req, res) => {
    const user = req.body;
    const data = await userService.create(user);
    res.json(data);
})

app.put('/users/:id', async (req, res) => {
    const id = req.params.id;
    const newUserData = req.body;
    const data = await userService.update(id, newUserData, true);
    res.json(data);
})

app.patch('/users/:id', async (req, res) => {
    const id = req.params.id;
    const newUserData = req.body;
    const data = await userService.update(id, newUserData, false);
    res.json(data);
})

app.listen(5000, () => {
    console.log('server started on port 5000');
})