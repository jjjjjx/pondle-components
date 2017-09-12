# pondle-components

A set of React UI components used to build front end apps for the Pondle health research platform.


### Demo & Examples

[Live demo](http://pondle-org.github.io/pondle-components/)


### Installation

```bash
$ npm install pondle-components --save
```


### Usage

```js
import Button from "pondle-components";

<Button>Button text</Button>
```


### Develop components with Storybook

```bash
$ npm run storybook
```

Open http://localhost:9001/ in your browser.

Then import your components into stories/index.jsx and render them like so:

```js
storiesOf("Button", module)
  .add("default button", () => (
    <Button>Button text</Button>
  ))
  .add("large button", () => (
    <Button large>Button text</Button>
  ))
```


### Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.
