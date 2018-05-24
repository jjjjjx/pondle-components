import React from "react";
import { storiesOf } from '@storybook/react';
import blueprint from "../src/styles/blueprint.css";
import CssBaseline from "../src/styles/CssBaseline.css";

// Components
import {
  Avatar,
  Badge,
  Button,
  DateSelect,
  Dashcard,
  DataTable,
  FieldError,
  IconArrowLeft,
  IconArrowRight,
  IconCaretDown,
  IconDashboard,
  IconGlobe,
  IconLogout,
  IconMessages,
  IconMore,
  IconMoreVertical,
  IconPeople,
  IconProfile,
  IconProjects,
  IconReports,
  IconResources,
  IconSettings,
  IconSurveys,
  Input,
  Label,
  Logo,
  Select,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Textarea,
  Topbar
} from "../src";

// Stories
storiesOf("Avatar", module)
  .addWithJSX("default avatar", () => (
    <Avatar />
  ))
  .addWithJSX("avatar with custom src URL", () => (
    <Avatar src="http://www.cat-lovers-only.com/images/tabby-purrito-400.jpg" alt="Purrito" />
  ))



storiesOf("Badge", module)
  .addWithJSX("default badge", () => (
    <Badge>10</Badge>
  ))
  .addWithJSX("round badge", () => (
    <Badge round>10</Badge>
  ))



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
  .addWithJSX("minimal button", () => (
    <Button minimal>Hello Button</Button>
  ))
  .addWithJSX("outline button", () => (
    <Button outlineOnLight>Hello Button</Button>
  ))
  .addWithJSX("outline button on dark bg", () => (
    <div style={{backgroundColor: "#004258", height: "100vh"}}>
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



const dataTableData = [
  { id: "a", name: "apple", color: "red", price: 2 },
  { id: "b", name: "banana", color: "yellow", price: 3 },
  { id: "c", name: "orange", color: "orange", price: 2.5 },
];

const dataTableColumns = [
  { label: "Fruit", resolve: item => item.name },
  { label: "Color", resolve: item => <span style={{color: item.color}}>{item.color}</span> },
  { label: "Price", resolve: item => `$${item.price}` }
];

storiesOf("DataTable", module)
  .addWithJSX("default data table", () => (
    <DataTable data={dataTableData} columns={dataTableColumns} fieldKey="id" />
  ))
  .addWithJSX("striped data table", () => (
    <DataTable striped data={dataTableData} columns={dataTableColumns} fieldKey="id" />
  ))



storiesOf("Form", module)
  .addWithJSX("Input", () => (
    <Input label="First name" subLabel="This is a sub label." type="text" input={{}} meta={{error: null, touched: false, dirty: false}} />
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
  .addWithJSX("DateSelect", () => (
    <DateSelect label="Date of birth" input={{onChange: (e) => console.log(e)}} meta={{error: null, touched: false, dirty: false}} />
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
  .addWithJSX("IconGlobe", () => (
    <div>
      <IconGlobe />
      <IconGlobe color="#ff0000" />
      <IconGlobe large />
      <IconGlobe size={3} />
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
  .addWithJSX("IconResources", () => (
    <div>
      <IconResources />
      <IconResources color="#ff0000" />
      <IconResources large />
      <IconResources size={3} />
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
  .addWithJSX("IconSurveys", () => (
    <div>
      <IconSurveys />
      <IconSurveys color="#ff0000" />
      <IconSurveys large />
      <IconSurveys size={3} />
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
  .addWithJSX("Spinner without animation", () => (
    <Spinner color="#1f8a70" animate={false} />
  ))



storiesOf("Table", module)
  .addWithJSX("Default table", () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Heading1</TableCell>
          <TableCell>Heading2</TableCell>
          <TableCell>Heading3</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Row1Col1</TableCell>
          <TableCell>Row1Col2</TableCell>
          <TableCell>Row1Col3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row2Col1</TableCell>
          <TableCell>Row2Col2</TableCell>
          <TableCell>Row2Col3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row3Col1</TableCell>
          <TableCell>Row3Col2</TableCell>
          <TableCell>Row3Col3</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ))
  .addWithJSX("Striped table", () => (
    <Table striped>
      <TableHead>
        <TableRow>
          <TableCell>Heading1</TableCell>
          <TableCell>Heading2</TableCell>
          <TableCell>Heading3</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Row1Col1</TableCell>
          <TableCell>Row1Col2</TableCell>
          <TableCell>Row1Col3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row2Col1</TableCell>
          <TableCell>Row2Col2</TableCell>
          <TableCell>Row2Col3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row3Col1</TableCell>
          <TableCell>Row3Col2</TableCell>
          <TableCell>Row3Col3</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ))



storiesOf("TablePagination", module)
  .addWithJSX("default table pagination", () => (
    <TablePagination count={52} page={3} rowsPerPage={10} onChangePage={newPageIndex => console.log("Go to page index", newPageIndex)} />
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
