import { z } from 'zod';

const TechnicalSkillSchema = z.object({
  icon: z.string().min(1, 'Icon is required'),
  source: z.string().min(1, 'Source is required'),
  label: z.string().min(1, 'Label is required'),
});

const SoftSkillSchema = z.object({
  content: z.string().min(1, 'Content is required'),
});

const SkillSchema = z.object({
  body: z.object({
    type: z
      .enum(['technical', 'soft'])
      .refine((type) => ['technical', 'soft'].includes(type), {
        message: "Invalid type. Must be 'technical' or 'soft'",
      }),
    data: z.union([TechnicalSkillSchema, SoftSkillSchema]),
  }),
});

export const SkillValidations = { SkillSchema };
