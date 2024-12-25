import catchAsync from '../../utils/catch-async';
import sendResponse from '../../utils/send-response';
import { SkillServices } from './skill.service';

const addSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.addSkillIntoDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill added successfully',
    data: result,
  });
});

const getSkills = catchAsync(async (req, res) => {
  const result = await SkillServices.getSkillsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skills fetched successfully',
    data: result,
  });
});

export const SkillController = {
  addSkill,
  getSkills,
};
