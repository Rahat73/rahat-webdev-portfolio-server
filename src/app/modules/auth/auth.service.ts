import config from '../../config';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import jwt from 'jsonwebtoken';

const loginUser = async (payload: { email: string; password: string }) => {
  //check if user exists
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    throw new AppError(404, 'No user found with this email');
  }

  //check if password is correct
  if (payload.password !== user.password) {
    throw new AppError(401, 'Incorrect password');
  }

  //create token and sent to the  client
  const jwtPayload = {
    email: user.email,
  };

  const access_token = jwt.sign(
    jwtPayload,
    config.jwt_access_secret as string,
    { expiresIn: config.jwt_access_expires_in as string },
  );

  return { access_token };
};

export const AuthServices = {
  loginUser,
};
