import Joi from 'joi';
import bcrypt from 'bcrypt';
import userServices from '../services/userServices';
import tokenGenerator from '../utils/tokenGenerator';

class userControlller {
  static postSignup(request, response) {
    const formData = {
      firstname: request.body.firstname,
      lastname: request.body.lastname,
      email: request.body.email,
      password: request.body.password,
      phone: request.body.phone,
    };

    const schema = Joi.object().keys({
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      email: Joi.string().email({ minDomainAtoms: 2 }),
      password: Joi.string().required(),
      phone: Joi.number().required(),
    });

    return Joi.validate(formData, schema, (err, value) => {
      if (err) {
        return response.json({
          status: 422,
          error: 'Input valid data',
        });
      }
      value.password = bcrypt.hashSync(value.password, 10);
      const createNewUser = userServices.createUser(value);
      if (createNewUser === false) {
        return response.json({
          status: 409,
          error: 'Email already exist',
        });
      }
      return response.json({
        status: 201,
        data: [{
          email: value.email,
          token: tokenGenerator(createNewUser),
          body: response.body,
        }],
      });
    });
  }

  static postSignin(request, response) {
    const formData = {
      email: request.body.email,
      password: request.body.password,
    };

    const schema = Joi.object().keys({
      email: Joi.string().email({ minDomainAtoms: 2 }).required(),
      password: Joi.required(),
    });

    return Joi.validate(formData, schema, (err, value) => {
      if (err) {
        return response.json({
          status: 422,
          error: err,
        });
      }
      const loginUser = userServices.loginUser(value);
      if (loginUser === false || loginUser === 'exist') {
        return response.json({
          status: 409,
          error: 'Email or password is incorrect',
        });
      }
      return response.json({
        status: 202,
        data: [{
          token: tokenGenerator(loginUser),
        }],
      });
    });
  }
}

export default userControlller;
