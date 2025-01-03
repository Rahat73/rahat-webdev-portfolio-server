import catchAsync from '../../utils/catch-async';
import sendResponse from '../../utils/send-response';
import { BlogServices } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
  const blog = await BlogServices.createBlogIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog created successfully',
    data: blog,
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  const blogs = await BlogServices.getAllBlogsFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blogs fetched successfully',
    data: blogs,
  });
});

const getBlogById = catchAsync(async (req, res) => {
  const blog = await BlogServices.getBlogByIdFromDB(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog fetched successfully',
    data: blog,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const blog = await BlogServices.updateBlogIntoDB(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog updated successfully',
    data: blog,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.deleteBlogFromDB(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog deleted successfully',
    data: result,
  });
});

export const BlogControllers = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
