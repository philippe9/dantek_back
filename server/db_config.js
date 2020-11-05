const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'datnek'
    },
    pool: {
        min: 0,
        max: 7
    }
})

export default knex;