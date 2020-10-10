# Frontend challenge - Grupo Boticário

This is a challenge for a frontend developer position at [Grupo Boticário](https://www.grupoboticario.com.br/).

This application is a simple cashback app. You can sign up, sign in, order some
items and get some cashback for your next purchase. In the next purchase you can
choose use your accumulated credits.

## Install dependencies

```
yarn
```
or
```
npm install
```

## Starting the project

Start the mocked backend rest api

```
yarn start:back
```

Start the react app

```
yarn start:front
```

There is a existent user for tests with an order, this user can be used if you
don't want to create one.

- e-mail: test@test.com
- password: test123

## Tests

### Unit tests

> I had 2 weeks to code this project on my free time. I chose to write the tests
> just for a few key components to write some extra features in the project.
> All the login feature was tested and it's in the following files.

- [React component](https://github.com/jampow/boticario-challenge/blob/master/packages/web-app/src/pages/signin/component.test.js)
- [API comunication](https://github.com/jampow/boticario-challenge/blob/master/packages/web-app/src/api/signin.test.js)
- [Apply cashback function](https://github.com/jampow/boticario-challenge/blob/master/packages/web-app/src/common/helpers/cashback.test.js)

To run the unit tests you'll need to up backend mock server.
I chose to not mock the requests with jest because this is a mocked backend.
I like to think like [Kent C Doods about mocking requests](https://kentcdodds.com/blog/stop-mocking-fetch).

After the mocked backend server running. You can run the unit tests with

```
yarn test
```

### E2E

To run end-to-end tests, the backend and frontend applications should be up and
running. After that run

```
yarn e2e
```

## My considerations about the project

Unfortunately, I couldn't do everything I'd like to, but I believe that I reached
some goals

> *Some personal comments in italic*

### Requirements

- [X] Sign up screen with the following fields:
  - Nome (Name)
  - CPF (*Brazilian document*)
  - E-mail
  - Senha (Password)
- [X] Login screen with the following fields:
  - E-mail
  - Senha (Password)
- [X] Order screen
> *I chose a search field with autocomplete that you can use with product code
> or name to search the product.
- [X] Orders list showing the informations:
  - Código da compra (Order number)
  - Valor (Total price)
  - Data (Date)
  - % de cashback aplicado (Cashback % applied)
  - Valor do cashback (Cashback value)
  - Status do cadastro (Order status - Validation | Reproved | Approved)
- [X] Show total accumulated cashback

### Technical requirements

- [X] Use one of this frameworks:
  - Angular
  - React :heavy_check_mark:
  - Vue.js
- [X] Use one of this visual frameworks:
  - Bootstrap :heavy_check_mark:
  - Material-UI
  - Bulma
- [X] Responsive design
- [X] Integration with a mocked API
- [X] Follow good practices of code and architecture
- [X] Unit Tests:
  - Jasmine
  - Jest :heavy_check_mark:

### Optional technical requirements

- [X] Automated Tests (E2E).
- [X] Good practices of git.
> *I made small commits and linked each commit with the respective issue.
> So you can track the commit of each issue in the github's interface.
- [ ] State management:
  - Redux,
  - NGRX,
  - MobX
- [ ] Webcomponents cross-platform
- [ ] Offline cache com service worker
- [X] JWT authentication

## Dependencies

Some of the most important dependencies of this project

- [Axios](https://github.com/axios/axios) - To consume rest API
- [CommitLint](https://github.com/conventional-changelog/commitlint) - To help validate the commit messages pattern
- [ESLint](https://github.com/eslint/eslint) - To help keeping the code standards
- [EditorConfig](https://github.com/editorconfig/) - To configure the editor spaces identations and a few other configs
- [Husky](https://github.com/typicode/husky) - To use git hooks easily
- [JSON Server](https://github.com/typicode/json-server) - To mock the backend server
- [Lerna](https://github.com/lerna/lerna) - Monorepo manager.
- [Nightwatch](https://github.com/nightwatchjs/nightwatch) - To write e2e tests
- [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap) - For the visual components
