import { Router } from 'express';
import { SkillRoutes } from '../modules/skill/skill.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/skill',
    route: SkillRoutes,
  },
];

moduleRoutes.map((route) => router.use(route.path, route.route));

export default router;
