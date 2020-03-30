const generateUniqueId = require('./../utils/generateUniqueId');
const connection = require('./../database/connection');

module.exports = {
  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.send(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, uf, city } = request.body;

    const id = generateUniqueId(); // 9a12d804

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.send({ id });
  }
};
