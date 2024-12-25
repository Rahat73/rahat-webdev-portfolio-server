import { Router } from 'express';
import { SkillRoutes } from '../modules/skill/skill.route';
import { AuthRoutes } from '../modules/auth/auth.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/skill',
    route: SkillRoutes,
  },
];

moduleRoutes.map((route) => router.use(route.path, route.route));

export default router;
