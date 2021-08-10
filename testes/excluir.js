const db = require('../config/db')

// excluir por id
db('usuarios').where({ id: 1})
    .delete()
    .then(res => console.log(res))
    .finally(() => db.destroy())

// created_at
// updated_at
// deleted_at

// excluir tudo
db('perfis')
    .delete()
    .then()
    .then(res => console.log(res))
    .finally(() => db.destroy())