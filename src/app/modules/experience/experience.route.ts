import { Router } from 'express';
import auth from '../../middlewares/auth';
import { ExperienceControllers } from './experience.controller';

const router = Router();

router.get('/', ExperienceControllers.getExperiences);

router.post('/', auth(), ExperienceControllers.addExperience);

export const ExperienceRoutes = router;
