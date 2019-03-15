import express from 'express';
import userController from '../controllers/userController';

const userRoute = express.Router();


userRoute.post('/signup', userController.postSignup);
userRoute.post('/signin', userController.postSignin);

export default userRoute;
