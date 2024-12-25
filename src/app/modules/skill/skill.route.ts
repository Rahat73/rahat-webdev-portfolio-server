import { Router } from 'express';
import { SkillController } from './skill.controller';
import validationHandler from '../../middlewares/validation-handlers';
import { SkillValidations } from './skill.validation';
import auth from '../../middlewares/auth';

const router = Router();

router.get('/', auth(), SkillController.getSkills);

router.post(
  '/',
  auth(),
  validationHandler(SkillValidations.SkillSchema),
  SkillController.addSkill,
);

export const SkillRoutes = router;
