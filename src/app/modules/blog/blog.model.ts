import { Schema } from 'mongoose';
import { model } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>({
  content: {
    type: String,
    required: true,
  },
});

export const Blog = model<TBlog>('Blog', blogSchema);
