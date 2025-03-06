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

    async put(id, user) {
        return await userRepository.put(id, user);
    }
}

const userService = new UserService();

module.exports = {
    userService,
}