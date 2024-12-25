import AppError from '../../errors/AppError';
import { TSoftSkill, TTechnicalSkill } from './skill.interface';
import { Skill } from './skill.model';

const addSkillIntoDB = async (payload: {
  type: string;
  data: TTechnicalSkill | TSoftSkill;
}) => {
  const { type, data } = payload;

  if (!['technical', 'soft'].includes(type)) {
    throw new AppError(
      400,
      'Invalid type. Allowed values are "technical" or "soft".',
    );
  }

  let skillDoc = await Skill.findOne();

  if (!skillDoc) {
    skillDoc = new Skill({ technical: [], soft: [] });
  }

  if (type === 'technical') {
    skillDoc.technical.push(data as TTechnicalSkill);
  } else if (type === 'soft') {
    skillDoc.soft.push(data as TSoftSkill);
  }

  const updatedSkill = await skillDoc.save();
  return updatedSkill;
};

const getSkillsFromDB = async () => {
  const skills = await Skill.find();
  return skills;
};

export const SkillServices = {
  addSkillIntoDB,
  getSkillsFromDB,
};
