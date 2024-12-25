import { Router } from 'express';
import auth from '../../middlewares/auth';
import { BlogControllers } from './blog.controller';

const router = Router();

router.get('/', BlogControllers.getAllBlogs);

router.get('/:id', BlogControllers.getBlogById);

router.post('/', auth(), BlogControllers.createBlog);

router.patch('/:id', auth(), BlogControllers.updateBlog);

router.delete('/:id', auth(), BlogControllers.deleteBlog);

export const BlogRoutes = router;
