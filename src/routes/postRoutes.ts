import { Router } from 'express';
import { createPost, getPosts, getPostById, updatePost, deletePost } from '../controllers/postController';
import auth from '../middleware/auth';

const router = Router();

router.get('/', getPosts);

router.get('/:id', getPostById);

router.post('/', auth, createPost);

router.put('/:id', auth, updatePost);

router.delete('/:id', auth, deletePost);

export default router;
