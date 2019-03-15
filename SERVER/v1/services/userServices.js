/* eslint-disable class-methods-use-this */
import bcrypt from 'bcrypt';
import User from '../models/User';
import dummydata from '../datastore/dummydata';

class UserService {
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
    const existingUsers = dummydata.users;
    const emailExist = existingUsers.find(user => user.email === userData.email);
    if (emailExist) return false;

    const lastUserId = existingUsers[existingUsers.length - 1].id;
    // eslint-disable-next-line no-param-reassign
    userData.id = lastUserId + 1;
    existingUsers.push(userData);
    return userData;
  }

  static loginUser(loginData) {
    const userExist = dummydata.users.find(user => user.email === loginData.email);
    if (!userExist) return 'exist';
    if (bcrypt.compareSync(loginData.password, userExist.password)) {
      return userExist;
    }
    return false;
  }

  static getUserByEmail(email) {
    const emailExist = dummydata.users.find(user => user.email === email);
    if (!emailExist) return false;
    return emailExist;
  }
}

export default UserService;
