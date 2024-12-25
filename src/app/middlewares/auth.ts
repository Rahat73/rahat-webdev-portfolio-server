import config from '../config';
import AppError from '../errors/AppError';
import { User } from '../modules/user/user.model';
import catchAsync from '../utils/catch-async';
import jwt, { JwtPayload } from 'jsonwebtoken';

const auth = () => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;

    // checking if the token is missing
    if (!token) {
      throw new AppError(401, 'You have no access to this route');
    }

    // checking if the given token is valid
    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;

    const { email } = decoded;

    // checking if the user is exist
    const user = await User.findOne({ email });
    if (!user) {
      throw new AppError(404, 'No user found !');
    }

    req.user = decoded as JwtPayload;

    next();
  });
};

export default auth;
