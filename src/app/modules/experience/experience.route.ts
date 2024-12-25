import { Router } from 'express';
import auth from '../../middlewares/auth';
import { ExperienceControllers } from './experience.controller';

const router = Router();

router.get('/', ExperienceControllers.getExperiences);

router.post('/', auth(), ExperienceControllers.addExperience);

router.patch('/:id', auth(), ExperienceControllers.updateExperience);

router.delete('/:id', auth(), ExperienceControllers.deleteExperience);

export const ExperienceRoutes = router;
