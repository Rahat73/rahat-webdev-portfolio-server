import { model, Schema } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  technologies: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  liveLink: {
    type: String,
    trim: true,
  },
  githubLinkFront: {
    type: String,
    trim: true,
  },
  githubLinkBack: {
    type: String,
    trim: true,
  },
});

export const Project = model<TProject>('Project', projectSchema);
