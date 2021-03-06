const request = require('supertest');
const app = require('./../../src/app');
const connection = require('./../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(() => {
    connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'Jose Marcos',
        email: 'comunicacao@ios.org',
        whatsapp: '5511888889999',
        uf: 'SC',
        city: 'Joinville'
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
