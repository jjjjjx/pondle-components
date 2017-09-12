import React from "react";
import { storiesOf } from '@storybook/react';
import blueprint from "../src/styles/blueprint.css";

// Components
import Button from "../src/components/Button";

// Stories
storiesOf("Button", module)
  .addWithJSX("default button", () => (
    <Button>Hello Button</Button>
  ))
  .addWithJSX("large button", () => (
    <Button large>Hello Button</Button>
  ))
  .addWithJSX("highlight button", () => (
    <Button highlight>Hello Button</Button>
  ))
  .addWithJSX("outline button", () => (
    <Button outlineOnLight>Hello Button</Button>
  ))
  .addWithJSX("outline button on dark bg", () => (
    <div style={{backgroundColor: "#004258", padding: 20}}>
      <Button outlineOnDark>Hello Button</Button>
    </div>
  ), { skip: 1 })
  .addWithJSX("outline highlight button", () => (
    <Button outlineOnLight highlight>Hello Button</Button>
  ))
