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
    const query = req.query;
    let users = await userService.getAll();
    if (query) {
        for (let key in query) {
            if (!isNaN(users[0]?.[key])) {
                users = users.filter(user => user[key] === Number(query[key]));
            } else {
                users = users.filter(user => user[key] === query[key]);
            }
        }
    }
    res.json(users);
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

app.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    const isDeleted = await userService.delete(id);
    if (!isDeleted) {
        return res.status(404).json({message: `User with id: ${id} not found.`});
    }
    res.status(204).end();
})

app.listen(5000, () => {
    console.log('server started on port 5000');
})