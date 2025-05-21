import { spec } from 'pactum';
import {
  loginSucessSchema,
  loginInvalidSchema,
  loginMandatoryItemsSchema,
} from './schemas';
import { defaultConfig } from '../../config/defaultConfig';

defaultConfig();

describe('Login - Make to login', () => {
  describe('Success Cases', () => {
    it('T01 - Successful login - Should return status 200 and an object containing message and token', async () => {
      await spec()
        // Arrange
        // Act
        .post('/login')
        .withJson({
          email: 'fulano2@qa.com',
          password: 'teste',
        })
        // Assert
        .expectStatus(200)
        .expectJsonSchema(loginSucessSchema);
    });
  });
  describe('Error Cases', () => {
    it('T02 - Invalid credentials - Should return status 401 and an object containing Message', async () => {
      await spec()
        // Arrange
        // Act
        .post('/login')
        .withJson({
          email: 'fulano2@qa.com',
          password: 'testeError',
        })
        // Assert
        .expectStatus(401)
        .expectJsonSchema(loginInvalidSchema);
    });
    it('T03 - Missing required fields - Should return status 400 and an object containing the mandatory items for request body', async () => {
      await spec()
        // Arrange
        // Act
        .post('/login')
        .withJson({})
        // Assert
        .expectStatus(400)
        .expectJsonSchema(loginMandatoryItemsSchema);
    });
  });
});
