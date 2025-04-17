# 🧪 Desafio Técnico CPB

Este projeto é uma automação de testes end-to-end utilizando **Cypress**, desenvolvida como parte de um desafio técnico do **Comitê Paralímpico Brasileiro (CPB)**. O foco está no fluxo completo de cadastro de clubes, garantindo robustez e confiabilidade por meio de testes limpos e reutilizáveis.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- [faker-js/faker](https://github.com/faker-js/faker)
- [faker-br](https://github.com/felipevolpatto/faker-br)
- JavaScript (ES6+)

---

## 📁 Estrutura do Projeto

```
desafio-tecnico-cpb/
├── cypress/
│   ├── e2e/
│   │   └── register.cy.js                  # Teste principal de registro de clubes
│   ├── support/
│   │   ├── elements/
│   │   │   ├── loginElements.js            # Elementos da página de login
│   │   │   └── registerElements.js         # Elementos da página de registro
│   │   ├── pages/
│   │   │   ├── loginPage.js                # Page object da tela de login
│   │   │   └── registerPage.js             # Page object da tela de registro
│   │   ├── utils/
│   │   │   ├── cnpj-generator.utils.js     # Geração de CNPJ válido
│   │   │   ├── generate-random-date.js     # Data aleatória de fundação
│   │   │   └── generator-sigla.utils.js    # Geração automática de sigla
│   │   ├── actions.js                      # Funções auxiliares genéricas
│   │   ├── commands.js                     # Comandos customizados do Cypress
│   │   └── e2e.js                          # Importação de comandos/utilitários para Cypress
├── cypress.config.js                       # Configuração do Cypress
├── package.json                            # Scripts e dependências do projeto
└── README.md                               # Documentação do projeto
```

---

## ⚙️ Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/CristianoSFMothe/desafio-tecnico-cpb.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd desafio-tecnico-cpb
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

---

## 🧪 Executando os Testes

- Para rodar o Cypress no modo interativo:

  ```bash
  npx cypress open
  ```

- Para rodar os testes em modo headless (linha de comando):

  ```bash
  npx cypress run
  ```

---

## 🔧 Funcionalidades Automatizadas

✔️ Geração automática de dados únicos por execução  
✔️ Preenchimento e submissão do formulário de registro  
✔️ Validação de campos obrigatórios  
✔️ Interceptação e monitoramento de APIs  
✔️ Estrutura modular com page objects e comandos reutilizáveis

---

## 📌 Observações

- A geração de dados com Faker evita duplicações em execuções contínuas.
- As ações foram extraídas para comandos Cypress personalizados, deixando os testes limpos e sem repetição de lógica.
- O projeto está preparado para facilitar manutenção e extensibilidade.

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).
