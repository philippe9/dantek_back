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
    return knex.select().from(TABLES.LANGUE).where(params).then((langue) => {

        return new Promise(function(resolve, reject) {
            resolve(langue);
            reject(err);
        })
    }).catch((error) => {
        return error;
    })

}

export default Langue;