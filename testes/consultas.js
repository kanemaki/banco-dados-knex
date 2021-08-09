const db = require('../config/db')

//  db('perfis')
//    .then(res => res.map(p => p.nome))
//    .then(nomes => console.log(nomes))
//    .finally(() => db.destroy())


//    db('perfis').select('nome', 'id')
//        .then(res => console.log(res))
//        .finally(() => db.destroy())

    db.select('nome', 'id')
        .from('perfis')
        .then(res => console.log(res))
        .finally(() => db.destroy())        