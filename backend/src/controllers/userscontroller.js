
const connection = require('../database/connection');

module.exports = {
  async index(request, Response) {
    const users = await connection('users').select('*');

    return Response.json(users);
  },

  async create(request, Response) {
    const { name, user, password, status } = request.body;

  const [id] = await connection('users').insert({
    name,
    user,
    password,
    status,
  });

  return Response.json({id});
  }
};
