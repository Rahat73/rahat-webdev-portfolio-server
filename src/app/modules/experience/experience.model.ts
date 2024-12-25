import { Schema } from 'mongoose';
import { model } from 'mongoose';
import { TExperience } from './experience.interface';

const experienceSchema = new Schema<TExperience>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  description: {
    type: String,
    trim: true,
  },
});

export const Experience = model<TExperience>('Experience', experienceSchema);
