const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { user, password } = request.body;

    const users = await connection('users')
    .where('user', user )
    .where('password', password)
    .select('id','name')
    .first();

    if (!users){
      return response.status(400).json({ error: 'Usuário ou Senha Inválido!' });
    }

    return response.json(users);
  }

};
