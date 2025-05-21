import { spec } from 'pactum';
import { faker } from '@faker-js/faker';
import { createUsersSchema } from './schemas';
import { defaultConfig } from '../../config/defaultConfig';

defaultConfig();

describe('Users - Register Users', () => {
  let payload: object;
  describe('Success Cases', () => {
    it('T01 - Register Users Admnistrator - Should return status 200 and an object containing message and _id of registered user', async () => {
      // Arrange
      payload = {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.string.uuid(),
        administrador: 'true',
      };
      await spec()
        // Act
        .post('/usuarios')
        .withJson(payload)
        // Assert
        .expectStatus(201)
        .expectJsonSchema(createUsersSchema);
    });
    it('T02 - Register Users - Should return status 200 and an object containing message and _id of registered user', async () => {
      // Arrange
      payload = {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.string.uuid(),
        administrador: 'false',
      };
      await spec()
        // Act
        .post('/usuarios')
        .withJson(payload)
        // Assert
        .expectStatus(201)
        .expectJsonSchema(createUsersSchema);
    });
  });
});
