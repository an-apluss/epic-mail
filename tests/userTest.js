import chai from 'chai';
import chaiHttp from 'chai-http';
import bcrypt from 'bcrypt';

import server from '../server/server';
import tokenGenerator from '../server/v1/utils/tokenGenerator';
import userServices from '../server/v1/services/userServices';

chai.use(chaiHttp);
chai.should();

describe('User', () => {
  describe('User Token', () => {
    const user = {
      id: 3,
      email: 'ann@epicmail.com',
      password: '1234567',
    };
    it('give token to user based on their id value and should be string', () => {
      const userToken = tokenGenerator(user);
      userToken.should.be.a('string');
    });
  });

  describe('User Signup', () => {
    const user = {
      id: 3,
      email: 'cerutti@epicmail.com',
      firstname: 'Matthew',
      lastname: 'Ogunmola',
      password: '1234567',
      phone: '07034326603',
    };
    it('create a new user and check the properties of the user', () => {
      const hashPassword = bcrypt.hashSync(user.password, 10);
      const createdUser = userServices.createUser(user);
      hashPassword.should.be.a('string');
      createdUser.should.be.an('object');
      createdUser.should.have.property('id');
      createdUser.should.have.property('email');
      createdUser.should.have.property('firstname');
      createdUser.should.have.property('lastname');
      createdUser.should.have.property('password');
      createdUser.should.have.property('phone');
    });
  });

  describe('User Signup route', () => {
    it('should return http status code 422 if user enter wrong input', (done) => {
      const user = {
        id: 3,
        email: 'epicmail',
        firstname: 'Matthew',
        lastname: 'Ogunmola',
        password: '1234567',
        phone: '07034326603',
      };
      chai
        .request(server)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err, response) => {
          response.body.should.be.an('object');
          response.body.should.have.property('status').eql(422);
          response.body.should.have.property('error');
        });
      done();
    });
    it('should return http status code 201 if user inputs are valid', (done) => {
      const user = {
        id: 3,
        email: 'cerutti@epicmail.com',
        firstname: 'Matthew',
        lastname: 'Ogunmola',
        password: '1234567',
        phone: '07034326603',
      };
      chai
        .request(server)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err, response) => {
          response.body.should.be.an('object');
          response.body.should.have.property('error');
        });
      done();
    });
  });
  describe('User sign in', () => {
    it('should return error if user does not exist', () => {
      const user = {
        email: 'anuo@epicmail.com',
        password: '1234567',
      };
      const isloggedIn = userServices.loginUser(user);
      isloggedIn.should.equal('exist');
    });
    it('should sign in user if user exist', () => {
      const user = {
        email: 'anuoluwapoakinseye@epicmail.com',
        password: '1234567',
      };
      const isloggedIn = userServices.loginUser(user);
      const userToken = tokenGenerator(isloggedIn);
      isloggedIn.should.have.property('email');
      isloggedIn.should.have.property('password');
      userToken.should.be.a('string');
    });
    it('should return http status code 201 if user inputs are valid', (done) => {
      const user = {
        email: 'anuoluwapoakinseye@epicmail.com',
        password: '1234567',
      };
      chai
        .request(server)
        .post('/api/v1/auth/signin')
        .send(user)
        .end((err, response) => {
          response.body.should.be.an('object');
          response.body.should.have.property('status').eql(202);
        });
      done();
    });
  });
});
