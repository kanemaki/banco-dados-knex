const db = require('../config/db')

const novoUsuario = {
    nome: 'Pedro',
    email: 'pedro@empresa.com.br',
    senha: '12345678'
}

//update... db('...').where({...}).update({...})

async function exercicio() {
    // count
    const qtde = await db('usuarios')
        .count('* as qtde').first()
}

exercicio()
    .then(usuario => console.log(usuario))
    .finally(() => db.destroy())