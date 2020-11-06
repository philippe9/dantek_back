import knex from '../db_config';
import { TABLES } from '../global/vars';
// knex.select()

const Langue = {};

Langue.getLangues = () => {
    return knex.select().from(TABLES.LANGUE).then((langues, err) => {

        return new Promise(function(resolve, reject) {
            resolve(langues);
            reject(err);
        })
    }).catch((error) => {
        // console.log(error);
        return new Promise(function(resolve, reject) {
            reject(error);
        })
    })

}

Langue.getLangueById = (params) => {
    return knex.select().from(TABLES.LANGUE).where(params).then((langue, err) => {

        return new Promise(function(resolve, reject) {
            if (langue.length > 0) {
                resolve(langue[0]);
            } else {
                resolve({});
            }
            reject(err);
        })
    }).catch((error) => {
        return error;
    })

}
Langue.getTextLangue = (params) => {
    return knex.select().from(TABLES.TEXT_LANGUE).where(params).then((langue, err) => {

        return new Promise(function(resolve, reject) {
            if (langue.length > 0) {
                resolve(langue[0]);
            } else {
                resolve({});
            }
            reject(err);
        })
    }).catch((error) => {
        return error;
    })

}
Langue.getNomsLangue = (params) => {
    return knex.select().from(TABLES.R_AVOIR_AUTRE_NOM).where(params).then((langues, err) => {

        return new Promise(function(resolve, reject) {

            resolve(langues);

            reject(err);
        })
    }).catch((error) => {
        return error;
    })
}

Langue.langue = (data) => {
    return knex(TABLES.LANGUE).insert(data).then((langue, err) => {

        return new Promise(function(resolve, reject) {
            resolve(langue);
            reject(err);
        })
    }).catch((error) => {
        return error;
    })
}
Langue.langue = (data) => {
    return knex(TABLES.LANGUE).insert(data).then((langue, err) => {

        return new Promise(function(resolve, reject) {
            resolve(langue);
            reject(err);
        })
    }).catch((error) => {
        return error;
    })
}
Langue.nomLangue = (data) => {
    return knex(TABLES.R_AVOIR_AUTRE_NOM).insert(data).then((langue, err) => {

        return new Promise(function(resolve, reject) {
            resolve(langue);
            reject(err);
        })
    }).catch((error) => {
        return error;
    })
}
Langue.textLangue = (data) => {
    return knex(TABLES.TEXT_LANGUE).insert(data).then((langue, err) => {

        return new Promise(function(resolve, reject) {
            resolve(langue);
            reject(err);
        })
    }).catch((error) => {
        return error;
    })
}

export default Langue;