const connection = require('../database/connection');

module.exports = {
  async index(request, Response) {
    const { page = 1 } = request.query;

    const [count] = await connection('ordens').count();

    const ordens = await connection('ordens')
      .limit(5)
      .offset((page - 1) * 5)
      .select('*');

    Response.header('X-Total-Count', count['count(*)']);

    return Response.json(ordens);
  },

  async create(request, Response) {
    const { description } = request.body;

    const [id] = await connection('ordens').insert({
      description,
    });

    return Response.json({ id });
  }


};
