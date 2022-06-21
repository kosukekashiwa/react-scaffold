# React Scaffold

[![CI](https://github.com/kosukekashiwa/react-scaffold/actions/workflows/main.yml/badge.svg)](https://github.com/kosukekashiwa/react-scaffold/actions/workflows/main.yml)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kosukekashiwa/react-scaffold)
![GitHub](https://img.shields.io/github/license/kosukekashiwa/react-scaffold)
![GitHub last commit](https://img.shields.io/github/last-commit/kosukekashiwa/react-scaffold)

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kosukekashiwa/react-scaffold/react)

`Node: v16.13.0` `npm: v8.1.0`

- [x] Dark Mode
- [x] Responsive Design
- [ ] Github Actions

## Usage

Run the app on development mode.

```
$ npm start
```

If you want to generate a `tokens.js`, export `tokens.json` from [Figma Tokens](https://www.figma.com/community/plugin/843461159747178978/Figma-Tokens) and run:

```
$ npm run token
```

Run unit test in watch mode. Except `:watch` if you want to run it only once.

```
$ npm run test:watch
```

Run `eslint --fix` and `prettier --write`.

```
$ npm run format
```
<!--
## OSS

- Language
  - Typescript: "^4.6.2"
  - JSX
- Framework
  - React: "^18.0.0"
- State manegement
  - Redux Toolkit: "^1.8.0"
  - react-redux: "^8.0.0"
- Routing
  - react-router-dom: "^6.2.2"
- Design system
  - MUI: "^5.5.1"
  - emotion: "^11.8.2"
  - ~~Atomic Design~~
  - Design tokens
    - Figma Tokens (Figma Plugin)
    - Token Transformer: "^0.0.20"
    - Style Dictionary: "^3.7.0"
- HTTP client
  - axios: "^0.26.1"
- Test
  - React Testing Library: "^12.1.4"
  - Jest: "^27.5.1"
- Mock server
  - MSW: "^0.39.2",
-->

## Views directory

### Comparison with atomid design

- atoms -> stytles (MUI theme file, Design token file)
- molecules, organisms -> components
- templates -> ecosystems
- pages -> natures

### Components subdirectory

- Actions
  - `button` `button group` `button select` ~~`collapse`~~ `dropdown` `link`
- Containers
  - `button sheet` `flex layout` `horizontal scroll` `image container` `menu` `react grid layout` `side panel` `side panel menu` `toolbar`
- Content Display
  - `accordion` `card` `carousel` `hero` `icon` `label` `list group` `person`
- Data Display
  - `avatar` `charts` `chart editor` `graph` `grid` `metric` `table` `tree`
- Feedback
  - `alert` `badge` `modal` `popover` `steps` `toast` `tooltip`
- Forms & Inputs
  - `checkbox` `datepicker` `file upload` `form` `input` `input group` `input icon` `input number` `label` `radio` `select` `slider` `switch` `textarea`
- Loading & Status
  - `loading` `progress` `pull to refresh` `slelton loader`
- Navigational
  - `breadcrumb` `header` ~~`menu`~~ `pagination` `tabs` ~~`tree`~~
- Search & Filters
  - `queryfield` `search` `select` `tag`

## License

[MIT](./LICENSE).
