import { model, Schema } from 'mongoose';
import { TSkill } from './skill.interface';

const skillSchema = new Schema<TSkill>(
  {
    technical: [
      {
        icon: { type: String, required: true },
        source: { type: String, required: true },
        label: { type: String, required: true },
      },
    ],
    soft: [
      {
        content: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const Skill = model<TSkill>('Skill', skillSchema);
