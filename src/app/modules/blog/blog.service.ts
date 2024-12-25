import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (blog: TBlog) => {
  const result = await Blog.create(blog);
  return result;
};

const getAllBlogsFromDB = async () => {
  const result = await Blog.find();
  return result;
};

const getBlogByIdFromDB = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};

const updateBlogIntoDB = async (id: string, blog: TBlog) => {
  const result = await Blog.findByIdAndUpdate(id, blog, { new: true });
  return result;
};

const deleteBlogFromDB = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  getBlogByIdFromDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
};
