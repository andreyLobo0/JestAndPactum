export default {
  $schema: 'http://json-schema.org/draft-04/schema#',
  description: '',
  type: 'object',
  properties: {
    quantidade: {
      type: 'number',
    },
    usuarios: {
      type: 'array',
      uniqueItems: true,
      minItems: 1,
      items: {
        required: ['nome', 'email', 'password', 'administrador', '_id'],
        properties: {
          nome: {
            type: 'string',
            minLength: 1,
          },
          email: {
            type: 'string',
            minLength: 1,
          },
          password: {
            type: 'string',
            minLength: 1,
          },
          administrador: {
            type: 'string',
            minLength: 1,
          },
          _id: {
            type: 'string',
            minLength: 1,
          },
        },
      },
    },
  },
  required: ['quantidade', 'usuarios'],
};
