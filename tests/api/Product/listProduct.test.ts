import { spec } from 'pactum';
import { listProductSchema } from './schemas';
import { defaultConfig } from '../../config/defaultConfig';

defaultConfig();

describe('Product - Get registered Product', () => {
  describe('Success Cases', () => {
    it('T01 - Get all products - Should return status 200 and an object containing all registered products', async () => {
      await spec()
        // Arrange
        // Act
        .get('/produtos')
        // Assert
        .expectStatus(200)
        .expectJsonSchema(listProductSchema);
    });
    it('T02 - Get product by name - Should return status 200 and an object containing the product searched by name', async () => {
      await spec()
        // Arrange
        // Act
        .get('/produtos')
        .withQueryParams('nome', 'Practical Plastic Car')
        // Assert
        .expectStatus(200)
        .expectBodyContains('Practical Plastic Car')
        .expectJsonSchema(listProductSchema);
    });
    it('T03 - Get product by _id  - Should return status 200 and an object containing the product searched by _id.', async () => {
      await spec()
        // Arrange
        // Act
        .get('/produtos')
        .withQueryParams('_id', '2d0FFtnYVflbhXjg')
        // Assert
        .expectStatus(200)
        .expectBodyContains('2d0FFtnYVflbhXjg')
        .expectJsonSchema(listProductSchema);
    });
    it('T03 - Get product by quantidade  - Should return status 200 and an object containing the product searched by quantidade.', async () => {
      await spec()
        // Arrange
        // Act
        .get('/produtos')
        .withQueryParams('quantidade', '100')
        // Assert
        .expectStatus(200)
        .expectBodyContains('100')
        .expectJsonSchema(listProductSchema);
    });
    it('T04 - Get product by descricao  - Should return status 200 and an object containing the product searched by descricao.', async () => {
      await spec()
        // Arrange
        // Act
        .get('/produtos')
        .withQueryParams(
          'descricao',
          'New Salad model with 83 GB RAM, 471 GB storage, and international features',
        )
        // Assert
        .expectStatus(200)
        .expectBodyContains(
          'New Salad model with 83 GB RAM, 471 GB storage, and international features',
        )
        .expectJsonSchema(listProductSchema);
    });
  });
});
