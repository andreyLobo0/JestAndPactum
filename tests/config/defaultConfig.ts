import { request, response } from 'pactum';

export const defaultConfig = () => {
  // Request default configuration
  request.setBaseUrl('https://serverest.dev');
  request.setDefaultTimeout(7000);
  request.setDefaultHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });
  // Response default configuration
  response.setDefaultExpectHeaders(
    'content-type',
    'application/json; charset=utf-8',
  );
  response.setDefaultExpectResponseTime(10000);
};
