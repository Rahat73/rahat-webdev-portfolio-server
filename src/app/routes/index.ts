import { Router } from 'express';
import { SkillRoutes } from '../modules/skill/skill.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { BlogRoutes } from '../modules/blog/blog.route';
import { ExperienceRoutes } from '../modules/experience/experience.route';
import { ProjectRoutes } from '../modules/project/project.route';

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
  {
    path: '/experience',
    route: ExperienceRoutes,
  },
  {
    path: '/blog',
    route: BlogRoutes,
  },
  {
    path: '/project',
    route: ProjectRoutes,
  },
];

moduleRoutes.map((route) => router.use(route.path, route.route));

export default router;
