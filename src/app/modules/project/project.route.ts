import { Router } from 'express';
import { ProjectControllers } from './project.controller';
import auth from '../../middlewares/auth';

const router = Router();

router.get('/', ProjectControllers.getProjects);

router.get('/:id', ProjectControllers.getProjectById);

router.post('/', auth(), ProjectControllers.createProject);

router.patch('/:id', auth(), ProjectControllers.updateProject);

router.delete('/:id', auth(), ProjectControllers.deleteProject);

export const ProjectRoutes = router;
