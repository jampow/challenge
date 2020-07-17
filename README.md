# Desafio front end - Grupo Boticário

Projeto desafio para vaga de front-end no Grupo Boticário.

## Instalar dependêcias

```
yarn
```
ou
```
npm install
```

## Para iniciar o projeto

Suba o servidor com o mock do backend

```
yarn start:back
```

Inicie a aplicação react

```
yarn start:front
```

Existe um usuário de teste com um pedido já cadastrado, que pode ser usado.

- e-mail: test@test.com
- password: test123

Fique a vontade para criar seu próprio usuário. :-)

## Tests

### Unitários

Tive alguns imprevistos e acabei não coneguindo fazer os testes de toda a
aplicação, porém fiz os unitários de toda a parte de login da aplicação.

- [Teste do compoenente react](https://github.com/jampow/boticario-challenge/blob/master/packages/web-app/src/pages/signin/component.test.js)
- [Teste da comunicação com a API](https://github.com/jampow/boticario-challenge/blob/master/packages/web-app/src/api/signin.test.js)
- [Teste da função que aplica o cashback](https://github.com/jampow/boticario-challenge/blob/master/packages/web-app/src/common/helpers/cashback.test.js)

Para executar os testes unitários é preciso estar com o mock do back-end de pé.
Decidi não mockar as requisições com o jest por ter um banco de dados de mock
no projeto. Tenho um pouco da [opinião do Kent C. Dodds sobre os mocks de
requisições](https://kentcdodds.com/blog/stop-mocking-fetch).

Após o servidoe de back-end estar de pé, rode o comando

```
yarn test
```

### E2E

Para executar os testes end-to-end, o servidores de back e front precisam estar
rodando, depois execute o comando

```
yarn e2e
```

## Minhas considerações

Infelizmente não consegui fazer tudo o que gostaria, mas acredito que cumpri com
os objetivos do projeto, conforme abaixo:

> *Em itálico alguns comentários*

### Requisitos

- [X] Tela de cadastro de um novo revendedor(a) solicitando os campos:
  - Nome
  - CPF
  - E-mail
  - Senha
- [X] Tela de login com os campos:
  - E-mail
  - Senha
- [X] Tela de cadastro de compras onde deverá ser informado o código, valor e
data. 
> *Coloquei um campo de busca com autocomplete que pode ser usado tanto por
> código quanto pelo nome para fazer a busca do produto. Acabei não gostando da
> tabela que coloquei para listar os itens, subtotal e total porque é difícil
> deixar esse negócio bom num celular, mas não consegui achar uma outra solução.*
- [X] Tela de listagem das compras cadastradas exibindo as informações de:
  - Código da compra
  - Valor
  - Data
  - % de cashback aplicado
  - Valor do cashback
  - Status do cadastro (Em avaliação, Reprovado ou Aprovado)
- [X] Tela para exibir o valor de cashback acumulado até o momento

### Requisitos Técnicos obrigatórios

- [X] Utilizar um dos frameworks:
  - Angular
  - React :heavy_check_mark:
  - Vue.js
- [X] Utilizar um framework de UI:
  - Bootstrap :heavy_check_mark:
  - Material-UI
  - Bulma
- [X] Design Responsivo
- [X] Integração com uma API fake
- [X] Respeitar boas práticas de código e arquitetura
- [X] Testes unitários:
  - Jasmine
  - Jest :heavy_check_mark:

### Requisitos Técnicos opicionais

- [X] Testes automatizados (E2E)
- [X] Utilização de boas práticas de git.
> *No projeto do github usei as issues
> para anotar e não esquecer alguns detalhes. Vinculei os commits com as issues,
> pois acredito ser uma boa prática de git, assim como commits pequenos. Achei
> melhor comentar, só para não passar desapercebido. eheheh*
- [ ] State management:
  - Redux,
  - NGRX,
  - MobX
- [ ] Webcomponents cross-platform
- [ ] Offline cache com service worker
> *Conseguiria habilitar o cache com apenas uma linha no código, mas não quis 
> habilitar apenas por habilitar, queria colocar uma mensagem de feedback e
> algumas outras funcionalidades para o offline, mas fiquei sem tempo.* :-(
- [X] Autenticação com JWT

## Dependências

Algumas das principais

- [Axios](https://github.com/axios/axios) - Para fazer as requisições para o backend
- [CommitLint](https://github.com/conventional-changelog/commitlint) - Para validar os padrões usados nas mensagens de commit
- [ESLint](https://github.com/eslint/eslint) - Para validar os padrões de escrita de código
- [EditorConfig](https://github.com/editorconfig/) - Para ajudar na configuração do editor de texto
- [Husky](https://github.com/typicode/husky) - Para simplificar a instalação/configuração dos git-hooks
- [JSON Server](https://github.com/typicode/json-server) - Para o mock do backend
- [Lerna](https://github.com/lerna/lerna) - Gerenciador de monorepo. Para poder usar apenas um repositório e conseguir termos vários projetos sob o mesmo versionamento
- [Nightwatch](https://github.com/nightwatchjs/nightwatch) - Para rodar os testes e2e
- [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap) - Para os componentes visuais
