const {read, write} = require("../services/fs.service");
const {findFirstAvailableId} = require("../utils/idGenerator");


class UserRepository {
    async getAll() {
        return read();
    }

    async getById(id) {
        const users = await read();
        const index = users.findIndex(user => user.id === Number(id));
        return users[index];
    }

    async create(user) {
        const users = await read();
        const newUser = {
            id: findFirstAvailableId(users),
            name: user.name,
            surname: user.surname,
            age: user.age,
        }
        users.push(newUser);
        await write(users);
        return newUser;
    }

    async put(id, user) {
        const users = await read();
        const index = users.findIndex(user => user.id === Number(id));
        const newUser = {
            id,
            name: user.name,
            surname: user.surname,
            age: user.age,
        }
        users[index] = newUser;
        await write(users);
        return newUser;
    }
}

const userRepository = new UserRepository();

module.exports = {
    userRepository,
}