import knex from '../db_config';

// knex.select()
const TABLE_NAME = "langue";
const Langue = {};

Langue.getLangues = () => {
    return knex.select().from(TABLE_NAME).then((langues) => {

        return new Promise(function(resolve, reject) {
            resolve(langues);
        }).catch((error) => {
            console.log(error);
        });
    }).catch((error) => {
        return error;
    })

}

export default Langue;