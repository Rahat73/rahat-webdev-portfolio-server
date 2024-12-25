import catchAsync from '../../utils/catch-async';
import sendResponse from '../../utils/send-response';
import { ExperienceServices } from './experience.service';

const addExperience = catchAsync(async (req, res) => {
  const experience = await ExperienceServices.addExperienceIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Experience added successfully',
    data: experience,
  });
});

const getExperiences = catchAsync(async (req, res) => {
  const result = await ExperienceServices.getExperiencesFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Experiences fetched successfully',
    data: result,
  });
});

const updateExperience = catchAsync(async (req, res) => {
  const result = await ExperienceServices.updateExperienceIntoDB(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Experience updated successfully',
    data: result,
  });
});

const deleteExperience = catchAsync(async (req, res) => {
  const result = await ExperienceServices.deleteExperienceFromDB(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Experience deleted successfully',
    data: result,
  });
});

export const ExperienceControllers = {
  addExperience,
  getExperiences,
  updateExperience,
  deleteExperience,
};
