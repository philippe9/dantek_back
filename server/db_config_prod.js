const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'seedscm_datnekuser',
        password: 'datnek123$',
        database: 'seedscm_datnekdb'
    },
    pool: {
        min: 0,
        max: 7
    }
})

export default knex;