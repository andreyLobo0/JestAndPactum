import { spec } from 'pactum';
import { getUsersSchema } from './schemas';
import { defaultConfig } from '../../config/defaultConfig';

defaultConfig();

describe('Users - Get registered users', () => {
  describe('Success Cases', () => {
    it('T01 - Get all users - Should return status 200 and an object containing all registered users', async () => {
      await spec()
        // Arrange
        // Act
        .get('/usuarios')
        // Assert
        .expectStatus(200)
        .expectJsonSchema(getUsersSchema);
    });
    it('T02 - Get user by name  - Should return status 200 and an object containing the user searched by name', async () => {
      await spec()
        // Arrange
        // Act
        .get('/usuarios')
        .withQueryParams('nome', 'Fulano da Silva')
        // Assert
        .expectStatus(200)
        .expectBodyContains('Fulano da Silva')
        .expectJsonSchema(getUsersSchema);
    });
    it('T03 - Get user by _id  - Should return status 200 and an object containing the user searched by _id', async () => {
      await spec()
        // Arrange
        // Act
        .get('/usuarios')
        .withQueryParams('_id', '0uxuPY0cbmQhpEz1')
        // Assert
        .expectStatus(200)
        .expectBodyContains('0uxuPY0cbmQhpEz1')
        .expectJsonSchema(getUsersSchema);
    });
    it('T04 - Get user by email  - Should return status 200 and an object containing the user searched by email', async () => {
      await spec()
        // Arrange
        // Act
        .get('/usuarios')
        .withQueryParams('email', 'fulano@qa.com')
        // Assert
        .expectStatus(200)
        .expectBodyContains('fulano@qa.com')
        .expectJsonSchema(getUsersSchema);
    });
    it('T05 - Get user by administrators  - Should return status 200 and an object containing the user searched by administrators', async () => {
      const response = await spec()
        // Arrange
        // Act
        .get('/usuarios')
        .withQueryParams('administrador', 'true')
        // Assert
        .expectStatus(200)
        .expectJsonSchema(getUsersSchema);
      const usersAdmin = response.body.usuarios;
      const isAdmin = usersAdmin.every(
        (user: { administrador: string }) => user.administrador === 'true',
      );
      expect(isAdmin).toBe(true);
    });
  });
});
