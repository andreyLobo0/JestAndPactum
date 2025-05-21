export default {
  $schema: 'http://json-schema.org/draft-04/schema#',
  description: '',
  type: 'object',
  properties: {
    message: {
      type: 'string',
      minLength: 1,
    },
    authorization: {
      type: 'string',
      minLength: 1,
    },
  },
  required: ['message', 'authorization'],
};
