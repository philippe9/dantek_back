import express from 'express';

// Controller imports
import langueController from './controllers/langueController';
import competenceController from './controllers/competenceController';

const routes = express();

// Basic routes
routes.get('/', langueController.getAllLangues);

// Langue routes
routes.get('/Langue/langues', langueController.getAllLangues);
routes.get('/Langue/noms_langue/:id_langue', langueController.getNomsLangue);
routes.get('/Langue/noms_langue_autre/:id_langue_autre', langueController.getNomsLangue);
routes.get('/Langue/text_langue/:id_langue', langueController.getTextLangue);
routes.get('/Langue/getLangue/:id_langue', langueController.getLangue);
routes.post('/Langue/langue', langueController.postLangue)
routes.post('/Langue/nom_langue', langueController.postNomLangue)
routes.post('/Langue/text_langue', langueController.postTextLangue)


// Competences routes

routes.get('/Competence/competences', competenceController.getCompetences);
routes.get('/Competence/competence/:id_competence', competenceController.getCompetence);
routes.get('/Competence/textesCompetence/:id_langue', competenceController.getTextesCompetence);
routes.get('/Competence/competencesLangue', competenceController.getCompetencesLangue);
routes.post('/Competence/competenceLangue', competenceController.postCompetenceLangue)
routes.post('/Competence/updateCompetenceLangue', competenceController.postUpdateCompetenceLangue)
routes.post('/Competence/deleteCompetenceLangue', competenceController.postDeleteCompetenceLangue)

export default routes;

console.log('Executing Server: routes.js ...');