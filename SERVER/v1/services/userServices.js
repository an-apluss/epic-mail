/* eslint-disable class-methods-use-this */
import User from '../models/User';
import dummydata from '../datastore/dummydata';

class UserService {
  constructor() {
    this.users = dummydata.users;
  }

  static getAllUsers() {
    return this.users.map((userData) => {
      const user = new User();
      user.id = userData.id;
      user.firstname = userData.firstname;
      user.lastname = userData.lastname;
      user.password = userData.password;
      user.phone = userData.phone;
      return user;
    });
  }

  static createUser(userData) {
    const existingUsers = this.users;
    const emailExist = existingUsers.find(user => user.email === userData.email);
    if (emailExist) return false;

    const lastUserId = existingUsers[existingUsers.length - 1].id;
    const newUser = { id: lastUserId + 1, ...userData };
    existingUsers.push(newUser);
    return newUser;
  }

  static loginUser(loginData) {
    const emailExist = this.users.find(user => user.email === loginData.email);
    if (!emailExist) return false;
    return emailExist;
  }

  getUserByEmail(email) {
    const emailExist = this.users.find(user => user.email === email);
    if (!emailExist) return false;
    return emailExist;
  }
}

export default UserService;
