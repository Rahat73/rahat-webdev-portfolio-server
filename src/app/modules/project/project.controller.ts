import catchAsync from '../../utils/catch-async';
import sendResponse from '../../utils/send-response';
import { ProjectServices } from './project.service';

const createProject = catchAsync(async (req, res) => {
  const project = await ProjectServices.createProjectIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project created successfully',
    data: project,
  });
});

const getProjects = catchAsync(async (req, res) => {
  const projects = await ProjectServices.getProjectsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Projects fetched successfully',
    data: projects,
  });
});

const getProjectById = catchAsync(async (req, res) => {
  const project = await ProjectServices.getProjectByIdFromDB(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project fetched successfully',
    data: project,
  });
});

export const ProjectControllers = {
  createProject,
  getProjects,
  getProjectById,
};
