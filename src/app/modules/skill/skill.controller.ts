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

const updateSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.updateSkillIntoDB(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill updated successfully',
    data: result,
  });
});

const deleteSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.deleteSkillFromDB(
    req.params.id,
    req.body.type,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill deleted successfully',
    data: result,
  });
});

export const SkillController = {
  addSkill,
  getSkills,
  updateSkill,
  deleteSkill,
};
