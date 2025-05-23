import { request, response } from 'pactum';

const environments: { [key: string]: string } = {
  dev: 'https://serverest.dev',
  staging: 'https://serverest.staging',
  qa: 'https://serverest.qa',
  // Adiciona outros ambientes conforme necessário
};
const targetEnv = process.env.ENV || 'qa';
const baseURL = environments[targetEnv];

if (!baseURL) {
  throw new Error(`Ambiente "${targetEnv}" não definido.`);
}

export const defaultConfig = () => {
  // Request default configuration
  request.setBaseUrl(baseURL);
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
