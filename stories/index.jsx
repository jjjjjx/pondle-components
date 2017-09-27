import React from "react";
import { storiesOf } from '@storybook/react';
import blueprint from "../src/styles/blueprint.css";

// Components
import Button from "../src/components/Button";
import Dashcard from "../src/components/Dashcard";
import FieldError from "../src/components/form/FieldError";
import IconArrowLeft from "../src/components/Icons/IconArrowLeft";
import IconArrowRight from "../src/components/Icons/IconArrowRight";
import IconCaretDown from "../src/components/Icons/IconCaretDown";
import IconDashboard from "../src/components/Icons/IconDashboard";
import IconLogout from "../src/components/Icons/IconLogout";
import IconMessages from "../src/components/Icons/IconMessages";
import IconMore from "../src/components/Icons/IconMore";
import IconMoreVertical from "../src/components/Icons/IconMoreVertical";
import IconPeople from "../src/components/Icons/IconPeople";
import IconProfile from "../src/components/Icons/IconProfile";
import IconProjects from "../src/components/Icons/IconProjects";
import IconReports from "../src/components/Icons/IconReports";
import IconSettings from "../src/components/Icons/IconSettings";
import Input from "../src/components/form/Input";
import Label from "../src/components/form/Label";
import Logo from "../src/components/Logo";
import Select from "../src/components/form/Select";
import Spinner from "../src/components/Spinner";
import Textarea from "../src/components/form/Textarea";
import Topbar from "../src/components/Topbar";

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
  .addWithJSX("button with icon", () => (
    <Button>Hello Button <IconArrowRight /></Button>
  ))
  .addWithJSX("disabled button", () => (
    <Button disabled>Hello Button</Button>
  ))
  .addWithJSX("full width button", () => (
    <Button full>Hello Button</Button>
  ))



const Utils = () => (
  <div style={{padding: 30}}>Put utilities or other content here</div>
);

storiesOf("Dashcard", module)
  .addWithJSX("default dashcard", () => (
    <Dashcard>
      <h3>Default dashcard</h3>
      <p>Put any content in here</p>
    </Dashcard>
  ))
  .addWithJSX("dark dashcard", () => (
    <Dashcard cardStyle="dark">
      <h3>Dark dashcard</h3>
      <p>Put any content in here</p>
    </Dashcard>
  ))
  .addWithJSX("empty dashcard", () => (
    <Dashcard cardStyle="empty">
      <h3>Empty dashcard</h3>
      <p>This dashcard style is for widgets where no content is available</p>
    </Dashcard>
  ))
  .addWithJSX("dashcard with utilities", () => (
    <Dashcard utils={<Utils />}>
      <h3>Dashcard with utilities</h3>
      <p>Click the icon in the upper right corner</p>
    </Dashcard>
  ))



storiesOf("Form", module)
  .addWithJSX("Input", () => (
    <Input label="First name" subLabel="This is a sub label." type="text" input={{}} meta={{error: null, touched: false}} />
  ))
  .addWithJSX("Textarea", () => (
    <Textarea label="Message" subLabel="This is a sub label." placeholder="Type your message" input={{}} meta={{error: null, touched: false}} />
  ))
  .addWithJSX("Select", () => (
    <Select input={{}} meta={{error: null, touched: false}} label="Select an option" subLabel="This is a sub label.">
      <option>Option 1</option>
      <option>Option 2</option>
    </Select>
  ))
  .addWithJSX("Label", () => (
    <Label text="Label" subText="This is a sub label." />
  ))
  .addWithJSX("FieldError", () => (
    <FieldError text="This field is required" />
  ))



storiesOf("Icons", module)
  .addWithJSX("IconArrowLeft", () => (
    <div>
      <IconArrowLeft />
      <IconArrowLeft color="#ff0000" />
      <IconArrowLeft large />
      <IconArrowLeft size={3} />
    </div>
  ), { skip: 1 })
  .addWithJSX("IconArrowRight", () => (
    <div>
      <IconArrowRight />
      <IconArrowRight color="#ff0000" />
      <IconArrowRight large />
      <IconArrowRight size={3} />
    </div>
  ), { skip: 1 })
  .addWithJSX("IconCaretDown", () => (
    <div>
      <IconCaretDown />
      <IconCaretDown color="#ff0000" />
      <IconCaretDown large />
      <IconCaretDown size={3} />
    </div>
  ), { skip: 1 })
  .addWithJSX("IconDashboard", () => (
    <div>
      <IconDashboard />
      <IconDashboard color="#ff0000" />
      <IconDashboard large />
      <IconDashboard size={3} />
    </div>
  ), { skip: 1 })
  .addWithJSX("IconLogout", () => (
    <div>
      <IconLogout />
      <IconLogout color="#ff0000" />
      <IconLogout large />
      <IconLogout size={3} />
    </div>
  ), { skip: 1 })
  .addWithJSX("IconMessages", () => (
    <div>
      <IconMessages />
      <IconMessages color="#ff0000" />
      <IconMessages large />
      <IconMessages size={3} />
    </div>
  ), { skip: 1 })
  .addWithJSX("IconMore", () => (
    <div>
      <IconMore /><br />
      <IconMore color="#ff0000" /><br />
      <IconMore large /><br />
      <IconMore size={3} />
    </div>
  ), { skip: 1 })
  .addWithJSX("IconMoreVertical", () => (
    <div>
      <IconMoreVertical />
      <IconMoreVertical color="#ff0000" />
      <IconMoreVertical large />
      <IconMoreVertical size={3} />
    </div>
  ), { skip: 1 })
  .addWithJSX("IconPeople", () => (
    <div>
      <IconPeople />
      <IconPeople color="#ff0000" />
      <IconPeople large />
      <IconPeople size={3} />
    </div>
  ), { skip: 1 })
  .addWithJSX("IconProfile", () => (
    <div>
      <IconProfile />
      <IconProfile color="#ff0000" />
      <IconProfile large />
      <IconProfile size={3} />
    </div>
  ), { skip: 1 })
  .addWithJSX("IconProjects", () => (
    <div>
      <IconProjects />
      <IconProjects color="#ff0000" />
      <IconProjects large />
      <IconProjects size={3} />
    </div>
  ), { skip: 1 })
  .addWithJSX("IconReports", () => (
    <div>
      <IconReports />
      <IconReports color="#ff0000" />
      <IconReports large />
      <IconReports size={3} />
    </div>
  ), { skip: 1 })
  .addWithJSX("IconSettings", () => (
    <div>
      <IconSettings />
      <IconSettings color="#ff0000" />
      <IconSettings large />
      <IconSettings size={3} />
    </div>
  ), { skip: 1 })



storiesOf("Logo", module)
  .addWithJSX("Pondle logo", () => (
    <div style={{width: 120, height: 120}}>
      <Logo />
    </div>
  ), { skip: 1 })
  .addWithJSX("Pondle Flock logo", () => (
    <div style={{width: 120, height: 120}}>
      <Logo flock />
    </div>
  ), { skip: 1 })
  .addWithJSX("graphic only logo", () => (
    <div style={{width: 80, height: 80}}>
      <Logo hideText />
    </div>
  ), { skip: 1 })
  .addWithJSX("change logo color", () => (
    <div style={{width: 120, height: 120}}>
      <Logo color="#fd7400" />
    </div>
  ), { skip: 1 })



storiesOf("Spinner", module)
  .addWithJSX("Spinner", () => (
    <Spinner color="#1f8a70" />
  ))



storiesOf("Topbar", module)
  .addWithJSX("default Topbar", () => (
    <Topbar>
      <div>Hello Topbar</div>
      <div>
        <Button highlight>Hello Button</Button> <IconMessages size={2} /> <IconSettings size={2} />
      </div>
    </Topbar>
  ))
