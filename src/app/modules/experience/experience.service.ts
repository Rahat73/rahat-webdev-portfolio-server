import { TExperience } from './experience.interface';
import { Experience } from './experience.model';

const addExperienceIntoDB = async (experience: TExperience) => {
  return await Experience.create(experience);
};

const getExperiencesFromDB = async () => {
  return await Experience.find();
};

export const ExperienceServices = {
  addExperienceIntoDB,
  getExperiencesFromDB,
};
