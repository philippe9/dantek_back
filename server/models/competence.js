import knex from '../db_config';
import { TABLES } from '../global/vars';


const Competence = {};




Competence.getCompetences = () => {
    return knex.select().from(TABLES.COMPETENCE).then((competences, err) => {

        return new Promise(function(resolve, reject) {
            resolve(competences);
            reject(err);
        })
    }).catch((error) => {
        // console.log(error);
        return new Promise(function(resolve, reject) {
            reject(error);
        })
    })

}
Competence.getCompetenceById = (params) => {
    return knex.select().from(TABLES.COMPETENCE).where(params).then((competence, err) => {

        return new Promise(function(resolve, reject) {
            if (competence.length > 0) {
                resolve(competence[0]);
            } else {
                resolve({});
            }
            reject(err);
        })
    }).catch((error) => {
        return error;
    })

}
Competence.getTextesCompetence = (params) => {
    return knex.select().from(TABLES.R_AVOIR_TEXT_COMPETENCE).where(params).then((competences, err) => {

        return new Promise(function(resolve, reject) {
            resolve(competences);
            reject(err);
        })
    }).catch((error) => {
        // console.log(error);
        return new Promise(function(resolve, reject) {
            reject(error);
        })
    })

}
Competence.getCompetencesLangue = (params) => {
    return knex.select().from(TABLES.LANGUE).where(TABLES.LANGUE + '.id_langue', '=', params.id_langue).join(TABLES.R_AVOIR_COMPETENCE_LANGUE, TABLES.R_AVOIR_COMPETENCE_LANGUE + '.id_langue', TABLES.LANGUE + '.id_langue').join(TABLES.COMPETENCE, TABLES.COMPETENCE + '.id_competence', TABLES.R_AVOIR_COMPETENCE_LANGUE + '.id_competence').join(TABLES.NIVEAU, TABLES.NIVEAU + '.id_niveau', TABLES.R_AVOIR_COMPETENCE_LANGUE + '.id_niveau').then((competences, err) => {

        return new Promise(function(resolve, reject) {
            resolve(competences);
            reject(err);
        })
    }).catch((error) => {
        // console.log(error);
        return new Promise(function(resolve, reject) {
            reject(error);
        })
    })

}

Competence.competenceLangue = (params) => {
    return knex(TABLES.R_AVOIR_COMPETENCE_LANGUE).insert(data).then((competence, err) => {

        return new Promise(function(resolve, reject) {
            resolve(competence);
            reject(err);
        })
    }).catch((error) => {
        return error;
    })

}
Competence.deleteCompetenceLangue = (params) => {
    return knex(TABLES.R_AVOIR_COMPETENCE_LANGUE).where(data).del().then((competence, err) => {

        return new Promise(function(resolve, reject) {
            resolve(competence);
            reject(err);
        })
    }).catch((error) => {
        return error;
    })

}
Competence.updateCompetenceLangue = (params) => {
    return knex(TABLES.R_AVOIR_COMPETENCE_LANGUE).where({ id_langue: params.id_langue, id_niveau: params.id_niveau }).update(data).then((competence, err) => {

        return new Promise(function(resolve, reject) {
            resolve(competence);
            reject(err);
        })
    }).catch((error) => {
        return error;
    })

}
export default Competence;