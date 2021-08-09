const db = require('../config/db')

db('perfis')
    .then(res => res.map(p => p.nome))
    .then(nomes => console.log(nomes))
    .finally(() => db.destroy())
