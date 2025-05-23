# JestAndPactum

![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Pactum](https://img.shields.io/badge/Pactum-4B32C3?style=for-the-badge&logo=testing-library&logoColor=white)  
![API](https://img.shields.io/badge/API-Testing-49CC90?style=for-the-badge&logo=fastapi&logoColor=white)

## 📝 Projeto

Repositório dedicado à automação de testes de API utilizando Jest como framework de teste e Pactum como biblioteca de teste de API.

## 🔍 Sobre o PactumJS

PactumJS é uma biblioteca de testes de API REST que torna a automação de APIs mais fácil e divertida. Principais recursos:

- **Sintaxe Fluente**: Permite encadear métodos de forma intuitiva
- **Validação de Schema**: Suporte nativo a JSON Schema
- **Assertions Poderosas**: Validações robustas de resposta
- **Mock Server**: Capacidade de simular respostas de API
- **Integração**: Funciona perfeitamente com Jest, Mocha e Cucumber

📚 **Documentação Oficial**: [PactumJS Documentation](https://pactumjs.github.io/)

## 🚀 Características

- **Linguagem**: TypeScript
- **Framework de Teste**: Jest
- **Biblioteca de Teste de API**: Pactum
- **Padrão de Projeto**: Page Objects para APIs
- **Validação de Schema**: JSON Schema

## 📊 Cenários de Teste

### Login

- ✓ Login com sucesso
- ✓ Login com credenciais inválidas
- ✓ Login com campos obrigatórios ausentes

### Usuários

- ✓ Listar todos os usuários
- ✓ Criar novo usuário

### Produtos

- ✓ Listar todos os produtos
- ✓ Criar novo produtos

## 📁 Estrutura do Projeto

```
JestAndPactum/
├── config/                         # Diretório de configurações do projeto
│   └── pactum.config.ts           # Configurações globais do Pactum (timeouts, headers, etc)
├── tests/                         # Diretório principal de testes
│   └── api/                      # Testes de API organizados por domínio
│       ├── Login/               # Testes relacionados ao Login
│       │   ├── login.test.ts   # Casos de teste de login
│       │   └── schemas/        # Schemas JSON para validação de respostas
│       │       ├── index.ts    # Arquivo de exportação central dos schemas
│       │       ├── loginInvalid.schema.ts      # Schema para cenários de login inválido
│       │       ├── loginMandatoryItems.schema.ts # Schema para validação de campos obrigatórios
│       │       └── loginSuccess.schema.ts        # Schema para login com sucesso
│       ├── Product/            # Testes relacionados a Produtos
│       │   ├── createProduct.test.ts  # Testes de criação de produtos
│       │   ├── listProduct.test.ts    # Testes de listagem de produtos
│       │   └── schemas/               # Schemas para validação de produtos
│       │       ├── createProducts.schema.ts  # Schema para criação de produtos
│       │       ├── index.ts           # Exportação central dos schemas de produtos
│       │       └── listProduct.schema.ts     # Schema para listagem de produtos
│       └── Users/              # Testes relacionados a Usuários
│           ├── createUsers.test.ts    # Testes de criação de usuários
│           ├── listUsers.test.ts      # Testes de listagem de usuários
│           └── schemas/               # Schemas para validação de usuários
│               ├── createUsers.schema.ts     # Schema para criação de usuários
│               ├── getUsers.schema.ts        # Schema para busca de usuários
│               └── index.ts           # Exportação central dos schemas de usuários
├── jest.config.js                     # Configuração do Jest (setup, coverage, etc)
├── package.json                       # Dependências e scripts do projeto
└── tsconfig.json                     # Configuração do TypeScript
```

### 📝 Detalhamento da Estrutura

- **`config/`**: Contém todas as configurações globais do projeto

  - Configurações do Pactum como timeouts, headers padrão e base URLs

- **`tests/api/`**: Organização dos testes por domínio

  - Cada pasta representa um domínio específico (Login, Users, Product)
  - Separação clara entre arquivos de teste e schemas

- **`schemas/`**: Validação de respostas da API

  - Cada domínio tem seus próprios schemas
  - Arquivo index.ts centraliza exportações
  - Schemas específicos para diferentes cenários

- **Arquivos de Configuração**:
  - `jest.config.js`: Configurações do framework de teste
  - `tsconfig.json`: Configurações do TypeScript
  - `package.json`: Gerenciamento de dependências e scripts

## 📋 Pré-requisitos

| Tecnologia | Versão Mínima    |
| ---------- | ---------------- |
| Node.js    | 14.x ou superior |
| npm        | 6.x ou superior  |
| TypeScript | 4.x ou superior  |

## 📦 Dependências Principais

```json
{
  "jest": "^29.x",
  "pactum": "^3.x",
  "typescript": "^4.x",
  "@types/jest": "^29.x"
}
```

## 🎯 Começando

1. Clone o repositório:

```bash
git clone
```

2. Instale as dependências:

```bash
npm install
```

## ⚡ Executando os Testes

Para executar todos os testes:

```bash
npm test
```

Para executar um arquivo específico:

```bash
npm test -- tests/api/Login/login.test.ts
```

## 📜 Scripts NPM Disponíveis

```json
{
  "scripts": {
    "test": "jest",
    "test:login": "jest tests/api/Login/*",
    "test:users": "jest tests/api/Users/*",
    "test:product": "jest tests/api/Product/*",
    "lint": "eslint . --ext .ts",
    "format": "prettier --write ."
  }
}
```

## 📌 Notas

- Os testes utilizam a API pública ServeRest (https://serverest.dev) para demonstração
- Schemas JSON são utilizados para validação de respostas
- Configurações padrão do Pactum são centralizadas

---
