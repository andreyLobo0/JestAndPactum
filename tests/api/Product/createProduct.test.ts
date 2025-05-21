import { spec } from 'pactum';
import { faker } from '@faker-js/faker';
import { createProductsSchema } from './schemas';
import { defaultConfig } from '../../config/defaultConfig';

defaultConfig();

describe('Product - Register Product', () => {
  let payload: object;
  let token: string;
  describe('Success Cases', () => {
    beforeAll(async () => {
      token = await spec()
        // Arrange
        // Act
        .post('/login')
        .withJson({
          email: 'fulano2@qa.com',
          password: 'teste',
        })
        // Assert
        .expectStatus(200)
        .returns('res.body.authorization');
    });
    it('T01 - Register Product - Should return status 200 and an object containing message and _id of registered Product', async () => {
      // Arrange
      payload = {
        nome: faker.commerce.productName(),
        preco: faker.number.int({ min: 1, max: 100 }),
        descricao: faker.commerce.productDescription(),
        quantidade: faker.number.int({ min: 1, max: 100 }),
      };
      await spec()
        // Act
        .post('/produtos')
        .withHeaders('Authorization', token)
        .withJson(payload)
        // Assert
        .expectStatus(201)
        .expectJsonSchema(createProductsSchema);
    });
  });
});
