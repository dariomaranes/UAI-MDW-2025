import express from 'express';

import controllers from './controllers';

const router = express.Router();

router.post('/', controllers.createPost);
router.get('/', controllers.getAllPosts);
router.get('/:id', controllers.getPostById);
router.patch('/:id', controllers.updatePost);
router.delete('/hard/:id', controllers.hardDeletePost);
router.patch('/soft/:id', controllers.softDeletePost);

export default router;
