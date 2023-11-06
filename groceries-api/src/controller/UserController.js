import UserService from "../service/UserService.js";

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async getUserData(id) {
    const user = await this.userService.getUserData(id);
    return user[0];
  }

  async getAllUsers() {
    const users = await this.userService.getAllUsers();
    return users;
  }
}

export default UserController;
