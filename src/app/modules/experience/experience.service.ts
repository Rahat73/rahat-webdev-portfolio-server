import { TExperience } from './experience.interface';
import { Experience } from './experience.model';

const addExperienceIntoDB = async (experience: TExperience) => {
  return await Experience.create(experience);
};

const getExperiencesFromDB = async () => {
  return await Experience.find();
};

const updateExperienceIntoDB = async (id: string, experience: TExperience) => {
  return await Experience.findByIdAndUpdate(id, experience, { new: true });
};

const deleteExperienceFromDB = async (id: string) => {
  return await Experience.findByIdAndDelete(id);
};

export const ExperienceServices = {
  addExperienceIntoDB,
  getExperiencesFromDB,
  updateExperienceIntoDB,
  deleteExperienceFromDB,
};
