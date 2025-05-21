export default {
  $schema: 'http://json-schema.org/draft-04/schema#',
  description: '',
  type: 'object',
  properties: {
    quantidade: {
      type: 'number',
    },
    produtos: {
      type: 'array',
      uniqueItems: true,
      minItems: 1,
      items: {
        required: ['nome', 'preco', 'descricao', 'quantidade', '_id'],
        properties: {
          nome: {
            type: 'string',
            minLength: 1,
          },
          preco: {
            type: 'number',
          },
          descricao: {
            type: 'string',
            minLength: 1,
          },
          quantidade: {
            type: 'number',
          },
          _id: {
            type: 'string',
            minLength: 1,
          },
        },
      },
    },
  },
  required: ['quantidade', 'produtos'],
};
