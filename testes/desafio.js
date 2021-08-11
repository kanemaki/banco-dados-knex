const db = require('../config/db')

async function salvarUsuario(nome, email, senha) {
    let usuario = await db('usuarios')
        .where({ email }).first()

        if(!usuario) {
            let [ id ] = await db('usuarios')
                .insert({ nome, email, senha })
            usuario = await db('usuarios')
                .where( { id } ).first()    
        }
}

async function salvarPerfil(nome, rotulo) {

}

async function adicionaPerfis(usuario, ...perfis) {

}

async function executar() {
    const usuario = await salvarUsuario( 'Ana', 'ana@empresa.com.br', '123456')
    const perfilA = await salvarPerfil('rh', 'Pessoal')
    const perfilB = await salvarPerfil('fin', 'Financeiro')

    console.log(ususario)
    console.log(perfilA)
    console.log(perfilB)

    await adicionaPerfis(usuario, perfilA, perfilB)
}

executar()
    .catch(err => console.log(err))
    .finally(() => db.destroy())