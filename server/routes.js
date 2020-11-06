import express from 'express';

// Controller imports
import langueController from './controllers/langueController';

const routes = express();

// Basic routes
routes.get('/', langueController.getAllLangues);

// Langue routes
routes.get('/Langue/getAllLangues', langueController.getAllLangues);
routes.get('/Langue/getLangue/:id_langue', langueController.getLangue);

// // Post routes
// routes.post('/post', postController.post); // create post
// routes.get('/posts', postController.getAll); // get/list posts

// // Comment routes
// routes.post('/comment', commentController.post); // comment on an existing post

export default routes;

console.log('Executing Server: routes.js ...');