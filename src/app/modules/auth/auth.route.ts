import { Router } from 'express';
import validationHandler from '../../middlewares/validation-handlers';
import { AuthValidations } from './auth.validation';
import { AuthControllers } from './auth.controller';

const router = Router();

router.post(
  '/login',
  validationHandler(AuthValidations.loginValidationSchema),
  AuthControllers.loginUser,
);

export const AuthRoutes = router;
