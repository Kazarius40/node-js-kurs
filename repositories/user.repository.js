const {read, write} = require("../services/fs.service");
const {findFirstAvailableId} = require("../utils/idGenerator");


class UserRepository {
    async getAll() {
        return read();
    }

    async getById(id) {
        const users = await read();
        const index = users.findIndex(user => Number(user.id) === Number(id));
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

    async update(id, newUserData, overwrite) {
        const users = await read();
        const index = users.findIndex(user => Number(user.id) === Number(id));
        if (overwrite) {
            users[index] = {id, ...newUserData};
        } else {
            users[index] = {...users[index], ...newUserData};
        }
        await write(users);
        return users[index];
    }
}

const userRepository = new UserRepository();

module.exports = {
    userRepository,
}