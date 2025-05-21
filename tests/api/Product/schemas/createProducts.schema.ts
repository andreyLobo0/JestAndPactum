export default {
  $schema: 'http://json-schema.org/draft-04/schema#',
  description: '',
  type: 'object',
  properties: {
    message: {
      type: 'string',
      minLength: 1,
    },
    _id: {
      type: 'string',
      minLength: 1,
    },
  },
  required: ['message', '_id'],
};
