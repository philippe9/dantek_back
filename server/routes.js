import express from 'express';

// Controller imports
import langueController from './controllers/langueController';

const routes = express();

// Basic routes
routes.get('/', langueController.getAllLangues);

// // User routes
// routes.post('/signup', userController.post);
routes.get('/getAllLangues', langueController.getAllLangues);

// // Post routes
// routes.post('/post', postController.post); // create post
// routes.get('/posts', postController.getAll); // get/list posts

// // Comment routes
// routes.post('/comment', commentController.post); // comment on an existing post

export default routes;

console.log('Executing Server: routes.js ...');