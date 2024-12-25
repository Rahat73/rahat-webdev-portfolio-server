import { Router } from 'express';
import { ProjectControllers } from './project.controller';
import auth from '../../middlewares/auth';

const router = Router();

router.get('/', ProjectControllers.getProjects);

router.get('/:id', ProjectControllers.getProjectById);

router.post('/', auth(), ProjectControllers.createProject);

export const ProjectRoutes = router;
