# Projeto Cypress - Teste Técnico Contato Seguro

Este projeto foi desenvolvido como parte de um teste técnico para a empresa Contato Seguro. Ele contém testes automatizados para o formulário de cadastro ("signup") utilizando Cypress e seguindo o padrão Page Objects.

## Estrutura do Projeto

├── cypress
│ ├── e2e
│ │ └── contatoseguro
│ │ └── signup.cy.js
| ├── fixtures
│ ├── page
│ │ ├── elements.js
│ │ └── index.js
│ ├── support
│ └── commands.js
│ └── e2e.js
├── .gitignore
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md

### Descrição dos Arquivos e Diretórios utilizados para o projeto

- `cypress/e2e/contatoseguro/signup.cy.js`: Contém dados de teste.
- `cypress/page`: Contém os arquivos de Page Objects. `elements.js` representa os elementos da homepage e formulário de cadastro e `index.js` representa as ações que os elementos capturados poderão realizar.
- `cypress.json`: Arquivo de configuração do Cypress.
- `package.json`: Arquivo de configuração do projeto, incluindo dependências e scripts.

## Pré-requisitos

- Node.js
- npm ou yarn

## Instalação

1. Clone este repositório:
   git clone https://github.com/seu-usuario/cypress-contato-seguro.git
   cd cypress-contato-seguro
2. Instale as dependências do projeto:
   `npm install` ou `yarn install`

## Executando os testes

Para executar no modo interativo, use o comando:
`npx cypress open` ou `yarn cypress open`

Para o modo headless:
`npx cypress run` ou `yarn cypress run`
