import Joi from 'joi';
import bcrypt from 'bcrypt';
import userServices from '../services/userServices';
import tokenGenerator from '../utils/tokenGenerator';

class userControlller {
  static postSignup(request, response) {
    const { password, confirmPassword } = request.body;

    if (password !== confirmPassword) {
      return response.json({
        status: 409,
        error: 'Password does not match',
      });
    }

    const formData = request.body;

    const schema = Joi.object().keys({
      firstname: Joi.string().required(),
      lastname: Joi.string().required(),
      email: Joi.string().email({ minDomainAtoms: 2 }),
      password: Joi.string().required(),
      phone: Joi.number().required(),
    });

    return Joi.validate(formData, schema, (err) => {
      if (err) {
        // send a 422 error response if validation fails
        return response.json({
          status: 422,
          error: formData,
        });
      }
      formData.password = bcrypt.hashSync(password);
      const createNewUser = userServices.createUser(formData);
      if (createNewUser === false) {
        return response.json({
          status: 409,
          error: 'Email already exist',
        });
      }
      return response.json({
        status: 201,
        data: [{
          token: tokenGenerator(createNewUser),
        }],
      });
    });
  }
}

export default userControlller;
