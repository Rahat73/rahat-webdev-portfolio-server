import catchAsync from '../../utils/catch-async';
import sendResponse from '../../utils/send-response';
import { AuthServices } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const { access_token } = await AuthServices.loginUser(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User logged in successfully',
    data: null,
    accessToken: access_token,
  });
});

export const AuthControllers = {
  loginUser,
};
