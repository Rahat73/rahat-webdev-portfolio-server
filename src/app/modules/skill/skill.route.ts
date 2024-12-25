import { Router } from 'express';
import { SkillController } from './skill.controller';
import validationHandler from '../../middlewares/validation-handlers';
import { SkillValidations } from './skill.validation';
import auth from '../../middlewares/auth';

const router = Router();

router.get('/', SkillController.getSkills);

router.post(
  '/',
  auth(),
  validationHandler(SkillValidations.SkillSchema),
  SkillController.addSkill,
);

router.patch(
  '/:id',
  auth(),
  validationHandler(SkillValidations.SkillSchema),
  SkillController.updateSkill,
);

router.delete('/:id', auth(), SkillController.deleteSkill);

export const SkillRoutes = router;
