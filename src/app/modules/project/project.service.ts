import { TProject } from './project.interface';
import { Project } from './project.model';

const createProjectIntoDB = async (project: TProject) => {
  const result = await Project.create(project);
  return result;
};

const getProjectsFromDB = async () => {
  const result = await Project.find();
  return result;
};

const getProjectByIdFromDB = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};

export const ProjectServices = {
  createProjectIntoDB,
  getProjectsFromDB,
  getProjectByIdFromDB,
};
