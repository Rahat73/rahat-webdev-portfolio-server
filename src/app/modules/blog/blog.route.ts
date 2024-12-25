import { Router } from 'express';
import auth from '../../middlewares/auth';
import { BlogControllers } from './blog.controller';

const router = Router();

router.get('/', BlogControllers.getAllBlogs);

router.get('/:id', BlogControllers.getBlogById);

router.post('/', auth(), BlogControllers.createBlog);

export const BlogRoutes = router;
