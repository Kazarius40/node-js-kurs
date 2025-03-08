const {read, write} = require("../services/fs.service");
const {findFirstAvailableId} = require("../utils/idGenerator");
const {convertNumbers} = require("../utils/convertNumbers");


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
           ...convertNumbers(user),
        }
        users.push(newUser);
        users.sort((a, b) => a.id - b.id);
        await write(users);
        return newUser;
    }

    async update(id, newUserData, overwrite) {
        const users = await read();
        const index = users.findIndex(user => user.id === Number(id));

        if (index === -1) return null;

        const convertData = convertNumbers(newUserData);

        if(newUserData.id){
            delete convertData.id;
        }

        if (overwrite) {
            users[index] = {id: Number(id), ...convertData};
        } else {
            users[index] = {id: Number(id), ...users[index], ...convertData};
        }
        await write(users);
        return users[index];
    }

    async delete(id) {
        const users = await read();
        const index = users.findIndex(user => user.id === Number(id));
        users.splice(index, 1);
        await write(users);
        return true;
    }
}

const userRepository = new UserRepository();

module.exports = {
    userRepository,
}