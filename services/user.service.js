const {userRepository} = require("../repositories/user.repository");


class UserService {
    async getAll() {
        return await userRepository.getAll();
    }

    async getById(id) {
        return await userRepository.getById(id);
    }

    async create(user) {
        return await userRepository.create(user);
    }

    async update(id, newUserData, overwrite) {
        return await userRepository.update(id, newUserData, overwrite);
    }
}

const userService = new UserService();

module.exports = {
    userService,
}