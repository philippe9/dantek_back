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
    // return knex.select().from(TABLES.LANGUE).where(TABLES.LANGUE + '.id_langue', '=', params.id_langue).join(TABLES.R_AVOIR_COMPETENCE_LANGUE, TABLES.R_AVOIR_COMPETENCE_LANGUE + '.id_langue', TABLES.LANGUE + '.id_langue').join(TABLES.COMPETENCE, TABLES.COMPETENCE + '.id_competence', TABLES.R_AVOIR_COMPETENCE_LANGUE + '.id_competence').join(TABLES.NIVEAU, TABLES.NIVEAU + '.id_niveau', TABLES.R_AVOIR_COMPETENCE_LANGUE + '.id_niveau').then((competences, err) => {

    //     return new Promise(function(resolve, reject) {
    //         resolve(competences);
    //         reject(err);
    //     })
    // }).catch((error) => {
    //     // console.log(error);
    //     return new Promise(function(resolve, reject) {
    //         reject(error);
    //     })
    // })
    return knex.select(TABLES.R_AVOIR_AUTRE_NOM + ".*").from(TABLES.R_AVOIR_AUTRE_NOM).where(TABLES.R_AVOIR_AUTRE_NOM + '.id_langue_autre', '=', params.id_langue).join(TABLES.R_AVOIR_COMPETENCE_LANGUE, TABLES.R_AVOIR_COMPETENCE_LANGUE + '.id_langue', TABLES.R_AVOIR_AUTRE_NOM + '.id_langue').groupBy('id_langue').then((competences, err) => {
        return new Promise(function(resolve, reject) {

            competences.forEach((element, index) => {
                knex.select().from(TABLES.R_AVOIR_COMPETENCE_LANGUE).where(TABLES.R_AVOIR_COMPETENCE_LANGUE + '.id_langue', '=', element.id_langue).where(TABLES.R_AVOIR_TEXT_COMPETENCE + '.id_langue', '=', params.id_langue).where(TABLES.R_AVOIR_COMPETENCE_LANGUE + '.id_niveau', '=', 1).join(TABLES.R_AVOIR_TEXT_COMPETENCE, TABLES.R_AVOIR_TEXT_COMPETENCE + '.id_competence', TABLES.R_AVOIR_COMPETENCE_LANGUE + '.id_competence').then((competence) => {
                    element.niveau_1 = competence[0];
                }).then(() => {
                    knex.select().from(TABLES.R_AVOIR_COMPETENCE_LANGUE).where(TABLES.R_AVOIR_COMPETENCE_LANGUE + '.id_langue', '=', element.id_langue).where(TABLES.R_AVOIR_TEXT_COMPETENCE + '.id_langue', '=', params.id_langue).where(TABLES.R_AVOIR_COMPETENCE_LANGUE + '.id_niveau', '=', 2).join(TABLES.R_AVOIR_TEXT_COMPETENCE, TABLES.R_AVOIR_TEXT_COMPETENCE + '.id_competence', TABLES.R_AVOIR_COMPETENCE_LANGUE + '.id_competence').then((competence) => {
                        // console.log(competence)
                        element.niveau_2 = competence[0];

                    })
                }).then(() => {
                    // knex.select().from(TABLES.R_AVOIR_COMPETENCE_LANGUE).where('id_langue', '=', element.id_langue).where('id_niveau', '=', '3').then((competence) => {
                    knex.select().from(TABLES.R_AVOIR_COMPETENCE_LANGUE).where(TABLES.R_AVOIR_COMPETENCE_LANGUE + '.id_langue', '=', element.id_langue).where(TABLES.R_AVOIR_TEXT_COMPETENCE + '.id_langue', '=', params.id_langue).where(TABLES.R_AVOIR_COMPETENCE_LANGUE + '.id_niveau', '=', 3).join(TABLES.R_AVOIR_TEXT_COMPETENCE, TABLES.R_AVOIR_TEXT_COMPETENCE + '.id_competence', TABLES.R_AVOIR_COMPETENCE_LANGUE + '.id_competence').then((competence) => {
                        element.niveau_3 = competence[0];
                    }).then(() => {
                        if (index == competences.length - 1) {
                            resolve(competences);
                        }

                    })
                }).catch((error) => {
                    // console.log(error);
                    // return new Promise(function(resolve, reject) {
                    reject(error);
                    // })
                })
            });

            // return new Promise(function(resolve, reject) {

            // reject(err);
            // })
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