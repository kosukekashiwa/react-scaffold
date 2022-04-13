# React Scaffold

`Homebrew: v3.3.4` `Nodebrew: 1v.1.0` `Node: v16.13.0`

- [x] Dark Mode
- [x] Responsive Design

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

## OSS

- Language
  - Typescript: "^4.6.2"
  - JSX
- Framework
  - React: "^17.0.2"
- State manegement
  - Redux Toolkit: "^1.8.0"
  - react-redux: "^7.2.6"
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
  - MSW: "^0.39.2",

## Views directory

### Comparison with atomid design

- atoms -> stytle (MUI theme file, Design token file)
- molecules, organisms -> components
- templates -> ecosystems
- pages -> natures

### Components subdirectory

- Actions
  - `buttons` `button group` `button select` `collapse` `dropdown` `link`
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
